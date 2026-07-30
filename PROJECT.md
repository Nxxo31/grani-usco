# Grani USCO — Landing Page de Granizados con Alcohol

## Estado
- **Versión**: 0.1.0
- **Estado**: MVP — Landing page funcional
- **Última actualización**: 2026-07-12

## Descripción
Landing page para un negocio de granizados con alcohol. Sitio informativo con menú, sección "sobre nosotros", ubicación y contacto. Diseño con estética neon y glassmorphism.

## Stack
- **Framework**: Next.js 16.2.9 (App Router)
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4 con PostCSS
- **Animaciones**: Framer Motion 12.40.0
- **Runtime**: React 19.2.4 / Node.js

## Estructura del Proyecto
```
grani-usco/
├── src/
│   └── app/
│       ├── page.tsx          # Landing page principal
│       ├── layout.tsx        # Layout raíz con fonts y metadata
│       └── globals.css       # Estilos globales y variables CSS
├── public/                   # Assets estáticos
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Landing Page — Secciones Implementadas

### Navbar
- Logo "Grani USCO"
- Navegación: Menú, Sobre nosotros, Ubicación, Contacto

### Hero Section
- Título con efecto neon
- Subtítulo descriptivo
- CTA "Ver Menú"
- Background con partículas animadas

### Sección Menú
- Grid de 6 productos (granizados con alcohol)
- Cards con glassmorphism
- Animaciones de entrada con Framer Motion

### Sección Sobre Nosotros
- Descripción de la empresa
- Glassmorphism container

### Sección Ubicación
- Dirección y horarios
- Mapa placeholder

### Footer
- Brand y redes sociales
- Enlaces rápidos
- Información de contacto
- Copyright

## Roadmap

### Fase 1: Scaffolding ✅ (Completado)
- [x] Setup con create-next-app
- [x] TypeScript configurado
- [x] Tailwind CSS configurado
- [x] Estructura base del proyecto
- [x] Landing page funcional

### Fase 2: Pulido de Contenido
- [ ] Reemplazar placeholder de mapa con Google Maps embed
- [ ] Fotos reales de los granizados (CC0 o del cliente)
- [ ] Texto final de "Sobre Nosotros"
- [ ] Información de contacto real (teléfono, WhatsApp, redes)

### Fase 3: SEO y Performance
- [ ] Metadata optimizada (OG tags, description)
- [ ] Optimización de imágenes (Next.js Image)
- [ ] Responsive design verification en móviles
- [ ] Lighthouse CI > 90

### Fase 4: Deploy
- [ ] Deploy en Vercel o Oracle Cloud
- [ ] Dominio personalizado
- [ ] Analytics básico

## Comandos
```bash
npm run dev          # Servidor de desarrollo (localhost:3000)
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # ESLint
```

## Design System
```css
:root {
  --neon-pink: #FF2D55;
  --neon-green: #39FF14;
  --neon-ice: #00D2FF;
}
```
- Glassmorphism: `backdrop-filter: blur()` en cards
- Estética: neon + y2k sobre fondo oscuro

## Limitations
- El menú tiene 6 productos hardcodeados — sin CMS ni admin panel
- El mapa es un placeholder — sin integración real
- Sin backend ni base de datos — sitio 100% estático
- Sin i18n — solo español