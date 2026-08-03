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
├─ index.html        # HTML template
├─ tailwind.config.js
├─ postcss.config.js
└─ package.json
```

---

## 🙋‍♀️ Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License
This project is licensed under the MIT License – see the `LICENSE` file for details.
