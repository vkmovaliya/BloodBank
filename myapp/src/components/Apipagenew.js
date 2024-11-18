// src/components/AdminPage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VerticalNavbarNew from './VerticalNavbarNew';
import Dashboard from './Dashboard'; // New Dashboard component for admin
import UserManagement from './UserManagement'; // New User Management component
import BloodAdmin from './BloodAdmin';
import DonateAdmin from './DonateAdmin';
import BloodStock from './BloodStock'; // New Blood Stock component for admin
import Logout from './Logout';

const Apipagenew = () => {
  return (
    <div style={{ display: 'flex' }}>
      <VerticalNavbarNew />
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/donation-history" element={<DonateAdmin />} />
          <Route path="/blood-requests" element={<BloodAdmin />} />
          <Route path="/blood-stock" element={<BloodStock />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default Apipagenew;
