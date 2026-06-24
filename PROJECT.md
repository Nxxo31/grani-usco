# Grani USCO - Proyecto de Gestión de Commodities Agrícolas

## 1. Análisis del Proyecto

### 1.1 Descripción General

**Grani USCO** es una plataforma web para la gestión de granos y commodities agrícolas. El proyecto está dirigido a productores, comercializadores y compradores de granos en la región, ofreciendo herramientas para el seguimiento de precios, gestión de inventario y cotizaciones en tiempo real.

### 1.2 Stack Tecnológico

- **Framework**: Next.js 16.2.9 (App Router)
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4 con PostCSS
- **UI Animations**: Framer Motion 12.40.0
- **Runtime**: React 19.2.4 / Node.js

### 1.3 Estructura del Proyecto

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

---

## 2. MVP - Minimum Viable Product

### 2.1 Features del MVP

| # | Feature | Descripción | Prioridad |
|---|---------|-------------|-----------|
| 1 | Dashboard con precios de granos | Visualización de cotizaciones actuales | Alta |
| 2 | CRUD básico de productos | Crear, leer, actualizar, eliminar granos | Alta |
| 3 | Tabla de cotizaciones | Listado de precios por commodity | Alta |

### 2.2 Commodities Soportados (MVP)

- Maíz
- Trigo
- Arroz
- Sorgo
- Soya
- Café
- Cacao
- Algodón

### 2.3 Datos de Cotización

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | string | UUID único |
| name | string | Nombre del commodity |
| price | number | Precio actual (COP/kg) |
| unit | string | Unidad de medida |
| change | number | Variación % |
| lastUpdated | Date | Última actualización |

---

## 3. Landing Page - Estructura Actual

La landing page existente incluye:

### 3.1 Navbar
- Logo "Grani USCO"
- Navegación: Menú, Sobre nosotros, Ubicación, Contacto

### 3.2 Hero Section
- Título con efecto neon
- Subtítulo descriptivo
- CTA "Ver Menú"
- Background con partículas animadas

### 3.3 Sección Menú
- Grid de 6 productos (granizados con alcohol)
- Cards con glassmorphism
- Animaciones de entrada con framer-motion

### 3.4 Sección Sobre Nosotros
- Descripción de la empresa
- Glassmorphism container

### 3.5 Sección Ubicación
- Dirección y horarios
- Mapa placeholder

### 3.6 Footer
- Brand y redes sociales
- Enlaces rápidos
- Información de contacto
- Copyright

---

## 4. Roadmap de Desarrollo

### Fase 1: Scaffolding ✅ (Completado)
- [x] Setup del proyecto con create-next-app
- [x] Configuración de TypeScript
- [x] Configuración de Tailwind CSS
- [x] Estructura base del proyecto
- [x] Landing page funcional

### Fase 2: MVP Core
- [ ] Crear componentes reutilizables (Navbar, Footer, Button, Card)
- [ ] Implementar routing con App Router
- [ ] Crear página de Dashboard
- [ ] Crear página de CRUD de productos
- [ ] Crear página de Cotizaciones

### Fase 3: Backend & Datos
- [ ] Definir modelo de datos (TypeScript interfaces)
- [ ] Crear API routes para CRUD
- [ ] Implementar estado con React Context o Zustand
- [ ] Mock data para cotizaciones

### Fase 4: UI/UX Enhancement
- [ ] Sistema de diseño (colores, tipografía, spacing)
- [ ] Gráficos de precios (Recharts o similar)
- [ ] Tablas de datos interactivas
- [ ] Responsive design optimization

### Fase 5: Funcionalidades Avanzadas
- [ ] Búsqueda y filtros
- [ ] Historial de precios
- [ ] Exportación de datos (CSV/PDF)
- [ ] Notificaciones de precio

### Fase 6: Deploy & Polish
- [ ] Optimización de Performance (Next.js Image, lazy loading)
- [ ] SEO optimization
- [ ] Deploy en Vercel
- [ ] Analytics básico

---

## 5. Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo (localhost:3000)

# Producción
npm run build        # Build de producción
npm run start        # Iniciar servidor de producción

# Calidad
npm run lint         # Linting con ESLint
```

---

## 6. Variables de Entorno (Futuro)

```env
# Database
DATABASE_URL=

# API Keys
MARKET_DATA_API_KEY=

# Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

---

## 7. Métricas de Éxito MVP

- [ ] Landing page carga en < 3s
- [ ] Dashboard muestra datos en tiempo real
- [ ] CRUD funcional sin errores
- [ ] Tabla de cotizaciones ordenable y filtrable
- [ ] Diseño responsive en móviles

---

## 8. Notas Técnicas

### Framer Motion
El proyecto usa framer-motion para animaciones. Ejemplo de uso:
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
/>
```

### Tailwind CSS v4
Tailwind v4 usa la directiva `@import "tailwindcss"` y variables CSS en `:root`.

### Variables CSS
```css
:root {
  --neon-pink: #FF2D55;
  --neon-green: #39FF14;
  --neon-ice: #00D2FF;
}
```

---

*Última actualización: 2026-06-24*
*Versión del proyecto: 0.1.0*