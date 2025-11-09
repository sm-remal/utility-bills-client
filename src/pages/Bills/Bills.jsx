import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import BillCards from "../../components/BillCards/BillCards";

const Bills = () => {
  // Loader data (initial bills)
  const loadedBills = useLoaderData();

  // Local states
  const [bills, setBills] = useState(loadedBills || []);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  // Handle filter dynamically
  useEffect(() => {
    const fetchFilteredBills = async () => {
      if (category === "All") {
        setBills(loadedBills);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/bill-category?category=${category}`
        );
        const data = await res.json();
        setBills(data);
      } catch (error) {
        console.error("Error fetching filtered bills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredBills();
  }, [category, loadedBills]);

  return (
    <div className="container mx-auto px-4 md:px-8 my-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-pink-600">Available Bills</h1>

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full md:w-60"
        >
          <option value="All" className="font-medium text-gray-600">Filter by Category</option>
          <option value="All">All</option>
          <option value="Electricity">Electricity</option>
          <option value="Water">Water</option>
          <option value="Gas">Gas</option>
          <option value="Internet">Internet</option>
        </select>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center py-10 text-gray-500">Loading bills...</div>
      )}

      {/* No Data Message */}
      {!loading && bills.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No bills found for this category.
        </div>
      )}

      {/* Bills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bills.map((bill) => (
          <BillCards key={bill._id} bill={bill} />
        ))}
      </div>
    </div>
  );
};

export default Bills;
