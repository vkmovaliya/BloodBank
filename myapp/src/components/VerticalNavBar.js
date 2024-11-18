// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/VerticalNavBar.css'; // Ensure this path is correct

// import { AiFillBank } from "react-icons/ai";
// import { RiLogoutCircleRLine } from "react-icons/ri";
// import { FaHistory } from "react-icons/fa";
// import { HiOutlinePlus } from "react-icons/hi";


// const VerticalNavBar = () => {
//   return (
//     <nav className="d-flex flex-column bg-dark vh-100 p-3">
//       <div className="text-center mb-4">
//         <h2 className="text-white">
//            Blood
//         </h2>
//       </div>
//       <ul className="nav flex-column">
//         <li className="nav-item mb-2">
//         <NavLink 
//             to="/api/user-profile" 
//             className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
//           >
//             <AiFillBank style={{ marginRight: '8px' }} /> User Profile
//         </NavLink>

//         </li>
//         <li className="nav-item mb-2">
//           <NavLink 
//             to="/api/donor-requests" 
//             className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
//           >
//             <HiOutlinePlus style={{ marginRight: '8px' }} /> Donate Blood
//           </NavLink>
//         </li>
//         <li className="nav-item mb-2">
//           <NavLink 
//             to="/api/donor-history" 
//             className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
//           >
//             <FaHistory style={{ marginRight: '8px' }} /> Donation History
//           </NavLink>
//         </li>
//         <li className="nav-item mb-2">
//           <NavLink 
//             to="/api/blood-requests" 
//             className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
//           >
//             <HiOutlinePlus style={{ marginRight: '8px' }} /> Blood Requests
//           </NavLink>
//         </li>
//         <li className="nav-item mb-2">
//           <NavLink 
//             to="/api/blood-history" 
//             className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
//           >
//             <FaHistory style={{ marginRight: '8px' }} /> Blood History
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink 
//             to="/api/logout" 
//             className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
//           >
//             <RiLogoutCircleRLine style={{ marginRight: '8px' }} /> Logout
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default VerticalNavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/VerticalNavBar.css'; // Ensure this path is correct

import { AiFillBank } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";

const VerticalNavBar = () => {
  return (
    <>
      {/* Navbar Section */}
      <nav className="d-flex flex-column navbar-fixed">
        <div className="text-center mb-4">
          <h2 className="text-white">Blood</h2>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink 
              to="/api/user-profile" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
            >
              <AiFillBank style={{ marginRight: '8px' }} /> User Profile
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink 
              to="/api/donor-requests" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
            >
              <HiOutlinePlus style={{ marginRight: '8px' }} /> Donate Blood
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink 
              to="/api/donor-history" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
            >
              <FaHistory style={{ marginRight: '8px' }} /> Donation History
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink 
              to="/api/blood-requests" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
            >
              <HiOutlinePlus style={{ marginRight: '8px' }} /> Blood Requests
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink 
              to="/api/blood-history" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
            >
              <FaHistory style={{ marginRight: '8px' }} /> Blood History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/api/logout" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
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

export default VerticalNavBar;
