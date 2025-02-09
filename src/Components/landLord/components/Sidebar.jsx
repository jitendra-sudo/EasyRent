import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaTools, FaBuilding, FaMoneyBillWave } from 'react-icons/fa';
import logo from './black-bg.png';

const Sidebar = () => {
  

  return (
    <>
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-md flex flex-col p-4 fixed h-screen">
      <img src={logo} alt="logo" className="w-32 mx-auto mb-6" />
      <nav className="space-y-4">
        <NavLink to="/landlordDashboardpage" end className={({ isActive }) =>  `flex items-center p-2 rounded ${isActive ? "bg-green-200" : ""}` }
        >
          <MdOutlineDashboard className="mr-2" /> <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/landlordMyProperties"
          className={({ isActive }) =>
            `flex items-center p-2 rounded ${isActive ? "bg-green-200" : ""}`
          }
        >
          <FaBuilding className="mr-2" /> <span>Property Management</span>
        </NavLink>

        <NavLink
          to="/landlordMaintenanceCommunication"
          className={({ isActive }) =>
            `flex items-center p-2 rounded ${isActive ? "bg-green-200" : ""}`
          }
        >
          <FaTools className="mr-2" /> <span>Maintenance & Communication</span>
        </NavLink>

        <NavLink
          to="/landlordRentPayment"
          className={({ isActive }) =>
            `flex items-center p-2 rounded ${isActive ? "bg-green-200" : ""}`
          }
        >
          <FaMoneyBillWave className="mr-2" /> <span>Rent Payment</span>
        </NavLink>
      </nav>
    </aside>
  </>
);
};

export default Sidebar;
