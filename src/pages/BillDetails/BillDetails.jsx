import React, { useState } from "react";
import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const BillDetails = () => {
    const bill = useLoaderData();
    const { user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { _id, title, category, location, description, image, date, amount } =
        bill || {};

    const billMonth = new Date(date).getMonth();
    const currentMonth = new Date().getMonth();
    const isCurrentMonth = billMonth === currentMonth;

    const currentDate = new Date().toISOString().split("T")[0];

    const handlePayBill = async (e) => {
        e.preventDefault();
        const form = e.target;

        const paymentData = {
            billId: _id,
            email: user?.email,
            username: form.username.value,
            address: form.address.value,
            phone: form.phone.value,
            amount,
            date: currentDate,
            additionalInfo: form.additionalInfo.value,
        };

        // try {
        //     const res = await fetch("http://localhost:3000/pay-bill", {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(paymentData),
        //     });

        //     const data = await res.json();
        //     if (data.insertedId) {
        //         toast.success("Bill payment successful!");
        //         setIsModalOpen(false);
        //         form.reset();
        //     } else {
        //         toast.error("Payment failed. Please try again.");
        //     }
        // } catch (error) {
        //     toast.error("Something went wrong while paying bill.");
        //     console.error(error);
        // }

        const res = await fetch("http://localhost:3000/pay-bill", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentData),
        });

        const data = await res.json();
        if (data.insertedId) {
            toast.success("Bill payment successful!");
            setIsModalOpen(false);
            form.reset();
        } else {
            toast.error("Payment failed. Please try again.");
        }

    };

    return (
        <div className="container mx-auto px-4 md:px-8 my-10">
            {/* Title */}
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-8 text-center">
                Bill Details
            </h1>

            {/* Flex Layout: Image Left, Info Right */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Image */}
                <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Right: Info */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                    <div>
                        {/* Title */}
                        <h2 className="text-2xl font-bold mb-2">{title}</h2>

                        {/* Category Badge (below title) */}
                        <div className="mb-4">
                            <div
                                className={`badge text-sm py-2 px-3 rounded-full ${category === "Electricity"
                                    ? "bg-yellow-500 text-white"
                                    : category === "Gas"
                                        ? "bg-red-500 text-white"
                                        : category === "Water"
                                            ? "bg-blue-500 text-white"
                                            : "bg-green-600 text-white"
                                    }`}
                            >
                                {category}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-4">{description}</p>

                        {/* Location, Amount, Date */}
                        <div className="space-y-3 text-sm text-gray-500">
                            <p>
                                <span className="font-semibold">📍 Location:</span> {location}
                            </p>
                            <p>
                                <span className="font-semibold">💰 Amount:</span> {amount} ৳
                            </p>
                            <p>
                                <span className="font-semibold">📅 Date:</span>{" "}
                                {new Date(date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    {/* Pay Bill Button */}
                    <div className="mt-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            disabled={!isCurrentMonth}
                            className={`btn w-full rounded-full text-white font-semibold ${isCurrentMonth
                                ? "bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90"
                                : "bg-gray-400 cursor-not-allowed"
                                }`}
                        >
                            {isCurrentMonth ? "Pay Bill" : "Cannot Pay (Old Month)"}
                        </button>
                        {!isCurrentMonth && (
                            <p className="text-red-500 mt-2 text-sm text-center">
                                ⚠ Only current month bills can be paid.
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* ---------- DaisyUI Modal ---------- */}
            {isModalOpen && (
                <div className="modal modal-open fixed inset-0 z-50">
                    <div className="modal-box relative max-w-md mx-4">
                        {/* Title + Cross Icon on same line */}
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
                                Pay Your Bill
                            </h3>
                            {/* Small devices cross icon */}
                            <button
                                type="button"
                                className="text-gray-600 text-xl font-bold md:hidden"
                                onClick={() => setIsModalOpen(false)}
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handlePayBill} className="space-y-4">
                            {/* Email & Bill ID */}
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="font-semibold">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={user?.email || ""}
                                        readOnly
                                        className="input input-bordered w-full bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="font-semibold">Bill ID</label>
                                    <input
                                        type="text"
                                        name="billId"
                                        value={_id}
                                        readOnly
                                        className="input input-bordered w-full bg-gray-100"
                                    />
                                </div>
                            </div>

                            {/* Username + Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="font-semibold">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Enter your name"
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div>
                                    <label className="font-semibold">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            {/* Address */}
                            <div>
                                <label className="font-semibold">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Enter your address"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Date + Amount */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="font-semibold">Date</label>
                                    <input
                                        type="text"
                                        name="date"
                                        value={currentDate}
                                        readOnly
                                        className="input input-bordered w-full bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="font-semibold">Amount</label>
                                    <input
                                        type="text"
                                        name="amount"
                                        value={amount + " ৳"}
                                        readOnly
                                        className="input input-bordered w-full bg-gray-100"
                                    />
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div>
                                <label className="font-semibold">Additional Info</label>
                                <input
                                    type="text"
                                    name="additionalInfo"
                                    placeholder="Optional"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col-reverse md:flex-row gap-3 justify-between mt-2 flex-wrap">
                                {/* Large devices: Cancel button with pink outline */}
                                <button
                                    type="button"
                                    className="hidden md:inline-flex btn btn-outline rounded-full flex-1"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>

                                {/* Confirm Payment */}
                                <button
                                    type="submit"
                                    className="btn btn-md rounded-full py-3.5 md:py-0 text-white flex-1 bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 h-14 md:h-auto"
                                >
                                    Confirm Payment
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Backdrop */}
                    <label
                        className="modal-backdrop"
                        onClick={() => setIsModalOpen(false)}
                        aria-hidden="true"
                    />
                </div>
            )}

        </div>
    );
};

export default BillDetails;
