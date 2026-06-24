'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900/80 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold neon-text mb-2">Grani USCO</h3>
            <p className="text-gray-400">Granizados artesanales con alcohol</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-neon-pink transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-neon-green transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-neon-ice transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-3"
          >
            <h3 className="font-semibold text-lg neon-text-green mb-2">Enlaces rápidos</h3>
            <nav className="space-y-2">
              <Link href="#menu" className="block hover:text-neon-pink transition-colors duration-300">Menú</Link>
              <Link href="#about" className="block hover:text-neon-pink transition-colors duration-300">Sobre nosotros</Link>
              <Link href="#location" className="block hover:text-neon-pink transition-colors duration-300">Ubicación</Link>
              <Link href="#contact" className="block hover:text-neon-pink transition-colors duration-300">Contacto</Link>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-3"
          >
            <h3 className="font-semibold text-lg neon-text-ice mb-2">Contacto</h3>
            <p className="text-gray-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/>
              </svg>
              +57 312 345 6789
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              info@graniusco.com
            </p>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700/50 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Grani USCO. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Hecho con ❤️ en Neiva, Colombia</p>
        </div>
      </div>
    </footer>
  );
}