import { HiArrowRight, HiStar } from 'react-icons/hi';
import { motion } from 'framer-motion';

const FeaturedDesigns = () => {
  const designs = [
    { 
      id: 1, 
      name: "Urban Vibes", 
      price: "$29.99",
      badge: "Bestseller",
      rating: 4.9,
      sales: "500+ sold"
    },
    { 
      id: 2, 
      name: "Street Legend", 
      price: "$34.99",
      badge: "Limited",
      rating: 5.0,
      sales: "300+ sold"
    },
    { 
      id: 3, 
      name: "Neon Dreams", 
      price: "$32.99",
      badge: "New",
      rating: 4.8,
      sales: "200+ sold"
    },
    { 
      id: 4, 
      name: "Bold Statement", 
      price: "$29.99",
      badge: "Trending",
      rating: 4.9,
      sales: "450+ sold"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trending <span className="text-red-500">Designs</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our most-loved designs. Handpicked by the community, crafted for you.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {designs.map((design) => (
            <motion.div 
              key={design.id} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative">
                <motion.div 
                  className="bg-gray-100 aspect-square rounded-xl mb-4 flex items-center justify-center overflow-hidden relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {design.badge}
                  </div>
                  <motion.div 
                    className="text-8xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >👕</motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button 
                      className="bg-red-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Quick View
                      <HiArrowRight />
                    </motion.button>
                  </motion.div>
                </motion.div>
                <div className="flex items-center gap-1 mb-2">
                  <HiStar className="text-yellow-500" />
                  <span className="text-sm font-semibold">{design.rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({design.sales})</span>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-red-500 transition">{design.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-red-500 font-bold text-lg">{design.price}</p>
                  <span className="text-xs text-gray-500">Free Shipping</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition inline-flex items-center gap-2"
          >
            View All Designs
            <HiArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDesigns;
