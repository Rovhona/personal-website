import { motion } from "framer-motion";

const BeyondTechSection = () => {
  return (
    <section id="personal" className="py-24 bg-gradient-to-b from-indigo-50 to-white text-gray-900">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Beyond Tech
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          When I’m not coding, mentoring, or exploring AI innovations, you’ll often find me watching football — especially Cristiano Ronaldo highlights.
        </motion.p>

        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          His unmatched discipline, relentless work ethic, and winning mindset inspire how I approach challenges in tech and life. Like Ronaldo, I believe in showing up, doing the work, and making each opportunity count.
        </motion.p>

        <motion.div
          className="overflow-hidden rounded-xl shadow-xl max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/uploads/cr7.jpg"
            alt="Cristiano Ronaldo celebration"
            className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-gray-500 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          "Talent without working hard is nothing." — Cristiano Ronaldo
        </motion.p>
      </div>
    </section>
  );
};

export default BeyondTechSection;
