# PROJECT.md — Grani USCO

> **Estado:** Activo | **Versión:** 0.1.0 | **Última actualización:** 2026-08-04

---

## 🎯 Objetivo Principal

Landing page de un negocio de granizados con alcohol en Neiva, Colombia — sitio informativo con estética neon + glassmorphism, menú, "sobre nosotros", ubicación y contacto, optimizado para SEO y dispositivos móviles.

## 🎯 Objetivos Secundarios

1. Presentar el menú de 6 granizados con alcohol en cards glassmorphism animadas
2. Posicionar el negocio localmente en Neiva con SEO técnico (robots.ts, sitemap.ts, metadata)
3. Servir como portfolio de frontend profesional con Next.js 16 + App Router
4. Habilitar PWA-ready y responsive-first para captar tráfico móvil (mayoría en Colombia)

---

## 📐 Arquitectura

### Stack Tecnológico

| Capa | Tecnología | Versión | Propósito |
|------|-----------|---------|-----------|
| Framework | Next.js | 16.2.9 (App Router) | RSC, rutasfile-based, SSR/SSG |
| Lenguaje | TypeScript | 5.x | Tipado estático |
| Estilos | Tailwind CSS | 4.x (PostCSS) | Utility-first, design tokens |
| Animaciones | Framer Motion | 12.40.0 | Entradas animadas de cards y secciones |
| Runtime | React | 19.2.4 | UI declarativa, RSC |
| SEO | Next.js Metadata API | 16.x | robots.ts, sitemap.ts, OG tags |
| Deploy | Vercel / Oracle Cloud | — | Edge CDN, ISR |

### Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────┐
│                Capa CLIENTE                          │
│       [Navbar] [Hero] [Menú] [Sobre] [Ubicación]     │
│       [Footer] — glassmorphism + neon + partículas   │
├─────────────────────────────────────────────────────┤
│                Capa RENDER                           │
│  Next.js App Router (RSC) → SSR/SSG por ruta          │
│  Framer Motion (animaciones client-side)              │
├─────────────────────────────────────────────────────┤
│                Capa SEO/DATOS                         │
│  layout.tsx (metadata) + robots.ts + sitemap.ts        │
│  Contenido estático en componentes (sin CMS)          │
└─────────────────────────────────────────────────────┘
```

### Flujo de Datos

```
[Visitante] → [Vercel Edge] → [Next.js SSR/SSG] → [layout.tsx carga fonts+metadata]
  → [page.tsx renderiza secciones: Navbar→Hero→Menú→Sobre→Ubicación→Footer]
  → [Framer Motion anima cards/entradas] → [robots.ts/sitemap.ts exponen rutas a crawlers]
