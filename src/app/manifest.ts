import type { MetadataRoute } from "next";

/**
 * Web App Manifest — minimal but valid for Lighthouse PWA / installability.
 *
 * The icons reference the Next.js favicon + Apple icon shipped with the project.
 * When the client provides proper 192/512 PNG icons we'll extend `icons` here.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grani USCO - Granizados Artesanales con Alcohol",
    short_name: "Grani USCO",
    description:
      "Granizados artesanales con alcohol en Neiva, Colombia. Sabores únicos, calidad premium y la mejor experiencia para tus eventos.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0D",
    theme_color: "#0D0D0D",
    lang: "es-CO",
    categories: ["food", "drink"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
