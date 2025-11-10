import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      q: "How can I pay my bills?",
      a: "Go to the Bill Details page and click the Pay button for current month bills.",
    },
    {
      q: "Can I update or delete a paid bill?",
      a: "Yes, from the My Pay Bills page you can update or delete your paid bills.",
    },
    {
      q: "How can I download my bill report?",
      a: "Go to the My Pay Bills page and click on Download Report.",
    },
    {
      q: "Is my data secure?",
      a: "Yes, your data is protected through Firebase authentication and MongoDB security.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Help & FAQ
      </motion.h1>

      <div className="space-y-6">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-r from-pink-100 to-rose-200 border border-rose-300 rounded-xl p-5"
          >
            <div className="flex items-start gap-3">
              <HelpCircle className="text-rose-600 mt-1" size={22} />
              <div>
                <h3 className="text-lg font-semibold text-rose-700 mb-1">{item.q}</h3>
                <p className="text-gray-700 text-sm">{item.a}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
