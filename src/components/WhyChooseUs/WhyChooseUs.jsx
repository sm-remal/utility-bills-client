import { motion } from "framer-motion";
import { Shield, Clock, Smartphone, FileDown, Smile } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield size={40} />,
      title: "Secure Payments",
      desc: "Your transactions are encrypted and completely safe.",
    },
    {
      icon: <Clock size={40} />,
      title: "Real-Time Updates",
      desc: "Get instant updates for your bill payments and status.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Responsive Design",
      desc: "Use the app seamlessly on mobile, tablet, or desktop.",
    },
    {
      icon: <FileDown size={40} />,
      title: "PDF Reports",
      desc: "Download your full payment history anytime you want.",
    },
    {
      icon: <Smile size={40} />,
      title: "User Friendly",
      desc: "Simple UI built for everyone — no complexity.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-10"
        >
          Why Choose UtilityPay?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-blue-50 rounded-2xl shadow p-6 hover:bg-blue-100"
            >
              <div className="flex justify-center text-blue-700 mb-3">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
