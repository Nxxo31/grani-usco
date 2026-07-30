import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Custom fonts
export const montserrat = {
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
};

export const inter = {
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
};

export const metadata: Metadata = {
  title: "Grani USCO - Granizados Artesanales con Alcohol | Neiva, Colombia",
  description:
    "Granizados artesanales con alcohol en Neiva. Sabores únicos, calidad premium y la mejor experiencia para tus eventos. Reserva tu degustación.",
  keywords: [
    "granizados con alcohol",
    "granizados artesanales",
    "neiva colombia",
    "eventos neiva",
    "grani usco",
    "cocktail helado",
    "tragos helados",
  ],
  authors: [{ name: "Grani USCO" }],
  creator: "Grani USCO",
  publisher: "Grani USCO",
  metadataBase: new URL("https://grani-usco.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://grani-usco.vercel.app",
    siteName: "Grani USCO",
    title: "Grani USCO - Granizados Artesanales con Alcohol",
    description:
      "Granizados artesanales con alcohol en Neiva. Sabores únicos y calidad premium para tus eventos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grani USCO - Granizados Artesanales con Alcohol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grani USCO - Granizados Artesanales con Alcohol",
    description: "Granizados artesanales con alcohol en Neiva, Colombia.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}