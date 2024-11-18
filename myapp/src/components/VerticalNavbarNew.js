import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/VerticalNavBar.css';  // Ensure this path is correct

import { AiFillBank } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";  // New icon for Dashboard

const VerticalNavbarNew = () => {
  return (
    <>
    <nav className="d-flex flex-column bg-dark vh-100 p-3 navbar-fixed" style={{ boxShadow: '2px 0 5px rgba(0,0,0,0.5)' }}>
      <div className="text-center mb-4">
        <h2 className="text-white">
          <AiFillBank style={{ marginRight: '8px' }} /> Admin
        </h2>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink 
            to="/apinew/dashboard" 
            className={({ isActive }) => `nav-link text-white ${isActive ? 'active-admin' : ''}`}
          >
            <MdDashboard style={{ marginRight: '8px' }} /> Dashboard
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink 
            to="/apinew/user-management" 
            className={({ isActive }) => `nav-link text-white ${isActive ? 'active-admin' : ''}`}
          >
            <AiFillBank style={{ marginRight: '8px' }} /> All User
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink 
            to="/apinew/donation-history" 
            className={({ isActive }) => `nav-link text-white ${isActive ? 'active-admin' : ''}`}
          >
            <FaHistory style={{ marginRight: '8px' }} /> Donation History
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink 
            to="/apinew/blood-requests" 
            className={({ isActive }) => `nav-link text-white ${isActive ? 'active-admin' : ''}`}
          >
            <HiOutlinePlus style={{ marginRight: '8px' }} /> Blood Requests
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink 
            to="/apinew/blood-stock" 
            className={({ isActive }) => `nav-link text-white ${isActive ? 'active-admin' : ''}`}
          >
            <HiOutlinePlus style={{ marginRight: '8px' }} /> Blood Stock
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/api/logout" 
            className={({ isActive }) => `nav-link text-white ${isActive ? 'active-admin' : ''}`}
          >
            <RiLogoutCircleRLine style={{ marginRight: '8px' }} /> Logout
          </NavLink>
        </li>
      </ul>
    </nav>
    {/* Main Content Section */}
    <div className="main-content">
    </div>
    </>
  );
};

export default VerticalNavbarNew;
