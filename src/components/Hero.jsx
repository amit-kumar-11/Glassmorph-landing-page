import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-purple-50 to-purple-100">
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 3D Scene Container */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 hidden lg:block">
        <div className="relative w-full h-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-cyan-200 border-t-cyan-500 rounded-full animate-spin" />
            </div>
          )}
          <Spline
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
            onLoad={() => setIsLoading(false)}
            style={{ 
              width: '100%', 
              height: '100%',
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out'
            }}
          />
        </div>
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 text-center lg:text-left lg:max-w-none"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="lg:max-w-2xl">
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
          >
            <span className="block bg-gradient-to-r from-gray-900 via-purple-900 to-cyan-900 bg-clip-text text-transparent">
              Future
            </span>
            <span className="block bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Unfolds Here
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
          >
            Experience the intersection of cutting-edge design and innovative technology. 
            Where glassmorphism meets three-dimensional artistry.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-semibold text-lg backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Explore Experience
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/15 backdrop-blur-md border border-white/20 text-gray-800 rounded-2xl font-semibold text-lg hover:bg-white/25 transition-all duration-300 shadow-xl"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-gray-600" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;