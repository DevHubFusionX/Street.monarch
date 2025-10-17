import { HiArrowRight, HiMail, HiPhone } from 'react-icons/hi';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CTA = () => {
  const features = [
    "Free design mockup",
    "No minimum order",
    "24-hour support"
  ];

  return (
    <section className="relative bg-gradient-to-br from-red-500 to-red-600 text-white py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
            <span className="font-semibold text-sm">🚀 Limited Time: Free Shipping on Orders $50+</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Make Your Mark?
          </h2>
          <p className="text-xl md:text-2xl mb-4 opacity-95">
            Join 10,000+ creators who trust Street Monarch.
          </p>
          <p className="text-lg mb-10 opacity-90">
            Your custom tee is just one click away. Let's create something legendary.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30"
            >
              <span className="text-sm font-semibold">✓ {feature}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-2xl group"
          >
            <FaWhatsapp className="text-2xl group-hover:rotate-12 transition-transform" />
            Chat on WhatsApp
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-2 shadow-2xl group"
          >
            Start Designing Now
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/20 pt-8"
        >
          <p className="text-sm mb-4 opacity-90">Or reach us directly:</p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="mailto:hello@streetmonarch.com" className="flex items-center gap-2 hover:opacity-80 transition">
              <HiMail className="text-xl" />
              <span>hello@streetmonarch.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:opacity-80 transition">
              <HiPhone className="text-xl" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
            >
              <FaInstagram className="text-xl" />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
            >
              <FaTiktok className="text-xl" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
