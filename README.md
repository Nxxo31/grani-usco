# Grani USCO 🍹

[![CI](https://github.com/Nxxo31/grani-usco/actions/workflows/ci.yml/badge.svg)](https://github.com/Nxxo31/grani-usco/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](tsconfig.json)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://grani-usco.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Sitio web de Grani USCO — Granizados artesanales con alcohol en Neiva, Colombia. Sabores únicos, calidad premium y la mejor experiencia para tus eventos.

**🔗 Sitio en vivo:** [grani-usco.vercel.app](https://grani-usco.vercel.app)

---

## Características SEO

El sitio está optimizado para buscadores con las siguientes implementaciones:

| Feature | Implementación | Archivo |
|---------|---------------|---------|
| **Metadata API** | Título, descripción, keywords, autor, publisher | `src/app/layout.tsx` |
| **Open Graph** | Tags completos para Facebook/WhatsApp (tipo, locale, URL, imagen 1200x630) | `src/app/layout.tsx` |
| **Twitter Cards** | `summary_large_image` con título y descripción | `src/app/layout.tsx` |
| **Sitemap dinámico** | `sitemap.xml` generado por Next.js | `src/app/sitemap.ts` |
| **Robots.txt** | Permite indexación, enlaza sitemap | `src/app/robots.ts` |
| **Canonical URL** | `metadataBase` + `alternates.canonical` | `src/app/layout.tsx` |
| **Robots directives** | `index: true`, `follow: true`, `max-image-preview: large` | `src/app/layout.tsx` |
| **Custom Fonts** | Geist Sans + Geist Mono con `next/font` (sin layout shift) | `src/app/layout.tsx` |
| **lang="es"** | Idioma declarado en `<html>` | `src/app/layout.tsx` |

### Keywords target

`granizados con alcohol` · `granizados artesanales` · `neiva colombia` · `eventos neiva` · `grani usco` · `cocktail helado` · `tragos helados`

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **Next.js** | 16.2.9 | Framework React, App Router, SEO metadata |
| **React** | 19.2.4 | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Styling utility-first |
| **Framer Motion** | 12.x | Animaciones de scroll y micro-interacciones |
| **Vercel** | — | Hosting + CI/CD |

---

## Capturas del Sitio

> **Nota:** Las capturas se actualizan automáticamente con cada deploy a Vercel.

### Hero Section

```
┌─────────────────────────────────────────────────┐
│  [Navbar: Inicio | Menú | Eventos | Contacto]  │
│                                                  │
│                                                  │
│          ✨ GRANI USCO ✨                        │
│    Granizados artesanales con el mejor           │
│         sabor de Neiva                           │
│                                                  │
│          [ Ver Menú → ]                          │
│                                                  │
│   (Background: gradientes neon animados           │
│    con partículas flotantes)                     │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Estilo Visual

- **Tema:** Dark mode con neon glow (rosa, verde lima)
- **Animaciones:** Framer Motion con `whileHover` y `whileTap`
- **Efectos:** `shimmer`, `neon-text`, gradientes radiales animados
- **Responsive:** Mobile-first con breakpoints de Tailwind

---

## Estructura del Proyecto

```
grani-usco/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Metadata API + SEO + fonts
│   │   ├── page.tsx         # Home page (Hero + secciones)
│   │   ├── globals.css      # Tailwind + custom utilities
│   │   ├── sitemap.ts       # Sitemap dinámico
│   │   ├── robots.ts        # Robots.txt dinámico
│   │   └── favicon.ico
│   └── components/
│       ├── Navbar.tsx       # Navegación superior
│       └── Footer.tsx       # Pie de página
├── public/
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── file.svg
├── .github/workflows/
│   └── ci.yml               # CI: lint + typecheck + build
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
└── vercel.json
```

---

## Empezando

### Prerrequisitos

- Node.js 18+
- npm o pnpm

### Instalación

```bash
git clone https://github.com/Nxxo31/grani-usco.git
cd grani-usco
npm install
```

### Desarrollo

```bash
npm run dev
# Abre http://localhost:3000
```

### Build de producción

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## CI/CD

El pipeline de CI (`.github/workflows/ci.yml`) ejecuta 3 capas de verificación:

1. **Lint** — `npm run lint` (ESLint + eslint-config-next)
2. **Typecheck** — `tsc --noEmit`
3. **Build** — `npm run build` (compilación Next.js)

El deploy a producción es automático en Vercel al hacer push a `main`.

---

## Deploy

El sitio está desplegado en Vercel: [grani-usco.vercel.app](https://grani-usco.vercel.app)

```bash
# Deploy manual
vercel --prod
```

---

## Licencia

MIT — ver [LICENSE](LICENSE) para más detalles.

---

## Autor

**Grani USCO** — Granizados artesanales con alcohol, Neiva, Colombia.
