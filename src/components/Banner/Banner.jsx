import { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import payment_3 from '../../assets/payment-3.jpg';
import payment_4 from '../../assets/payment-4.jpg';
import payment_5 from '../../assets/payment-5.jpg';

const slides = [
  { title: "Electricity Bills", description: "Pay and track your electricity bills easily.", img: payment_3 },
  { title: "Water & Gas Bills", description: "Manage your water and gas payments in one place.", img: payment_4 },
  { title: "Internet Bills", description: "Stay connected and pay your internet bills on time.", img: payment_5 },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;
  const containerRef = useRef(null);

  const extendedSlides = [...slides, slides[0]]; // for seamless looping

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
    <section className="relative h-[380px] md:h-[400px] w-full overflow-hidden flex items-center justify-center bg-gray-100">

      {/* Slides container */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, idx) => (
          <div
            key={idx}
            className="relative min-w-full h-full flex justify-center items-center overflow-hidden"
          >
            {/* Full-size image + dark overlay */}
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 bg-black/30 z-10"></div> {/* Slight dark overlay */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover z-0"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Centered Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start md:items-start text-center md:text-left p-6 md:p-12 z-20">
        <h1
          className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent drop-shadow-lg"
          style={{ backgroundImage: "linear-gradient(to right, #FF1493, #F44336)" }}
        >
          <Typewriter
            words={[slides[current % totalSlides].title]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
          />
        </h1>
        <p className="text-gray-100 text-lg md:text-xl drop-shadow-md mt-4 max-w-lg">
          {slides[current % totalSlides].description}
        </p>
        <button className="px-8 py-3 rounded-lg font-semibold shadow-md mt-6 text-white bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 transition-opacity duration-300">
          Explore Bills
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
              i === current % totalSlides ? "bg-[#FF1493]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Banner;



