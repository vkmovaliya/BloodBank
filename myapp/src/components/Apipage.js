// src/components/Apipage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VerticalNavBar from './VerticalNavBar';
import DonateBlood from './DonateBlood';
import DonationHistory from './DonationHistory';
import BloodRequests from './BloodRequests';
import BloodHistory from './BloodHistory';
import Logout from './Logout';
import UserProfile from './UserProfile';

const Apipage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <VerticalNavBar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/donor-requests" element={<DonateBlood />} />
          <Route path="/donor-history" element={<DonationHistory />} />
          <Route path="/blood-requests" element={<BloodRequests />} />
          <Route path="/blood-history" element={<BloodHistory />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default Apipage;
