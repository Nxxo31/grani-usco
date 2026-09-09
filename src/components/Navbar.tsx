'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const NAV_LINKS = [
  { href: "#menu", label: "Menú" },
  { href: "#about", label: "Sobre Nosotros" },
  { href: "#location", label: "Ubicación" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Link
              href="/"
              className="text-2xl font-bold neon-text"
              aria-label="Grani USCO — Inicio"
            >
              Grani USCO
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 list-none p-0 m-0">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-gray-300 hover:text-neon-pink transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#menu"
            className="bg-neon-pink text-white px-6 py-2 rounded-full font-semibold hover:bg-neon-pink/90 transition-all duration-300 neon-text shimmer"
            aria-label="Ordenar granizados"
          >
            Ordenar
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