```

---

## 📊 Matriz de Trazabilidad

| Req ID | Descripción | Componente | Estado | Verificación |
|--------|-------------|------------|--------|--------------|
| R-01 | Landing page con secciones: Hero, Menú, Sobre Nosotros, Ubicación, Contacto, Footer | src/app/page.tsx | ✅ | Build de producción + verificación visual |
| R-02 | Navbar con navegación a secciones | src/components/Navbar.tsx | ✅ | Click en links scrollea a sección |
| R-03 | Hero con título neon, subtítulo, CTA "Ver Menú", partículas animadas | src/app/page.tsx | ✅ | Inspección visual |
| R-04 | Menú: grid de 6 productos en cards glassmorphism animadas | src/app/page.tsx | ✅ | Framer Motion entrance animations |
| R-05 | Sección "Sobre Nosotros" con glassmorphism container | src/app/page.tsx | ✅ | Render correcto |
| R-06 | Footer con brand, redes sociales, enlaces rápidos, contacto | src/components/Footer.tsx | ✅ | Inspección visual |
| R-07 | robots.ts para crawlers | src/app/robots.ts | ✅ | `/robots.txt` responde |
| R-08 | sitemap.ts para indexación | src/app/sitemap.ts | ✅ | `/sitemap.xml` responde |
| R-09 | Metadata OG tags, description | src/app/layout.tsx | ✅ | Inspección de `<head>` |
| R-10 | Google Maps embed real en Ubicación | src/app/page.tsx | ⏳ | Placeholder actual — Fase 2 |
| R-11 | Fotos reales de granizados (CC0 o del cliente) | src/app/page.tsx | ⏳ | Placeholders actuales — Fase 2 |
| R-12 | Responsive verificado en móviles | src/app/page.tsx + globals.css | ✅ | Tailwind responsive utils |
| R-13 | Menú dinámico editable (CMS o admin) | — | ⏳ | Pendiente — Issue #1 |
| R-14 | Lighthouse CI > 90 | — | ⏳ | Pendiente — Fase 3 |

---

## 🏗️ Marcos Conceptuales

### Landing page conversion-focused
El diseño sigue el patrón clásico de landing de negocio local: Hero con valor propuesto → prueba social/credibilidad → oferta (menú) → ubicación y contacto → footer. Cada sección empuja hacia una conversión (visitar, contactar, ver menú).

### SEO local para Neiva
Optimización para búsquedas locales ("granizados Neiva", "granizados con alcohol Huila"): metadata con keywords geográficas, sitemap que expone todas las rutas, robots.ts que permite indexing. Sin Schema.org JSON-LD todavía (pendiente).

### Design system neon + glassmorphism
Tokens de color (`--neon-pink`, `--neon-green`, `--neon-ice`) + `backdrop-filter: blur()` en cards. La estética y2k/neon sobre fondo oscuro diferencia visualmente de landings corporativas genéricas — coherente con el producto (granizados con alcohol, festivo/nocturno).

---

## ✅ Justificación de Decisiones Técnicas

| Decisión | Opción elegida | Alternativas evaluadas | Razón |
|----------|---------------|----------------------|-------|
| Framework | Next.js 16 (App Router) | Astro, plain HTML, WordPress | App Router da SSR/SSG + metadata API nativa; Astro es más ligero pero menos ecosistema; WordPress es overkill para estático |
| Estilos | Tailwind CSS 4 | Styled-components, CSS modules | Utility-first acelera prototipado; design tokens via PostCSS; match con portfolio profesional |
| Animaciones | Framer Motion 12 | CSS animations puras, GSAP | Framer Motion integra con React y maneja entrance animations declarativamente; CSS puras sería más liviano pero menos mantenible |
| Contenido | Hardcodeado en componentes | Sanity CMS, Contentful, headless WordPress | Para 6 productos fijos, un CMS es overhead; Fase 2 evaluará menú dinámico si el cliente lo necesita |
| Deploy | Vercel | Oracle Cloud, Netlify | Vercel tiene integración nativa con Next.js y free tier suficiente para sitio estático de bajo tráfico |
| Sin i18n | Solo español | next-intl, i18n routing | Audiencia 100% local (Neiva); añadir i18n sería YAGNI hasta expansión |

---

## 📦 Estado de Implementación

### Fases Completadas

| Fase | Descripción | Commit | Verificación |
|------|-------------|--------|--------------|
| Fase 1 | Scaffolding Next.js + TS + Tailwind + estructura base + landing funcional | 88b72a7 | `npm run build` verde; verificación visual |
| Fase 1.1 | robots.ts, sitemap.ts, GitHub templates CI 3-layer | eebf944 | `/robots.txt` + `/sitemap.xml` sirven; CI workflow |
| Fase 1.2 | README project-specific docs, SEO features table, badges — PR #2 (merged) | 93fa944 | PR #2 merged 2026-07-31; README updated with stack, SEO table, badges |

### Próximos Pasos (Backlog)

| ID | Descripción | Prioridad | Issue |
|----|-------------|-----------|-------|
| B-1 | Fase 2 — Menú dinámico (CMS o admin panel) | Alta | #1 |
| B-2 | Reemplazar placeholder de mapa con Google Maps embed | Alta | — |
| B-3 | Fotos reales de los granizados | Alta | — |
| B-4 | Información real de contacto (teléfono, WhatsApp, redes) | Alta | — |
| B-5 | Fase 3 — Metadata OG optimizada, Schema.org JSON-LD | Media | — |
| B-6 | Optimización de imágenes (Next.js Image con lazy + AVIF) | Media | — |
| B-7 | Lighthouse CI > 90 | Media | — |
| B-8 | Fase 4 — Deploy Vercel/Oracle + dominio personalizado + analytics | Baja | — |

---

## ⚠️ Limitaciones Conocidas

1. El menú tiene 6 productos hardcodeados — sin CMS ni admin panel (es el siguiente hito, Issue #1)
2. El mapa es un placeholder — sin integración real con Google Maps (B-2)
3. Sin backend ni base de datos — el sitio es 100% estático (intencional por ahora)
4. Sin i18n — solo español (YAGNI hasta expansión geográfica)
5. Texto de "Sobre Nosotros" e info de contacto son placeholders pending del cliente

---

## 🔐 Seguridad

- Sitio estático: sin superficie de ataque de backend (sin formularios que escriban a DB)
- Headers de seguridad configurables via `next.config.ts` (CSP, X-Frame-Options)
- Sin manejo de credenciales de usuarios (sin auth)

---

## 📚 Referencias

- [Next.js 16 — App Router](https://next.dev/docs/app)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Next.js Metadata API](https://next.dev/docs/app/api-reference/functions/generate-metadata)
- [Vercel Deployment](https://vercel.com/docs)

---

*Generado por SophIA — Sebastian Velasco's autonomous operating system*
