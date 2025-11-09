import React from "react";
import { useNavigate } from "react-router";

const ElectricityIcon = () => <span className="text-yellow-500 text-4xl">⚡</span>;
const GasIcon = () => <span className="text-red-500 text-4xl">🔥</span>;
const WaterIcon = () => <span className="text-blue-500 text-4xl">💧</span>;
const InternetIcon = () => <span className="text-purple-500 text-4xl">🌐</span>;

const categories = [
    { name: "Electricity", icon: <ElectricityIcon />, path: "/bills/electricity" },
    { name: "Gas", icon: <GasIcon />, path: "/bills/gas" },
    { name: "Water", icon: <WaterIcon />, path: "/bills/water" },
    { name: "Internet", icon: <InternetIcon />, path: "/bills/internet" },
];

const CategoryCard = () => {
    const navigate = useNavigate();

    return (
        <div className=" px-4 md:px-0">
            <h2 className="text-3xl font-semibold text-center text-pink-600 mt-10">Category</h2>
            <div className="categories my-10 grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-20">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(cat.path)}
                        className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 to-red-500 cursor-pointer"
                    >
                        <div className="category-card p-6 bg-white rounded-lg flex flex-col items-center justify-center
                          transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-3">{cat.icon}</div>
                            <h3 className="text-lg font-semibold">{cat.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryCard;
