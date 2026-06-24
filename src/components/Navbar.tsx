'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="text-2xl font-bold neon-text">
              Grani USCO
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#menu" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">
              Menú
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">
              Sobre Nosotros
            </Link>
            <Link href="#location" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">
              Ubicación
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neon-pink text-white px-6 py-2 rounded-full font-semibold hover:bg-neon-pink/90 transition-all duration-300 neon-text shimmer"
          >
            Ordenar
          </motion.button>
        </div>
      </div>
    </nav>
  );
}