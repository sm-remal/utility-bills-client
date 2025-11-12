import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle, Shield, CreditCard } from "lucide-react";

const FAQ = () => {
  const sections = [
    {
      title: "General Questions",
      icon: <HelpCircle className="text-blue-500" size={28} />,
      color: "from-blue-500 to-indigo-500",
      faqs: [
        {
          q: "What is UtilityPay?",
          a: "UtilityPay is a digital platform that lets you pay and manage all your utility bills (Electricity, Gas, Water, Internet) from one place — fast, secure, and simple.",
        },
        {
          q: "Do I need to create an account?",
          a: "Yes, you need to sign up using your email or Google account to access your dashboard and save payment history.",
        },
        {
          q: "Can I use UtilityPay on my phone?",
          a: "Absolutely! UtilityPay is fully responsive and optimized for all devices — phone, tablet, and desktop.",
        },
      ],
    },
    {
      title: "Payment & Billing",
      icon: <CreditCard className="text-pink-500" size={28} />,
      color: "from-pink-500 to-rose-500",
      faqs: [
        {
          q: "How can I pay my bills?",
          a: "Visit the Bill Details page and click the Pay button. You can use any linked payment method for quick checkout.",
        },
        {
          q: "Can I update or delete a paid bill?",
          a: "Yes, from the My Pay Bills page you can edit or delete your bills after payment confirmation.",
        },
        {
          q: "How can I download my bill report?",
          a: "Go to My Pay Bills → Click Download Report to export all payment data as a PDF or CSV file.",
        },
      ],
    },
    {
      title: "Security & Support",
      icon: <Shield className="text-green-500" size={28} />,
      color: "from-green-500 to-teal-500",
      faqs: [
        {
          q: "Is my data secure?",
          a: "Yes, all user data is protected using Firebase Authentication and end-to-end encryption through MongoDB Atlas.",
        },
        {
          q: "What should I do if my payment fails?",
          a: "If your payment doesn’t go through, try again after a few minutes or contact support. Failed payments never deduct money.",
        },
        {
          q: "Can I contact live support?",
          a: "Yes! Click the 'Contact Support' button at the end of this page or use the chat icon from your dashboard.",
        },
      ],
    },
  ];

  const [open, setOpen] = useState({ section: null, item: null });

  const toggleItem = (sectionIndex, itemIndex) => {
    setOpen(
      open.section === sectionIndex && open.item === itemIndex
        ? { section: null, item: null }
        : { section: sectionIndex, item: itemIndex }
    );
  };

  return (
    <section className="relative min-h-screen py-16 px-6 overflow-hidden">
      <title>UtilityPay - FAQ</title>

      {/* Decorative Gradient Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300 opacity-25 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>
      </div>

      {/* Page Header */}
      <h1
        className="text-4xl font-semibold text-center text-pink-600 mb-4"
       
      >
        Help & Support Center
      </h1>
      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Got questions? We’ve got answers! Explore our most frequently asked questions or reach out for more help.
      </motion.p>

      {/* FAQ Sections */}
      <div className="space-y-16 max-w-5xl mx-auto">
        {sections.map((section, si) => (
          <motion.div
            key={si}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.2 }}
          >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white shadow-md rounded-full">{section.icon}</div>
              <h2
                className={`text-3xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
              >
                {section.title}
              </h2>
            </div>

            {/* FAQ Dropdowns */}
            <div className="space-y-4">
              {section.faqs.map((faq, fi) => (
                <motion.div
                  key={fi}
                  className={`rounded-2xl border backdrop-blur-md shadow-md cursor-pointer transition-all ${
                    open.section === si && open.item === fi
                      ? "bg-blue-100"
                      : "bg-white/60 hover:bg-white/80 border-gray-200"
                  }`}
                  onClick={() => toggleItem(si, fi)}
                >
                  <div className="flex items-center justify-between p-5">
                    <div className="flex items-center gap-3">
                      <HelpCircle
                        className={`${
                          open.section === si && open.item === fi
                            ? "text-rose-500"
                            : "text-gray-400"
                        }`}
                        size={22}
                      />
                      <h3 className="text-gray-800 font-semibold">{faq.q}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: open.section === si && open.item === fi ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-500" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {open.section === si && open.item === fi && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="px-6 pb-5 text-gray-600 text-sm"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact CTA */}
      <motion.div
        className="text-center mt-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-gray-700 mb-4 text-lg">
          Still need help? We’re just one message away.
        </p>
        <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-full hover:scale-105 transition-transform">
          <MessageCircle size={20} /> Contact Support
        </button>
      </motion.div>
    </section>
  );
};

export default FAQ;
