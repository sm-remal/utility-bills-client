// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
// import { motion } from "framer-motion";
// import BillCards from "../../components/BillCards/BillCards";
// import Loading from "../../components/Loading/Loading";

// const Bills = () => {
//   const loadedBills = useLoaderData();

//   const [bills, setBills] = useState(loadedBills || []);
//   const [category, setCategory] = useState("All");
//   const [searchText, setSearchText] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch by category (backend)
//   useEffect(() => {
//     const fetchFilteredBills = async () => {
//       if (category === "All") {
//         setBills(loadedBills);
//         return;
//       }

//       setLoading(true);
//       try {
//         const res = await fetch(
//           `https://utility-bills-server.vercel.app/bill-category?category=${category}`
//         );
//         const data = await res.json();
//         setBills(data);
//       } catch (error) {
//         console.error("Error fetching filtered bills:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFilteredBills();
//   }, [category, loadedBills]);

//   // Frontend search filter
//   const filteredBills = bills.filter((bill) => {
//     const text = searchText.toLowerCase();

//     return (
//       bill.title?.toLowerCase().includes(text) ||
//       bill.category?.toLowerCase().includes(text) ||
//       bill.location?.toLowerCase().includes(text)
//     );
//   });

//   return (
//     <div className="container mx-auto px-4 md:px-8 my-10">
//       <title>UtilityPay | Available Bills</title>

//       {/* Header & Filters */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
//         <h1 className="text-3xl font-semibold text-pink-600">
//           Available Bills
//         </h1>

//         <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
//           {/* Category Filter */}
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="select select-bordered w-full md:w-60"
//           >
//             <option value="All">All</option>
//             <option value="Electricity">Electricity</option>
//             <option value="Water">Water</option>
//             <option value="Gas">Gas</option>
//             <option value="Internet">Internet</option>
//           </select>

//           {/* Search */}
//           <input
//             type="text"
//             placeholder="Search bills..."
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             className="input input-bordered w-full md:w-64"
//           />
//         </div>
//       </div>

//       {/* Loading */}
//       {loading && <Loading />}

//       {/* No Data */}
//       {!loading && filteredBills.length === 0 && (
//         <div className="text-center py-10 text-gray-500">
//           No bills found.
//         </div>
//       )}

//       {/* Bills Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//         {filteredBills.map((bill, index) => (
//           <motion.div
//             key={bill._id}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <BillCards bill={bill} />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Bills;


import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import BillCards from "../../components/BillCards/BillCards";
import Loading from "../../components/Loading/Loading";

const Bills = () => {
  const loadedBills = useLoaderData();

  const [bills, setBills] = useState(loadedBills || []);
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  // category + price backend filter
  useEffect(() => {
    const fetchFilteredBills = async () => {
      if (category === "All" && price === "All") {
        setBills(loadedBills);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(
          `https://utility-bills-server.vercel.app/bill-filter?category=${category}&price=${price}`
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
  }, [category, price, loadedBills]);

  // frontend search
  const filteredBills = bills.filter((bill) => {
    const text = searchText.toLowerCase();
    return (
      bill.title?.toLowerCase().includes(text) ||
      bill.category?.toLowerCase().includes(text) ||
      bill.location?.toLowerCase().includes(text)
    );
  });

  return (
    <div className="container mx-auto px-4 md:px-8 my-10">
      <title>UtilityPay | Available Bills</title>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-semibold text-pink-600">
          Available Bills
        </h1>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full md:w-56"
          >
            <option value="All">All Categories</option>
            <option value="Electricity">Electricity</option>
            <option value="Water">Water</option>
            <option value="Gas">Gas</option>
            <option value="Internet">Internet</option>
          </select>

          {/* Price */}
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="select select-bordered w-full md:w-56"
          >
            <option value="All">All Prices</option>
            <option value="0-500">0 - 500</option>
            <option value="501-1000">501 - 1000</option>
            <option value="1001-2000">1001 - 2000</option>
          </select>

          {/* Search */}
          <input
            type="text"
            placeholder="Search bills..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered w-full md:w-64"
          />
        </div>
      </div>

      {/* Loading */}
      {loading && <Loading />}

      {/* Empty */}
      {!loading && filteredBills.length === 0 && (
        <p className="text-center text-gray-500 py-10">
          No bills found.
        </p>
      )}

      {/* Bills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredBills.map((bill, index) => (
          <motion.div
            key={bill._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <BillCards bill={bill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bills;
