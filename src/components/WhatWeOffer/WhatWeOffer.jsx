import { HiUpload, HiShoppingBag, HiUserGroup } from 'react-icons/hi';
import { motion } from 'framer-motion';

const WhatWeOffer = () => {
  const offers = [
    {
      icon: <HiUpload className="text-5xl" />,
      title: "Custom Printing",
      description: "Bring your vision to life. Upload your artwork, logo, or text and we'll print it on premium tees.",
      badge: "Most Popular"
    },
    {
      icon: <HiShoppingBag className="text-5xl" />,
      title: "Curated Collection",
      description: "Explore our exclusive streetwear designs. Fresh drops, limited editions, and trending styles.",
      badge: "New Arrivals"
    },
    {
      icon: <HiUserGroup className="text-5xl" />,
      title: "Bulk Orders",
      description: "Perfect for teams, events, or businesses. Get special pricing on orders of 10+ tees.",
      badge: "Save More"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
            How We <span className="text-red-500">Serve You</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Three ways to get your perfect tee. Choose what works best for you.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offers.map((offer, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-black text-white p-8 rounded-xl cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {offer.badge}
              </div>
              <motion.div 
                className="text-red-500 mb-6"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {offer.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
              <p className="text-gray-400 leading-relaxed">{offer.description}</p>
              <motion.div 
                className="mt-6 text-red-500 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
