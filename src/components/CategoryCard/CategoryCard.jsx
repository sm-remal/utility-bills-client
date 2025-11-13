import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Electricity",
    icon: "⚡",
    bgColor: "bg-blue-100",
    emojiColor: "text-yellow-600",
    path: "#",
  },
  {
    name: "Gas",
    icon: "🔥",
    bgColor: "bg-pink-100",
    emojiColor: "text-pink-600",
    path: "#",
  },
  {
    name: "Water",
    icon: "💧",
    bgColor: "bg-blue-100",
    emojiColor: "text-blue-600",
    path: "#",
  },
  {
    name: "Internet",
    icon: "🌐",
    bgColor: "bg-purple-100",
    emojiColor: "text-purple-600",
    path: "#",
  },
];

const CategoryCard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative px-4 md:px-0 mt-16">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold text-center text-pink-600 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Bill Categories
      </motion.h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-20">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(cat.path)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            {/* Card */}
            <div
              className={`rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-xl transition h-64 ${cat.bgColor}`}
            >
              <motion.span
                className={`text-5xl mb-3 ${cat.emojiColor}`}
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {cat.icon}
              </motion.span>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {cat.name}
              </h3>
              <p className="text-gray-600 text-sm text-center px-2">
                Pay your {cat.name.toLowerCase()} bills easily in one click.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
