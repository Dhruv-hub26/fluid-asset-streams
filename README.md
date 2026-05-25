# RIVR DeFi Dashboard - Premium Hero Section

A high-fidelity, high-performance replica of the RIVR DeFi dashboard hero section. This project was developed independently from scratch to master modern UI/UX engineering primitives, non-linear layout masking, complex layout cuts, and advanced micro-interactions.

## 🚀 Live Demo & Visuals

> 🪐 **Aesthetic Direction:** Anti-Gravity Glassmorphism, Matte Obsidian Deep-Space Backdrop, and Translucent Computational Layout Layers.

---

## ✨ Features & Architecture Breakdown

* **Dynamic Non-Linear Layout Cuts:** Implemented custom SVGs and faux-cutout corner masks (`src/components/BottomRightCorner.tsx`) to match complex structural design specs seamlessly.
* **Anti-Gravity Motion Dynamics:** Handcrafted scroll-fluid mechanics and hardware-accelerated animations using Framer Motion.
* **Premium Glassmorphism Aesthetic:** Utilized native backdrop filters (`backdrop-blur-xl`) blended with customized layout overlays to amplify visual depth.
* **Responsive Breakpoint Isolation:** Fully responsive layouts configured from mobile dimensions up to strict maximum dashboard container bounds (`max-w-[1536px]`).

---

## 🛠️ Tech Stack & Dependencies

* **Framework:** React 19 + TypeScript (Explicit Typing Layout)
* **Build Tool:** Vite (Ultra-fast Hot Module Replacement)
* **Styling Engine:** Tailwind CSS v4 (Modern compile-time utility utility engine)
* **Animation Engine:** `motion` (Imported from `'motion/react'`)
* **Icons:** `lucide-react`

---

## 💻 Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Dhruv-hub26/fluid-asset-streams.git](https://github.com/Dhruv-hub26/fluid-asset-streams.git)
   cd fluid-asset-streams
Install dependencies:

Bash
npm install
Launch the local development engine:

Bash
npm run dev
Open http://localhost:5173 in your browser to inspect the production state.

📂 Project Structure
Plaintext
src/
├── components/
│   ├── BottomLeftCard.tsx      # Yield statistics tracking capsule
│   ├── BottomRightCorner.tsx   # Complex faux-cutout responsive masking & SVG masks
│   ├── Hero.tsx               # Master layout wrapper & cloud-asset cinematic video
│   ├── HeroBadge.tsx          # Fluid Staking animated micro-interaction capsule
│   └── Navbar.tsx             # Linear layout navigation menu with directional arrows
├── App.tsx                    # Master initialization node
├── index.css                  # Typography configuration & global background resets
└── main.tsx                   # Render mount point
📝 Disclaimer
This project is an independent front-end design replica created purely for educational purposes, UI/UX asset mapping, and layout engineering optimization. All branding rights belong to their respective owners.