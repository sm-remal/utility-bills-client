import { motion } from "framer-motion";
import { Zap, FileText, CreditCard, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText size={40} />,
      title: "Create an Account",
      desc: "Register using your email or Google account to get started.",
    },
    {
      icon: <Zap size={40} />,
      title: "View Your Bills",
      desc: "See all your monthly bills organized by category.",
    },
    {
      icon: <CreditCard size={40} />,
      title: "Pay Instantly",
      desc: "Pay your current month's bill securely and quickly.",
    },
    {
      icon: <Download size={40} />,
      title: "Download Report",
      desc: "Get your full bill payment history as a PDF report.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-10"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg"
            >
              <div className="flex justify-center text-blue-600 mb-3">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
