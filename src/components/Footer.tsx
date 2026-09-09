'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SOCIAL = [
  { href: "#", label: "Instagram de Grani USCO", hover: "hover:text-neon-pink" },
  { href: "#", label: "Facebook de Grani USCO", hover: "hover:text-neon-green" },
  { href: "#", label: "WhatsApp de Grani USCO", hover: "hover:text-neon-ice" },
];

const QUICK_LINKS = [
  { href: "#menu", label: "Menú" },
  { href: "#about", label: "Sobre nosotros" },
  { href: "#location", label: "Ubicación" },
  { href: "#contact", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900/80 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold neon-text mb-2">Grani USCO</h2>
            <p className="text-gray-400">Granizados artesanales con alcohol</p>
            <ul className="flex justify-center md:justify-start space-x-4 list-none p-0 m-0">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className={`text-gray-300 ${s.hover} transition-colors duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            aria-label="Enlaces rápidos"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-3"
          >
            <h2 className="font-semibold text-lg neon-text-green mb-2">Enlaces rápidos</h2>
            <ul className="space-y-2 list-none p-0 m-0">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block hover:text-neon-pink transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.address
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-3 not-italic"
          >
            <h2 className="font-semibold text-lg neon-text-ice mb-2">Contacto</h2>
            <a
              href="tel:+573123456789"
              className="text-gray-400 flex items-center gap-2 hover:text-neon-ice transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
                />
              </svg>
              +57 312 345 6789
            </a>
            <a
              href="mailto:info@graniusco.com"
              className="text-gray-400 flex items-center gap-2 hover:text-neon-ice transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@graniusco.com
            </a>
          </motion.address>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700/50 text-center text-gray-500">
          <p>{`© ${new Date().getFullYear()} Grani USCO. Todos los derechos reservados.`}</p>
          <p className="mt-2 text-sm">Hecho con amor en Neiva, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
