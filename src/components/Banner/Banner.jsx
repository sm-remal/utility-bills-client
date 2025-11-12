import { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import payment_3 from "../../assets/payment-3.jpg";
import payment_4 from "../../assets/payment-4.jpg";
import payment_5 from "../../assets/payment-5.jpg";
import { Link } from "react-router";

const slides = [
  {
    title: "Electricity Bills",
    description: "Pay and track your electricity bills easily from anywhere. Get instant notifications, view your past payments, and never miss a due date again.",
    img: payment_3
  },
  {
    title: "Water & Gas Bills",
    description: "Manage your water and gas payments efficiently in one place. Monitor your usage, set reminders, and enjoy hassle-free monthly payments.",
    img: payment_4
  },
  {
    title: "Internet Bills",
    description: "Stay connected by paying your internet bills on time. Track your plans, usage, and ensure uninterrupted connectivity with ease.",
    img: payment_5
  },
];


const Banner = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;
  const containerRef = useRef(null);

  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (current >= totalSlides) {
      setCurrent(0);
    }
  };

  return (
    <section className="relative h-[380px] md:h-[500px] w-full overflow-hidden bg-gray-100">

      {/* Slides container */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, idx) => (
          <div key={idx} className="relative min-w-full h-full flex justify-center items-center">
            <div className="relative w-full h-full overflow-hidden">
              {/* Dark Overlay Only */}
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover z-0 scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
          <Typewriter
            words={[slides[current % totalSlides].title]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
          />
        </h1>

        <p className="text-gray-100 text-lg md:text-xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] mt-4 max-w-xl">
          {slides[current % totalSlides].description}
        </p>

        <Link to={"#"}>
          <button className="px-8 py-3 rounded-lg font-semibold shadow-lg mt-6 text-white bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 transition-all duration-300 hidden md:flex cursor-pointer">
            Get Started
          </button>
        </Link>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${i === current % totalSlides ? "bg-[#FF1493]" : "bg-gray-300"
              }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Banner;
