import { motion } from "framer-motion";
import { Users, Globe, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About UtilityPay
      </motion.h1>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
        UtilityPay is a smart platform built to simplify how you manage
        monthly Electricity, Gas, Water, and Internet bills — secure, fast, and beautiful.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {[
          {
            icon: <Users size={40} />,
            title: "User Focused",
            desc: "Built for convenience — manage all your bills from one dashboard.",
          },
          {
            icon: <Zap size={40} />,
            title: "Fast & Secure",
            desc: "We prioritize security while ensuring smooth experience.",
          },
          {
            icon: <Globe size={40} />,
            title: "Accessible Anywhere",
            desc: "Manage your bills from any device — mobile, tablet, or desktop.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-200 p-6 rounded-xl shadow-md text-center border border-rose-200"
          >
            <div className="flex justify-center text-rose-600 mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold text-rose-700 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
