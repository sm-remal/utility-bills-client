import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";
// import autoTable from "jspdf-autotable";

const MyPayBills = () => {
  const { user } = useAuth();
  const [bills, setBills] = useState([]);

  // User Bills Load
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-pay-bills?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBills(data))
        .catch(() => toast.error("Failed to load bills"));
    }
  }, [user]);

  // Total bills and amount
  const totalBills = bills.length;
  const totalAmount = bills.reduce(
    (sum, bill) => sum + Number(bill.amount || 0),
    0
  );

  // Download PDF Report (jsPDF + autoTable)
  const handleDownloadReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("My Pay Bills Report", 14, 15);
    doc.setFontSize(12);
    doc.text(`User: ${user?.email}`, 14, 25);
    doc.text(`Total Bills: ${totalBills}`, 14, 32);
    doc.text(`Total Amount: ৳${totalAmount}`, 14, 39);

    const tableColumn = [
      "Username",
      "Email",
      "Amount",
      "Address",
      "Phone",
      "Date",
    ];
    const tableRows = bills.map((bill) => [
      bill.username,
      bill.email,
      bill.amount,
      bill.address,
      bill.phone,
      bill.date,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 45,
    });

    doc.save("My_Pay_Bills_Report.pdf");
    toast.success("Report downloaded successfully!");
  };

  // Update Bill (SweetAlert2)
  const handleUpdate = async (bill) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Bill Info",
      html: `
        <input id="amount" class="swal2-input" placeholder="Amount" value="${bill.amount}" />
        <input id="address" class="swal2-input" placeholder="Address" value="${bill.address}" />
        <input id="phone" class="swal2-input" placeholder="Phone" value="${bill.phone}" />
        <input id="date" class="swal2-input" placeholder="Date" value="${bill.date}" />
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
      fetch(`http://localhost:3000/my-pay-bills/${bill._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
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
          }
        });
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
        fetch(`http://localhost:3000/my-pay-bills/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your bill has been deleted.",
                icon: "success",
              });
              setBills((prev) => prev.filter((b) => b._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
        My Pay Bills
      </h2>

      {/* Summary + Download Button */}
      <div className="flex justify-between items-center flex-wrap gap-3 mb-6">
        <div className="text-lg font-semibold">
          <p>Total Bills Paid: {totalBills}</p>
          <p>Total Amount: ৳{totalAmount}</p>
        </div>
        <button
          onClick={handleDownloadReport}
          className="btn bg-gradient-to-r from-pink-500 to-red-500 text-white border-none hover:opacity-90"
        >
          Download PDF Report
        </button>
      </div>

      {/* Bills Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table w-full">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.length > 0 ? (
              bills.map((bill) => (
                <tr key={bill._id} className="hover:bg-gray-50 text-sm">
                  <td>{bill.username}</td>
                  <td>{bill.email}</td>
                  <td>৳{bill.amount}</td>
                  <td>{bill.address}</td>
                  <td>{bill.phone}</td>
                  <td>{bill.date}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleUpdate(bill)}
                      className="btn btn-sm bg-green-500 text-white border-none hover:bg-green-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(bill._id)}
                      className="btn btn-sm bg-red-500 text-white border-none hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
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