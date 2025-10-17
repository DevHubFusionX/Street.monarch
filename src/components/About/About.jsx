import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const About = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "50K+", label: "Tees Printed" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    "Premium 100% cotton fabric",
    "Eco-friendly printing process",
    "Fast 2-5 day delivery",
    "Free design consultation",
    "Satisfaction guaranteed",
    "Bulk order discounts"
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-red-500">Street Monarch</span> Story
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
            We're not just another print shop. We're a <span className="font-bold text-black">movement</span> for creators, entrepreneurs, and dreamers who refuse to blend in.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Born from a passion for streetwear and self-expression, Street Monarch transforms your boldest ideas into premium wearable art. Every tee tells a story. What's yours?
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-red-500 transition-all"
            >
              <motion.h3 
                className="text-4xl font-bold text-red-500 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-black text-white p-8 md:p-12 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Why We're <span className="text-red-500">Different</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <HiCheckCircle className="text-red-500 text-2xl flex-shrink-0" />
                <span className="text-lg">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
