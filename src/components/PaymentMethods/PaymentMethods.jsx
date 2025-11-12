import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import sonali from "../../assets/banks/sonali1.jpg";
import upay from "../../assets/banks/upay.png";
import uganda from "../../assets/banks/uganda.png";
import rocket from "../../assets/banks/rocket.png";
import city from "../../assets/banks/city.png";
import bkash from "../../assets/banks/bkash1.jpg";
import nogod from "../../assets/banks/nogod.jpg";
import islami from "../../assets/banks/islami.jpg";
import ducth from "../../assets/banks/ducth.jpg";
import bran from "../../assets/banks/brac.jpg";
import agrani from "../../assets/banks/agrani.png";

const PaymentMethods = () => {
    const logos = [bkash, nogod, rocket, upay, sonali, city, islami, agrani, ducth, bran, uganda];

    const stats = [
        { number: "5,460+", label: "Transactions Processed" },
        { number: "7,823+", label: "Active Users" },
        { number: "1,25,500 ৳", label: "Fees Saved" },
        { number: "16", label: "Cities Served" },
    ];


    // Elegant soft gradients
    const gradients = [
        "from-blue-400 to-indigo-400",
        "from-blue-400 to-indigo-400",
        "from-blue-400 to-indigo-400",
        "from-blue-400 to-indigo-400",
        
    ];

    return (
        <div className="pb-10 md:pt-10">
            {/* Title and Description */}
            <motion.div
                className="text-center mb-12 px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-4xl font-semibold text-pink-600 mb-4">
                    Trusted Payment Partners
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Pay securely and instantly through your favorite platform. We collaborate with trusted
                    banks and gateways to make every transaction smooth, safe, and reliable.
                </p>
            </motion.div>

            {/* Marquee Section */}
            <motion.div
                className="mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Marquee speed={60} gradient={false} pauseOnHover={true}>
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="mx-3 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            style={{
                                width: "130px",
                                height: "80px",
                            }}
                        >
                            <img
                                src={logo}
                                alt="payment-logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </Marquee>
            </motion.div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto text-center px-4">
                {stats.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`rounded-2xl py-8 px-4 text-white shadow-md hover:shadow-xl transition-all duration-300
              bg-gradient-to-r ${gradients[index]} hover:scale-105`}
                    >
                        <h3 className="text-3xl font-bold drop-shadow-md">{item.number}</h3>
                        <p className="text-base mt-2 opacity-90">{item.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PaymentMethods;

