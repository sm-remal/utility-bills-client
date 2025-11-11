import { motion } from "framer-motion";
import { Users, Globe, Zap, CreditCard, CheckCircle, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users size={40} className="text-white" />,
      title: "User Focused",
      desc: "Manage all your bills from one dashboard.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Zap size={40} className="text-white" />,
      title: "Fast & Secure",
      desc: "We prioritize security while ensuring smooth experience.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Globe size={40} className="text-white" />,
      title: "Accessible Anywhere",
      desc: "Manage your bills from any device.",
      gradient: "from-green-400 to-teal-500",
    },
  ];

  const steps = [
    {
      icon: <CreditCard size={30} className="text-pink-600" />,
      title: "Add Your Bills",
      desc: "Add all your electricity, gas, water, and internet bills.",
    },
    {
      icon: <CheckCircle size={30} className="text-yellow-500" />,
      title: "Review & Confirm",
      desc: "Check bills and confirm your payment securely.",
    },
    {
      icon: <Clock size={30} className="text-green-500" />,
      title: "Pay Instantly",
      desc: "Pay bills instantly from anywhere at any time.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero About Section */}
      <section className="relative max-w-6xl mx-auto px-6 md:-mt-10 py-10 md:py-24">
        <motion.h1
          className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About UtilityPay
        </motion.h1>
        <motion.div
          className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 to-red-500 rounded-full mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.p
          className="text-gray-700 text-center max-w-3xl mx-auto text-lg mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          UtilityPay simplifies how you manage monthly Electricity, Gas, Water, and Internet bills — secure, fast, and beautiful.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-2xl shadow-xl text-center text-white bg-gradient-to-br ${item.gradient} border border-white/20 backdrop-blur-md transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/90 text-sm mb-4">{item.desc}</p>
              <button className="mt-2 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white font-medium transition">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-12 bg-white">
        <motion.h2
          className="text-4xl text-pink-600 font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Mission & Vision
        </motion.h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 text-lg mb-16">
          Our mission is to make bill payments effortless, transparent, and secure. We envision a world where managing your utilities is simple, fast, and worry-free.
        </p>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 md:mt-0 py-10 bg-gray-50">
        <motion.h2
          className="text-4xl text-pink-600 font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-400 to-red-400 mx-4 md:mx-20 rounded-3xl py-20 text-center text-white">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ready to Simplify Your Bills?
        </motion.h2>
        <motion.p
          className="max-w-xl mx-auto mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Join thousands of users who manage their utilities seamlessly with UtilityPay.
        </motion.p>
        <motion.button
          className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
};

export default About;
