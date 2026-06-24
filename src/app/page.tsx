'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

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
      <section id="menu" className="py-20 px-6 bg-gray-900/50">
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
      <section id="about" className="py-20 bg-gray-900/30">
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
      <section id="location" className="py-20">
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7"/>
                  </svg>
                  <p className="mt-2 text-sm">Mapa interactivo - Próximamente</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}