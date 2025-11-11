import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading/Loading";
import ErrorDetailsPage from "../../components/ErrorPage/ErrorDetailsPage";

const BillDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [bill, setBill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const currentDate = new Date().toISOString().split("T")[0];

  // Fetch Single Bill by ID
  useEffect(() => {
    const fetchBill = async () => {
      try {
        const res = await axiosSecure.get(`/bills/${id}`);
        if (res.data?._id) {
          setBill(res.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching bill:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBill();
  }, [axiosSecure, id]);


  // Handle Bill Payment
  const handlePayBill = async (e) => {
    e.preventDefault();
    setPaymentLoading(true);

    const form = e.target;
    const paymentData = {
      billId: bill._id,
      email: user?.email,
      username: form.username.value,
      address: form.address.value,
      phone: form.phone.value,
      amount: bill.amount,
      date: currentDate,
      additionalInfo: form.additionalInfo.value,
    };

    try {
      const res = await axiosSecure.post("/pay-bill", paymentData);

      if (res.data?.insertedId) {
        toast.success("Bill payment successful!");
        setIsModalOpen(false);
        form.reset();
      } else {
        toast.error("Payment failed. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong while paying bill.");
      console.error(error);
    } finally {
      setPaymentLoading(false);
    }
  };

 
  // Loading & Error State
  if (loading) return <Loading />;
  if (error || !bill) return <ErrorDetailsPage />;

  const { _id, title, category, location, description, image, date, amount } = bill;
  const billMonth = new Date(date).getMonth();
  const currentMonth = new Date().getMonth();
  const isCurrentMonth = billMonth === currentMonth;


  // Main UI
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 mt-5 md:mt-8">
      <h2 className="text-3xl text-pink-600 font-semibold text-center mb-8">
        Bill Details
      </h2>

      <div className="card shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-8">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md">
            <img
              src={image || "/placeholder.jpg"}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {title}
            </h1>

            {/* Category + Amount */}
            <div className="flex flex-wrap gap-3">
              <div
                className={`badge badge-lg badge-outline font-medium ${
                  category === "Electricity"
                    ? "text-yellow-600 border-yellow-600"
                    : category === "Gas"
                    ? "text-red-600 border-red-600"
                    : category === "Water"
                    ? "text-blue-600 border-blue-600"
                    : "text-green-600 border-green-600"
                }`}
              >
                {category}
              </div>

              <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                Amount: {amount} ৳
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {description}
            </p>

            {/* Location + Date */}
            <div className="space-y-2 text-sm text-gray-500">
              <p>
                <span className="font-semibold">📍 Location:</span> {location}
              </p>
              <p>
                <span className="font-semibold">📅 Date:</span>{" "}
                {new Date(date).toLocaleDateString()}
              </p>
            </div>

            {/* Pay Bill Button */}
            <div className="mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                disabled={!isCurrentMonth}
                className={`btn w-full rounded-full text-white font-semibold ${
                  isCurrentMonth
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
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open fixed inset-0 z-50">
          <div className="modal-box relative max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
                Pay Your Bill
              </h3>
              <button
                type="button"
                className="text-gray-600 text-xl font-bold md:hidden"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handlePayBill} className="space-y-4">
              {/* Email + Bill ID */}
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
                    value={`${amount} ৳`}
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
                <button
                  type="button"
                  className="hidden md:inline-flex btn btn-outline rounded-full flex-1"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={paymentLoading}
                  className={`btn btn-md rounded-full py-3.5 md:py-0 text-white flex-1 bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 h-14 md:h-auto ${
                    paymentLoading ? "opacity-70 cursor-wait" : ""
                  }`}
                >
                  {paymentLoading ? "Processing..." : "Confirm Payment"}
                </button>
              </div>
            </form>
          </div>

          {/* Modal Backdrop */}
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
