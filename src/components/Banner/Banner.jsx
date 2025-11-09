import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import payment_3 from '../../assets/payment-3.jpg';
import payment_4 from '../../assets/payment-4.jpg';
import payment_5 from '../../assets/payment-5.jpg';

// Slide Data
const slides = [
  { title: "Electricity Bills", description: "Pay and track your electricity bills easily.", img: payment_3 },
  { title: "Water & Gas Bills", description: "Manage your water and gas payments in one place.", img: payment_4 },
  { title: "Internet Bills", description: "Stay connected and pay your internet bills on time.", img: payment_5 },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide Change
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-gray-100 flex items-center justify-center">
      
      {/* Left: Text (fixed) */}
      <div className="absolute left-10 md:w-1/2 w-4/5 p-6 text-center md:text-left space-y-4 z-10">
        <h1
          className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(to right, #FF1493, #FF8C00)" }}
        >
          <Typewriter
            words={[slides[index].title]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
          />
        </h1>
        <p className="text-gray-700 text-lg">{slides[index].description}</p>
        <button className="px-8 py-3 rounded-lg font-semibold shadow-md mt-2 text-white bg-gradient-to-r from-[#FF1493] to-[#FF8C00] hover:opacity-90 transition-opacity duration-300">
          Explore Bills
        </button>
      </div>

      {/* Right: Image (animated) */}
      <div className="absolute right-0 md:w-1/2 w-full h-full flex justify-center items-center overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence>
          <motion.img
            key={slides[index].img}
            src={slides[index].img}
            alt={slides[index].title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
              idx === index ? "bg-[#FF1493]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Banner;