'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-16 pb-20 overflow-hidden">
        {/* Background particles */}
        <div className="absolute inset-0 -z-10">
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,45,85,0.1),transparent)]"
            style={{ 
              opacity: 0.6,
              animation: 'float 6s ease-in-out infinite' 
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(57,255,20,0.1),transparent)]"
            style={{ 
              opacity: 0.4,
              animation: 'float 8s ease-in-out infinite reverse' 
            }}
          />
        </div>

        <div className="relative z-10 text-center space-y-8">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl neon-text mb-4">
            Grani USCO
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
            Granizados artesanales con el mejor sabor de Neiva
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neon-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-neon-pink/90 transition-all duration-300 neon-text shimmer flex items-center gap-2"
          >
            Ver Menú
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text-green">
            Nuestro Menú
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Drink Cards */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glassmorphism p-6 hover:scale-[1.02] transition-all duration-300 border-neon-pink/20"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 neon-text">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                </svg>
                Tropical Bliss
              </h3>
              <p className="text-gray-300 mb-4">Piña, coco, ron blanco y toque de lima</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">$12.000</span>
                <span className="px-3 py-1 bg-neon-pink/20 text-neon-pink rounded">Alcohol incluido</span>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="glassmorphism p-6 hover:scale-[1.02] transition-all duration-300 border-neon-green/20"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 neon-text-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                </svg>
                Green Fury
              </h3>
              <p className="text-gray-300 mb-4">Matcha, kiwi, vodka y miel de agave</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">$13.000</span>
                <span className="px-3 py-1 bg-neon-green/20 text-neon-green rounded">Alcohol incluido</span>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="glassmorphism p-6 hover:scale-[1.02] transition-all duration-300 border-neon-ice/20"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 neon-text-ice">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                </svg>
                Ice Dragon
              </h3>
              <p className="text-gray-300 mb-4">Maracuyá, guaraná, tequila blanco y chile tajín</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">$11.000</span>
                <span className="px-3 py-1 bg-neon-ice/20 text-neon-ice rounded">Alcohol incluido</span>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="glassmorphism p-6 hover:scale-[1.02] transition-all duration-300 border-neon-pink/20"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 neon-text">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                </svg>
                Strawberry Fields
              </h3>
              <p className="text-gray-300 mb-4">Fresa, leche condensada, ron oscuro y chocolate blanco</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">$12.500</span>
                <span className="px-3 py-1 bg-neon-pink/20 text-neon-pink rounded">Alcohol incluido</span>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="glassmorphism p-6 hover:scale-[1.02] transition-all duration-300 border-neon-green/20"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 neon-text-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                </svg>
                Mango Tango
              </h3>
              <p className="text-gray-300 mb-4">Mango, chile, tamarindo y mezcal</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">$13.500</span>
                <span className="px-3 py-1 bg-neon-green/20 text-neon-green rounded">Alcohol incluido</span>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              className="glassmorphism p-6 hover:scale-[1.02] transition-all duration-300 border-neon-ice/20"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 neon-text-ice">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                </svg>
                Blue Lagoon
              </h3>
              <p className="text-gray-300 mb-4">Curacao azul, piña, ron blanco y crema de coco</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">$12.000</span>
                <span className="px-3 py-1 bg-neon-ice/20 text-neon-ice rounded">Alcohol incluido</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Sobre Nosotros</h2>
          <div className="glassmorphism mx-auto max-w-4xl p-8">
            <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-200 mb-6 leading-relaxed"
            >
              Grani USCO nació en 2023 de la pasión por crear experiencias únicas a través de granizados artesanales de alta calidad. Ubicados en el corazón de Neiva, combinamos técnicas tradicionales con ingredientes premium para ofrecer bebidas que no solo refrescan, sino que cuentan una historia en cada sorbo.
            </motion.p>
            
            <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-gray-200 leading-relaxed"
            >
              Nuestro compromiso es con la innovación constante, utilizando solo los mejores licores internacionales y frutas frescas de la región. Cada granizado es una obra de arte diseñada para estimular los sentidos y crear momentos inolvidables entre amigos.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text-green">Nuestra Ubicación</h2>
          <div className="glassmorphism mx-auto max-w-4xl p-8">
            <div className="space-y-6">
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-neon-pink/20 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg neon-text">Dirección</h3>
                  <p className="text-gray-300">Calle 12 #4-30, Barrio La Libertad, Neiva, Huila</p>
                </div>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg neon-text">Horario</h3>
                  <p className="text-gray-300">Lunes a Domingo: 4:00 PM - 2:00 AM</p>
                </div>
              </motion.div>

              {/* Map placeholder */}
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="h-96 bg-gradient-to-br from-neon-pink/10 via-neon-green/10 to-neon-ice/10 rounded-lg overflow-hidden border border-neon-pink/20 relative"
              >
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.049 2.027a9.049 9.049 0 00-12.754 5.82A9.049 9.049 0 003 17.25a9.046 9.046 0 005.748 8.118A9.053 9.053 0 0012 21a9.053 9.053 0 005.748-8.118A9.046 9.046 0 0021 17.25a9.049 9.049 0 00-12.754-5.82zm0 12.754a5.006 5.006 0 018.49-2.546A5.006 5.006 0 0119.5 12h-5a5.006 5.006 0 01-4.001 3.237z"/>
                  </svg>
                  <p className="mt-2 text-sm">Mapa interactivo - Haz clic para ver en Google Maps</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <a href="#" className="hover:text-neon-pink transition-colors duration-300">Menú</a>
                <a href="#" className="hover:text-neon-pink transition-colors duration-300">Sobre nosotros</a>
                <a href="#" className="hover:text-neon-pink transition-colors duration-300">Ubicación</a>
                <a href="#" className="hover:text-neon-pink transition-colors duration-300">Contacto</a>
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
    </>
  );
}