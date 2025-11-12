import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2"; 
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyPayBills = () => {
 
  const { user } = useAuth();
  const [bills, setBills] = useState([]);

  const axiosSecure = useAxiosSecure();

  // User Bills Load (useEffect)
  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/my-pay-bills?email=${user.email}`)
        .then((data) => setBills(data.data))
        .catch((error) => {
          console.error("Fetch error:", error);
          toast.error("Failed to load bills");
        });
    }
    
  }, [user]);

  // Total bills and amount calculation
  const totalBills = bills.length;
  const totalAmount = bills.reduce(
    (sum, bill) => sum + Number(bill.amount || 0),
    0
  );

  // Download PDF Report (jsPDF + autoTable)
  const handleDownloadReport = () => {
  if (bills.length === 0) {
    toast("No bills to download!", { icon: "📝" });
    return;
  }

  try {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(18);
    doc.text("My Pay Bills Report", 14, 15);
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`User: ${user?.email || "N/A"}`, 14, 25);
    doc.text(`Total Bills: ${totalBills}`, 14, 32);
    doc.text(`Total Amount: ${totalAmount.toFixed(2)}`, 14, 39);

    // Table Columns
    const tableColumn = [
      "Username",
      "Email",
      "Amount",
      "Address",
      "Phone",
      "Date",
    ];

    // Table Rows
    const tableRows = bills.map((bill) => [
      bill.username,
      bill.email,
      `${Number(bill.amount).toFixed(2)}`,
      bill.address,
      bill.phone,
      bill.date,
    ]);

    // Use imported autoTable properly
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 45,
      styles: { fontSize: 9 },
      headStyles: { fillColor: [230, 81, 99] },
    });

    // Save PDF
    doc.save("My_Pay_Bills_Report.pdf");
    toast.success("Report downloaded successfully!");
  } catch (err) {
    console.error("PDF generation failed:", err);
    toast.error("Failed to generate report!");
  }
};


  // Update Bill (SweetAlert2)
  const handleUpdate = async (bill) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Bill Info",
      html: `
        <input id="amount" class="swal2-input" placeholder="Amount" value="${bill.amount || ''}" />
        <input id="address" class="swal2-input" placeholder="Address" value="${bill.address || ''}" />
        <input id="phone" class="swal2-input" placeholder="Phone" value="${bill.phone || ''}" />
        <input id="date" class="swal2-input" placeholder="Date" value="${bill.date || ''}" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save Changes",
      preConfirm: () => {
        return {
          amount: document.getElementById("amount").value,
          address: document.getElementById("address").value,
          phone: document.getElementById("phone").value,
          date: document.getElementById("date").value,
        };
      },
    });

    if (formValues) {
      axiosSecure.put(`/my-pay-bills/${bill._id}`, formValues)
        .then((data) => {

          if (data.data.modifiedCount > 0) { 
            Swal.fire({
              title: "Updated!",
              text: "Your bill information has been updated.",
              icon: "success",
              draggable: true,
            });
            
            setBills((prev) =>
              prev.map((b) =>
                b._id === bill._id ? { ...b, ...formValues } : b
              )
            );
          } else {
            toast.error("Update failed on server.");
          }
        })
        .catch(() => toast.error("Failed to connect to server for update."));
    }
  };

  // Delete Bill (SweetAlert2)
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/my-pay-bills/${id}`)
          .then((data) => {
            
            if (data.data.deletedCount > 0) { 
              Swal.fire({
                title: "Deleted!",
                text: "Your bill has been deleted.",
                icon: "success",
              });
              // Filter the deleted bill out of the state locally
              setBills((prev) => prev.filter((b) => b._id !== id));
            } else {
              toast.error("Delete failed on server.");
            }
          })
          .catch(() => toast.error("Failed to connect to server for deletion."));
      }
    });
  };

  return (
    <div className="p-6 mt-6">
      <title>My Pay Bills</title>
      {/* Page Header */}
      <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
        My Pay Bills
      </h2>

      {/* Summary + Download Button */}
      <div className="flex justify-between items-center flex-wrap gap-3 mb-8 p-4 bg-blue-50 shadow-md rounded-lg">
        <div className="text-xl font-bold space-y-1">
          <p className="text-gray-700">Total Bills Paid: <span className="text-red-500">{totalBills}</span></p>
          <p className="text-gray-700">Total Amount: <span className="text-red-500">৳ {totalAmount.toFixed(2)}</span></p>
        </div>
        <button
          onClick={handleDownloadReport}
          className="btn bg-gradient-to-r from-pink-500 to-red-500 text-white border-none hover:from-pink-600 hover:to-red-600 shadow-lg transition duration-200"
        >
          Download PDF Report
        </button>
      </div>

      {/* Bills Table */}
      <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-100">
        <table className="table w-full min-w-[700px]">
          <thead className="bg-blue-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="py-3 px-6 text-left">Username</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Address</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.length > 0 ? (
              bills.map((bill) => (
                <tr key={bill._id} className="hover:bg-gray-100 transition duration-150 border-b border-gray-200 text-sm">
                  <td className="py-3 px-6">{bill.username}</td>
                  <td className="py-3 px-6">{bill.email}</td>
                  <td className="py-3 px-6 font-semibold text-green-600">৳ {Number(bill.amount).toFixed(2)}</td>
                  <td className="py-3 px-6">{bill.address}</td>
                  <td className="py-3 px-6">{bill.phone}</td>
                  <td className="py-3 px-6">{bill.date}</td>
                  <td className="py-3 px-6 flex gap-2 justify-center items-center">
                    <button
                      onClick={() => handleUpdate(bill)}
                      className="btn btn-sm bg-blue-500 text-white border-none hover:bg-blue-600 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(bill._id)}
                      className="btn btn-sm bg-red-500 text-white border-none hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-8 text-lg font-medium text-gray-500 bg-white">
                  No paid bills found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPayBills;