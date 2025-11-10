import React from "react";
import { Link } from "react-router";

const BillCards = ({ bill }) => {
  const { _id, title, category, location, image, date, amount } = bill;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 px-4 md:px-0">
      {/* Card Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-lg">{title}</h2>

        {/* Category Badge */}
        <div className="mt-1">
          <div
            className={`badge text-xs badge-sm rounded-full ${
              category === "Electricity"
                ? "bg-yellow-500 text-white"
                : category === "Water"
                ? "bg-blue-500 text-white"
                : category === "Gas"
                ? "bg-red-500 text-white"
                : "bg-green-600 text-white"
            }`}
          >
            {category}
          </div>
        </div>

        {/* Date */}
        <div className="text-xs text-gray-500 mt-1 flex items-center">
          <span>📅 {new Date(date).toLocaleDateString()}</span>
        </div>

        {/* Location */}
        <div className="text-xs text-gray-500 mt-2 flex items-center">
          <span>📍 {location}</span>
        </div>

        {/* Amount */}
        <div className="mt-4 font-semibold text-base text-gray-700">
          💰 Amount: <span className="text-green-600">{amount}৳</span>
        </div>

        {/* View Button */}
        <div className="card-actions mt-4">
          <Link
            to={`/bill-details/${_id}`}
            className="btn btn-md w-full rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillCards;
