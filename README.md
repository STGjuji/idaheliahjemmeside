# Ida Helia Photography Website


A modern, responsive photography portfolio and booking site built with **React**, **Vite**, and **Tailwind CSS**. It showcases Ida Helia's work, offers a pricing calculator, and lets clients submit booking requests directly.

---

## ✨ Features
- **Responsive design** – works on mobile, tablet, and desktop.
- **Dynamic portfolio gallery** – data persisted in `localStorage`.
- **Pricing calculator** – interactive UI that updates total price in DKK.
- **Public booking form** – users can request a photoshoot and receive a pre‑selected package.
- **Admin dashboard** – view, edit, and manage bookings, hour logs and portfolio items.
- **Sticky navigation** with booking count badge.
- **Tailwind CSS + Lucide icons** for a clean, modern look.

---

## 🛠️ Tech Stack
- **React 18** – component‑based UI.
- **Vite** – fast dev server and build tooling.
- **Tailwind CSS** – utility‑first styling.
- **Lucide‑react** – icons.
- **PostCSS / Autoprefixer** – CSS processing.

---

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/STGjuji/idaheliahjemmeside.git
cd idaheliahjemmeside

# Install dependencies (requires Node.js >=20)
npm install
```

---

## 🚀 Development
```bash
# Start the dev server (http://localhost:5173)
npm run dev
```
The site supports hot‑module replacement – changes appear instantly.

---

## 📦 Build for Production
```bash
npm run build
```
The build output is placed in the `dist/` folder and can be served with any static file host (e.g., Netlify, Vercel, Firebase Hosting).

---

## 🧭 Project Structure
```
├─ public/            # Static assets (favicon, etc.)
├─ src/
│  ├─ components/    # Reusable UI components (Navbar, Hero, Gallery, …)
│  ├─ data/          # Initial portfolio, bookings and hours‑log data
│  ├─ App.jsx        # Root component handling routing and state
│  └─ main.jsx       # Vite entry point
├─ deploy/           # Proxmox (LXC + nginx) deployment files
│  ├─ nginx-idaheliahjemmeside.conf   # nginx site config for the LXC
│  ├─ deploy.sh                       # Push dist/ into the CT (run on Proxmox host)
│  └─ setup-lxc.sh                    # Manual nginx setup (run inside the CT)
├─ index.html        # HTML template
├─ tailwind.config.js
├─ postcss.config.js
└─ package.json
```

---

## 🐧 Deploying on Proxmox (LXC + nginx)

The site is fully static (data lives in `localStorage`), so it runs fine from a
plain LXC container with **nginx** — no Node or Docker needed on the box.

### 1. Create the container
In the Proxmox web UI create an **LXC container** from a Debian 12 (bookworm)
template, e.g. ID `101`, with default networking, and start it.

### 2. Build the site (once)
```bash
npm install
npm run build        # produces the dist/ folder
```
The repo ships a prebuilt `dist/`, so this is only needed when you change the code.

### 3. Deploy to the container
Run from the **Proxmox host** (as root; `pct` is part of PVE):

```bash
# One-time: install nginx + config inside the CT, then push the site
./deploy/deploy.sh 101 --setup --build

# Later deploys (code changes only)
npm run build
./deploy/deploy.sh 101
```

### 4. DNS & HTTPS
- Point your A/AAAA records at the LXC’s IP.
- Set the correct `server_name` in `deploy/nginx-idaheliahjemmeside.conf`.
- For free TLS, install certbot inside the CT first:
  `sudo certbot --nginx -d yourdomain.dk -d www.yourdomain.dk`.

### Manual alternative
If you prefer to configure the container by hand, clone the repo **inside** the
CT and run `bash deploy/setup-lxc.sh`, then push the site
from the Proxmox host with `./deploy/deploy.sh <VMID>`.

---

## 🙋‍♀️ Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License
This project is licensed under the MIT License – see the `LICENSE` file for details.
