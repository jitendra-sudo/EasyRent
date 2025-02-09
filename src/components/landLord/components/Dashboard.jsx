import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaTools, FaBuilding, FaMoneyBillWave } from 'react-icons/fa';
import logo from './black-bg.png';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex h-screen w-full bg-gray-100">
   <Sidebar/>
    {/* Main Content */}
    <div className="flex flex-col flex-1 p-6 ml-64 overflow-auto">
      {/* Navbar */}
      <header className="flex justify-between items-center bg-white shadow p-4 rounded-lg">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here"
          className="p-2 border rounded-md"
        />
      </header>

      {/* Page Content */}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  </div>
);
};

export default Dashboard;
