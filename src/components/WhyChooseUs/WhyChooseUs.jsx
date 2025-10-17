import { HiSparkles, HiLightningBolt, HiColorSwatch, HiCurrencyDollar } from 'react-icons/hi';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <HiSparkles />,
      title: "Premium Quality",
      description: "100% cotton, eco-friendly inks, and prints that last",
      stat: "5-Star Rated"
    },
    {
      icon: <HiLightningBolt />,
      title: "Lightning Fast",
      description: "Order today, wear it this week. Express shipping available",
      stat: "2-5 Days"
    },
    {
      icon: <HiColorSwatch />,
      title: "Expert Design",
      description: "Professional designers ready to bring your ideas to life",
      stat: "Free Mockups"
    },
    {
      icon: <HiCurrencyDollar />,
      title: "Best Prices",
      description: "Premium quality without the premium price tag",
      stat: "From $19.99"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-red-500">Street Monarch?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're not just printing tees. We're building a movement.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="text-center group bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all"
            >
              <motion.div 
                className="text-6xl text-red-500 mb-4 flex justify-center"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition">{reason.title}</h3>
              <p className="text-sm text-gray-400 mb-3 leading-relaxed">{reason.description}</p>
              <div className="inline-block bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-full">
                <span className="text-red-500 font-semibold text-xs">{reason.stat}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
