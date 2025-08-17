import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import ScrollReveal from './components/ScrollReveal';
import ContactForm from './components/ContactForm';
import { 
  Sparkles, 
  Layers, 
  Zap, 
  Eye, 
  Palette, 
  Code, 
  Smartphone, 
  Globe,
  ArrowRight,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

function App() {
  const features = [
    {
      icon: Sparkles,
      title: "3D Integration",
      description: "Seamlessly integrate three-dimensional elements that respond to user interaction with fluid animations.",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Layers,
      title: "Glassmorphism",
      description: "Modern glass-like interfaces with backdrop blur effects that create depth and visual hierarchy.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized animations and efficient rendering ensure smooth 60fps performance across all devices.",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: Eye,
      title: "Visual Excellence",
      description: "Carefully crafted visual experiences that balance aesthetics with usability and accessibility.",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: Palette,
      title: "Design System",
      description: "Comprehensive design tokens and component library ensuring consistency across all touchpoints.",
      gradient: "from-rose-400 to-red-500"
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Well-structured, maintainable codebase following modern development practices and patterns.",
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  const capabilities = [
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Responsive design optimized for touch interactions and mobile performance."
    },
    {
      icon: Globe,
      title: "Cross Browser",
      description: "Compatible across all modern browsers with graceful fallbacks."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50/30 to-purple-50/30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                  Crafted Experiences
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Every element is designed with purpose, combining cutting-edge technology 
                with intuitive user experiences that captivate and engage.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <FeatureCard {...feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-cyan-50 to-purple-100" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30"
              style={{
                left: `${10 + (i * 8)}%`,
                top: `${20 + Math.sin(i) * 30}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                    Innovation
                  </span>
                  <br />
                  <span className="text-gray-900">Meets Design</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We push the boundaries of what's possible on the web, creating 
                  immersive experiences that blur the line between digital and reality.
                </p>

                <div className="space-y-6">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <capability.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {capability.title}
                        </h3>
                        <p className="text-gray-600">{capability.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                {/* Glassmorphic Card */}
                <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">98%</div>
                        <div className="text-gray-600">Performance</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Load Speed</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: '95%' }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Interactivity</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Visual Appeal</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-emerald-400 to-teal-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: '99%' }}
                            transition={{ duration: 1.5, delay: 0.9 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold shadow-lg"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Award Winning
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
                  Let's Create
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Something Amazing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Ready to push the boundaries of digital experience? Let's discuss 
                  your vision and create something extraordinary together.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span>Free consultation & project assessment</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span>Custom solutions tailored to your needs</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">Follow us:</span>
                  {[Github, Twitter, Linkedin].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Glassmorph</span>
            </div>
            
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Glassmorph. Crafted with precision and passion.
            </p>
            
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl mt-4 md:mt-0 hover:shadow-lg transition-all duration-300"
            >
              <span>Back to Top</span>
              <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;