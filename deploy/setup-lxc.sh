#!/usr/bin/env bash
# One-time setup to run INSIDE the Proxmox LXC container (manually), for when
# you'd rather configure the web server directly instead of via deploy.sh --setup.
#
# Usage (inside CT, as root, with the repo cloned into the container):
#   bash /path/to/idaheliahjemmeside/deploy/setup-lxc.sh
#
# Afterwards, deploy the site with deploy/deploy.sh from the Proxmox host.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONF="$SCRIPT_DIR/nginx-idaheliahjemmeside.conf"
DOCROOT="/var/www/idaheliahjemmeside"

[ -f "$CONF" ] || { echo "nginx config not found at $CONF"; exit 1; }

echo "[setup] Installing nginx ..."
if ! command -v nginx >/dev/null 2>&1; then
  apt-get update
  DEBIAN_FRONTEND=noninteractive apt-get install -y nginx
fi

mkdir -p "$DOCROOT" /etc/nginx/sites-available /etc/nginx/sites-enabled
install -m 644 "$CONF" /etc/nginx/sites-available/idaheliahjemmeside.conf
ln -sf /etc/nginx/sites-available/idaheliahjemmeside.conf /etc/nginx/sites-enabled/idaheliahjemmeside.conf
rm -f /etc/nginx/sites-enabled/default

echo "[setup] Validating and enabling nginx ..."
nginx -t
systemctl enable nginx
systemctl start nginx || systemctl reload nginx

echo "[setup] Done. Docroot: $DOCROOT"
echo "[setup] Next: build the site and copy dist/ here, e.g. on the Proxmox host:"
echo "          ./deploy/deploy.sh <VMID> --build"