import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.css?inline";
import { Zap, FileText, CreditCard, Download } from "lucide-react";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 5000, once: true, easing: "ease-in-out" });
  }, []);

  const steps = [
    {
      icon: <FileText size={40} className="text-pink-600 group-hover:text-white transition-all duration-300" />,
      title: "Create an Account",
      desc: "Register using your email or Google account to get started.",
    },
    {
      icon: <Zap size={40} className="text-pink-600 group-hover:text-white transition-all duration-300" />,
      title: "View Your Bills",
      desc: "See all your monthly bills organized by category.",
    },
    {
      icon: <CreditCard size={40} className="text-pink-600 group-hover:text-white transition-all duration-300" />,
      title: "Pay Instantly",
      desc: "Pay your current month's bill securely and quickly.",
    },
    {
      icon: <Download size={40} className="text-pink-600 group-hover:text-white transition-all duration-300" />,
      title: "Download Report",
      desc: "Get your full bill payment history as a PDF report.",
    },
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-pink-700 mb-10"
          data-aos="fade-down"
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              data-aos="flip-left"
              data-aos-delay={i * 150}
              className="group bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl p-[2px] cursor-pointer transform transition-transform duration-700 hover:rotate-y-180"
              style={{
                perspective: "1000px",
              }}
            >
              <div
                className="bg-white rounded-2xl p-6 h-full transform transition-all duration-1600 group-hover:rotate-y-180"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* front side */}
                <div
                  className="flex flex-col items-center justify-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="mb-3">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>

                {/* back side */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 text-white flex flex-col items-center justify-center rounded-2xl p-6"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm opacity-90">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

