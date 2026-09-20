# Nucleus Association

> Official web portal for **Nucleus** — *A Student Association of Nabadwip* & Cultural Centre located in Nabadwip, Nadia, West Bengal, India.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Overview

Nucleus is a recognized student association and cultural center based in Nabadwip, Nadia, West Bengal. Documented with over twenty years of community fellowship, the association brings together students, alumni, and local youth through cultural gatherings, community assemblies, and social initiatives.

This repository contains the official frontend web application designed with an emphasis on authentic information, institutional typography, and responsive modern web design.

---

## Features

- **Institutional Identity & Insignia**: Presents the official circular Nucleus atom insignia, representing energy, scholarship, and community unity.
- **Chronological Community Activities**: Showcases public assemblies, milestones (including the *#20yearslater* reunion and *Nabadwip Bakultala Praktanee* assembly), and cultural initiatives.
- **Authentic Social Media Hub**: Direct links and integrated highlights from official Facebook (*Nucleus Nabadwip*) and Instagram (*@nucleus_association*) channels.
- **Inquiry & Touchpoint Desk**: Lightweight, interactive inquiry submission form allowing students, alumni, and community members to get in touch.
- **Accessible & Responsive**: Desktop-first precision with mobile-first code, crafted with high-contrast warm palettes and WCAG-compliant styling.
- **Zero Mock / Placeholder Artifacts**: All content strictly reflects authentic institutional information.

---

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Bundler & Tooling**: Vite 6+
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Motion

---

## Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher (Node 20+ recommended)
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn` / `bun`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/nucleus-association.git
   cd nucleus-association
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local development server on port `3000` |
| `npm run build` | Compiles and bundles production files into `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs TypeScript compiler checks without emitting code |
| `npm run clean` | Removes the `dist/` build directory |

---

## Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── public/                   # Static assets
├── src/
│   ├── components/           # UI components (Header, Footer, Crest, SocialHub, Modals)
│   ├── data/                 # Institutional information and activity records
│   ├── views/                # Primary page views (Home, About, Programs, Activities, Contact)
│   ├── App.tsx               # Root application component & client-side router
│   ├── main.tsx              # Application entry point
│   ├── index.css             # Tailwind CSS entry point
│   └── types.ts              # TypeScript interfaces and shared type declarations
├── index.html                # HTML template with OpenGraph meta tags
├── package.json              # Project dependencies and script declarations
├── tsconfig.json             # TypeScript compiler configuration
├── vite.config.ts            # Vite configuration with relative base path
└── README.md                 # Project documentation
```

---

## Deployment

### GitHub Pages (Automated via Actions)

This repository includes a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. Push your repository to GitHub.
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Pushing to the `main` branch will automatically build and publish the site.

### Vercel / Netlify / Cloudflare Pages

The build output is standard static HTML/JS/CSS in the `dist` folder:
- **Build command**: `npm run build`
- **Output directory**: `dist`

---

## Official Social Channels

- **Facebook**: [Nucleus Nabadwip](https://www.facebook.com/people/Nucleus-Nabadwip/61550786618685/)
- **Instagram**: [@nucleus_association](https://www.instagram.com/nucleus_association/)

---

## License

This project is licensed under the [MIT License](LICENSE).
