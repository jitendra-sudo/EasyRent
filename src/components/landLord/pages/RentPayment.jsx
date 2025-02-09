import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./RentPayment.css"; // Import CSS

const API_URL =
  "https://rent-bc133-default-rtdb.asia-southeast1.firebasedatabase.app/Landlorddb/rent_payments.json";

const RentPayment = () => {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRentData = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log("Fetched rent data:", response.data);

        if (response.data) {
          const tenantList = Object.keys(response.data).map((key) => {
            const tenantData = response.data[key];

            return {
              id: key,
              tenantName:
                tenantData.tenant_name ||
                tenantData.tenant?.name ||
                Object.keys(tenantData.tenants || {})[0] ||
                "Unknown Tenant",
              ...tenantData,
            };
          });

          setTenants(tenantList);
        } else {
          setTenants([]);
        }
      } catch (error) {
        console.error("Error fetching rent data:", error);
        setTenants([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRentData();
  }, []);

  const togglePaymentStatus = async (tenant) => {
    const newStatus = tenant.status === "Pending" ? "Paid" : "Pending";

    try {
      await axios.patch(
        `${API_URL.replace(".json", `/${tenant.id}.json`)}`,
        { status: newStatus }
      );

      setTenants((prev) =>
        prev.map((t) => (t.id === tenant.id ? { ...t, status: newStatus } : t))
      );
    } catch (error) {
      console.error("Error updating rent status:", error);
    }
  };

  return (
    <div className="rent-container">
      <Sidebar />
      <div className="rent-content">
        <h1 className="rent-title">Rent Payment Management</h1>
        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : tenants.length > 0 ? (
          <div className="table-container">
            <table className="rent-table">
              <thead>
                <tr>
                  <th>Tenant</th>
                  <th>Property</th>
                  <th>Rent Amount</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map((tenant) => (
                  <tr key={tenant.id}>
                    <td>{tenant.tenantName}</td>
                    <td>{tenant.property}</td>
                    <td>₹{tenant.rent_amount}</td>
                    <td>{tenant.due_date}</td>
                    <td className={tenant.status === "Pending" ? "status pending" : "status paid"}>
                      {tenant.status}
                    </td>
                    <td>
                      <button
                        className={tenant.status === "Pending" ? "pending-btn" : "paid-btn"}
                        onClick={() => togglePaymentStatus(tenant)}
                      >
                        {tenant.status === "Pending" ? "Mark as Paid" : "Mark as Pending"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="no-data-text">No rent data available.</p>
        )}
      </div>
    </div>
  );
};

export default RentPayment;
