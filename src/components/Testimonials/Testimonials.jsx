import { HiStar } from 'react-icons/hi';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Johnson",
      handle: "@marcusj",
      platform: "Instagram",
      icon: <FaInstagram />,
      text: "Street Monarch delivered beyond expectations! The print quality is insane and the fabric feels like luxury. Already ordered 3 more!",
      rating: 5,
      verified: true,
      image: "M"
    },
    {
      name: "Sarah Kim",
      handle: "@sarahkdesigns",
      platform: "TikTok",
      icon: <FaTiktok />,
      text: "Used Street Monarch for my brand launch and the response was CRAZY! My followers keep asking where I got them printed. 10/10 recommend! 🔥",
      rating: 5,
      verified: true,
      image: "S"
    },
    {
      name: "David Lopez",
      handle: "@davidlopez",
      platform: "Instagram",
      icon: <FaInstagram />,
      text: "Ordered 50 custom tees for my team event. Arrived in 3 days, perfect quality, and everyone is obsessed. Street Monarch is the GOAT!",
      rating: 5,
      verified: true,
      image: "D"
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
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
            <span className="text-red-500 font-semibold text-sm">⭐ Rated 4.9/5 by 1000+ Customers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real People. Real <span className="text-red-500">Reviews.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. See what our community is saying.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <HiStar className="text-yellow-500 text-xl" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-gray-500 text-xl">
                    {testimonial.icon}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold">{testimonial.name}</p>
                      {testimonial.verified && (
                        <span className="text-blue-500 text-sm">✓</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.handle}</p>
                  </div>
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
          <p className="text-gray-400 mb-4">Join 1000+ happy customers</p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="text-yellow-500 text-2xl" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
