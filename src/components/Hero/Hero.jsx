import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
              <span className="text-red-500 font-semibold text-sm">🔥 Premium Streetwear Brand</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl fontggggg-bold leading-tight">
              Wear Your <span className="text-red-500">Vision.</span><br />Own Your <span className="text-red-500">Style.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 leading-relaxed">
              From bold graphics to minimalist designs — we transform your ideas into premium streetwear. 
              <span className="text-white font-semibold"> Fast. Fresh. Unforgettable.</span>
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/shop" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2 hover:shadow-xl group">
                  Explore Collection
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/custom" className="bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-red-500/50 group">
                  Design Your Tee
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xl">✓</span>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xl">✓</span>
                <span>Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xl">✓</span>
                <span>100% Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Showcase */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              <motion.div 
                className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border-4 border-red-500 shadow-2xl shadow-red-500/50"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-6xl mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >👕</motion.div>
                  <p className="text-gray-400">Your Design Here</p>
                </div>
              </motion.div>
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-red-500 rounded-full blur-3xl opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-white rounded-full blur-3xl opacity-10"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
