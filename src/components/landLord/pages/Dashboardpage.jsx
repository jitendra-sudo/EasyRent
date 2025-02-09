// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../components/Sidebar";
// const Dashboardpage = () => {
//   const [totalProperties, setTotalProperties] = useState(0);
//   const [occupiedProperties, setOccupiedProperties] = useState(0);
//   const [vacantProperties, setVacantProperties] = useState(0);
//   const [pendingPayments, setPendingPayments] = useState(0);
//   const [completedPayments, setCompletedPayments] = useState(0);
//   const [maintenanceRequests, setMaintenanceRequests] = useState(0);
//   const [loading, setLoading] = useState(true);

//   const API_URL = "https://rent-bc133-default-rtdb.asia-southeast1.firebasedatabase.app/Landlorddb/properties.json";

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(API_URL);
//         if (response.data) {
//           const propertyList = Object.values(response.data);
//           setTotalProperties(propertyList.length);
//           setOccupiedProperties(propertyList.filter(p => p.status === "Occupied").length);
//           setVacantProperties(propertyList.filter(p => p.status === "Vacant").length);
//           setPendingPayments(propertyList.filter(p => p.paymentStatus === "Pending").length);
//           setCompletedPayments(propertyList.filter(p => p.paymentStatus === "Completed").length);
//           setMaintenanceRequests(propertyList.filter(p => p.maintenanceStatus === "Pending").length);
//         }
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="flex justify-between ">
//     <Sidebar/>

//     <div className="p-6 bg-gray-100 min-h-screen w-[100%] ml-[16%]">
//       <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

//       {loading ? (
//         <p className="text-lg text-center">Loading data...</p>
//       ) : (

//         <div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white p-4 shadow rounded-lg">
//             <h2 className="text-lg font-semibold">Total Properties</h2>
//             <p className="text-3xl font-bold">{totalProperties}</p>
//           </div>
//           <div className="bg-white p-4 shadow rounded-lg">
//             <h2 className="text-lg font-semibold">Occupied Properties</h2>
//             <p className="text-3xl font-bold text-green-600">{occupiedProperties}</p>
//           </div>
//           <div className="bg-white p-4 shadow rounded-lg">
//             <h2 className="text-lg font-semibold">Vacant Properties</h2>
//             <p className="text-3xl font-bold text-red-600">{vacantProperties}</p>
//           </div>
//           <div className="bg-white p-4 shadow rounded-lg">
//             <h2 className="text-lg font-semibold">Pending Payments</h2>
//             <p className="text-3xl font-bold text-orange-500">{pendingPayments}</p>
//           </div>
//           <div className="bg-white p-4 shadow rounded-lg">
//             <h2 className="text-lg font-semibold">Completed Payments</h2>
//             <p className="text-3xl font-bold text-blue-500">{completedPayments}</p>
//           </div>
//           <div className="bg-white p-4 shadow rounded-lg">
//             <h2 className="text-lg font-semibold">Maintenance Requests</h2>
//             <p className="text-3xl font-bold text-yellow-500">{maintenanceRequests}</p>
//           </div>
//         </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Dashboardpage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./DashboardPage.css"; // Importing CSS

const DashboardPage = () => {
  const [totalProperties, setTotalProperties] = useState(0);
  const [occupiedProperties, setOccupiedProperties] = useState(0);
  const [vacantProperties, setVacantProperties] = useState(0);
  const [pendingPayments, setPendingPayments] = useState(0);
  const [completedPayments, setCompletedPayments] = useState(0);
  const [maintenanceRequests, setMaintenanceRequests] = useState(0);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://rent-bc133-default-rtdb.asia-southeast1.firebasedatabase.app/Landlorddb/properties.json";

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        if (response.data) {
          const propertyList = Object.values(response.data);
          setTotalProperties(propertyList.length);
          setOccupiedProperties(
            propertyList.filter((p) => p.status === "Occupied").length
          );
          setVacantProperties(
            propertyList.filter((p) => p.status === "Vacant").length
          );
          setPendingPayments(
            propertyList.filter((p) => p.paymentStatus === "Pending").length
          );
          setCompletedPayments(
            propertyList.filter((p) => p.paymentStatus === "Completed").length
          );
          setMaintenanceRequests(
            propertyList.filter((p) => p.maintenanceStatus === "Pending").length
          );
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        {loading ? (
          <p className="loading-text">Loading data...</p>
        ) : (
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h2>Total Properties</h2>
              <p className="dashboard-number">{totalProperties}</p>
            </div>
            <div className="dashboard-card">
              <h2>Occupied Properties</h2>
              <p className="dashboard-number green">{occupiedProperties}</p>
            </div>
            <div className="dashboard-card">
              <h2>Vacant Properties</h2>
              <p className="dashboard-number red">{vacantProperties}</p>
            </div>
            <div className="dashboard-card">
              <h2>Pending Payments</h2>
              <p className="dashboard-number orange">{pendingPayments}</p>
            </div>
            <div className="dashboard-card">
              <h2>Completed Payments</h2>
              <p className="dashboard-number blue">{completedPayments}</p>
            </div>
            <div className="dashboard-card">
              <h2>Maintenance Requests</h2>
              <p className="dashboard-number yellow">{maintenanceRequests}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
