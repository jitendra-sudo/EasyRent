// import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaTools, FaBuilding, FaMoneyBillWave } from "react-icons/fa";
import logo from "./black-bg.png";
import "./Sidebar.css"; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={logo} alt="logo" className="sidebar-logo" />
      <nav className="sidebar-nav">
        <NavLink to="/landlordDashboardpage" end className={({ isActive }) =>
            `sidebar-link ${isActive ? "active-link" : ""}`
          }
        >
          <MdOutlineDashboard className="icon" /> <span>Dashboard</span>
        </NavLink>

        <NavLink to="/landlordMyProperties" className={({ isActive }) =>
            `sidebar-link ${isActive ? "active-link" : ""}`
          }
        >
          <FaBuilding className="icon" /> <span>Property Management</span>
        </NavLink>

        <NavLink to="/landlordMaintenanceCommunication" className={({ isActive }) =>
            `sidebar-link ${isActive ? "active-link" : ""}`
          }
        >
          <FaTools className="icon" /> <span>Maintenance & Communication</span>
        </NavLink>

        <NavLink to="/landlordRentPayment" className={({ isActive }) =>
            `sidebar-link ${isActive ? "active-link" : ""}`
          }
        >
          <FaMoneyBillWave className="icon" /> <span>Rent Payment</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
