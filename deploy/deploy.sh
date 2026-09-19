#!/usr/bin/env bash
# Deploy Ida Helia site to a Proxmox LXC container running nginx.
#
# Usage (run from the Proxmox host, root or a user with PVE permissions):
#   ./deploy/deploy.sh <VMID> [--setup] [--build]
#
#   <VMID>     Proxmox LXC container ID, e.g. 101
#   --setup    One-time: install nginx and the site config inside the container
#   --build    Rebuild dist/ locally first (otherwise an existing dist/ is used)
set -euo pipefail

VMID="${1:?Usage: $0 <VMID> [--setup] [--build]}"
SETUP=0
BUILD=0
for arg in "$@"; do
  case "$arg" in
    --setup) SETUP=1 ;;
    --build) BUILD=1 ;;
  esac
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DIST_DIR="$REPO_DIR/dist"
DOCROOT="/var/www/idaheliahjemmeside"

# --- Build -------------------------------------------------------------
if [ "$BUILD" -eq 1 ] || [ ! -d "$DIST_DIR" ]; then
  echo "[deploy] Building site in $REPO_DIR ..."
  if ! command -v npm >/dev/null 2>&1; then
    echo "[deploy] npm not found on this host. Either run 'npm install && npm run build'"
    echo "[deploy] here, or build elsewhere and copy the dist/ folder into the repo."
    exit 1
  fi
  (cd "$REPO_DIR" && npm install && npm run build)
fi

# --- One-time container setup -----------------------------------------
if [ "$SETUP" -eq 1 ]; then
  echo "[deploy] Installing nginx and site config in CT $VMID ..."
  pct exec "$VMID" -- bash -c '
    set -euo pipefail
    if ! command -v nginx >/dev/null 2>&1; then
      apt-get update
      DEBIAN_FRONTEND=noninteractive apt-get install -y nginx
    fi
    mkdir -p /var/www/idaheliahjemmeside /etc/nginx/sites-available /etc/nginx/sites-enabled
  '
  pct push "$VMID" "$SCRIPT_DIR/nginx-idaheliahjemmeside.conf" "/etc/nginx/sites-available/idaheliahjemmeside.conf"
  pct exec "$VMID" -- bash -c '
    ln -sf /etc/nginx/sites-available/idaheliahjemmeside.conf /etc/nginx/sites-enabled/idaheliahjemmeside.conf
    rm -f /etc/nginx/sites-enabled/default
    nginx -t
    systemctl enable nginx
    systemctl start nginx || true
  '
fi

# --- Push built site --------------------------------------------------
echo "[deploy] Uploading dist/ to CT $VMID ..."
TARBALL="$(mktemp --suffix=.tar)"
trap 'rm -f "$TARBALL"' EXIT
tar -cf "$TARBALL" -C "$DIST_DIR" .

pct push "$VMID" "$TARBALL" /tmp/idaheliahjemmeside-dist.tar
pct exec "$VMID" -- bash -c "
  rm -rf $DOCROOT
  mkdir -p $DOCROOT
  tar -xf /tmp/idaheliahjemmeside-dist.tar -C $DOCROOT
  chown -R www-data:www-data $DOCROOT
  rm -f /tmp/idaheliahjemmeside-dist.tar
  systemctl reload nginx || systemctl restart nginx
"

echo "[deploy] Done. Site pushed to CT $VMID ($DOCROOT)."