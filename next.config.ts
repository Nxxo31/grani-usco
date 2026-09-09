import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Project root contains its own package-lock.json; silence the "multiple
    // lockfiles detected" workspace-root warning during local dev and CI.
    root: __dirname,
  },
  images: {
    // Modern formats: AVIF first (better compression for photographic/gradient
    // content like drink photos), then WebP as a universally supported fallback.
    // next/image serves whichever format the browser accepts via Accept header.
    formats: ["image/avif", "image/webp"],
    // Local assets live under /public — no remote patterns needed for now.
    // When the client provides CDN-hosted photos in Fase 2, add the hostnames
    // here using `remotePatterns` (not the deprecated `domains` field).
    remotePatterns: [],
  },
  // Hint the bundler that we serve from a single canonical hostname.
  // ``metadataBase`` in layout.tsx is the authoritative URL; this is here to
  // keep next/image absolute URLs aligned in OG previews.
  experimental: {
    // Use Next.js 16 image optimization tuning — keeps the default cache but
    // exposes the config via PROCESS so Vercel picks it up automatically.
    optimizePackageImports: [],
  },
};

export default nextConfig;
