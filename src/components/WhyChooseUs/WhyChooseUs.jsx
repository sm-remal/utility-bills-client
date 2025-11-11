import { motion } from "framer-motion";
import { ShieldCheck, Clock, SmartphoneCharging, FileText, Smile } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck size={30} />,
      title: "Secure Payments",
      desc: "All your transactions are fully encrypted and safeguarded with industry-grade security.",
    },
    {
      icon: <Clock size={30} />,
      title: "Real-Time Updates",
      desc: "Stay informed instantly with live notifications for all your payments and bills.",
    },
    {
      icon: <SmartphoneCharging size={30} />,
      title: "Responsive Design",
      desc: "Enjoy a seamless experience on mobile, tablet, or desktop with our adaptive UI.",
    },
    {
      icon: <FileText size={30} />,
      title: "PDF Reports",
      desc: "Download detailed payment history anytime with beautifully formatted PDF reports.",
    },
    {
      icon: <Smile size={30} />,
      title: "User-Friendly Interface",
      desc: "An intuitive design that makes bill management effortless for everyone.",
    },
  ];

  return (
    <section className="pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-center text-pink-600 mb-16"
        >
          Why Choose UtilityPay?
        </motion.h2>

        <div className="relative">
          {/* Central vertical line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 via-red-400 to-pink-500"></div>

          <div className="space-y-12">
            {features.map((f, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`relative w-full md:w-1/2 ${
                    isLeft ? "md:left-0 text-right md:pr-10" : "md:left-1/2 text-left md:pl-10"
                  }`}
                >
                  {/* Circle marker with gradient */}
                  <div className="absolute top-5 md:top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 bg-gradient-to-r from-pink-500 to-red-500 shadow-lg"></div>

                  {/* Card with hover animation */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`bg-gradient-to-r from-blue-300 to-indigo-300 p-6 rounded-2xl shadow-xl transition-shadow duration-300 ${
                      isLeft ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-pink-100 to-red-100 text-pink-600 rounded-full mb-4">
                      {f.icon}
                    </div>
                    <h3 className="text-lg font-bold text-pink-600 mb-2">{f.title}</h3>
                    <p className="text-gray-800 text-sm">{f.desc}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
