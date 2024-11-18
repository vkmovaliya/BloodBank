// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/NavBar.css';
// import { FaHome } from "react-icons/fa";
// import { RiUserSettingsFill  } from "react-icons/ri";

// import { RiUser3Fill  } from "react-icons/ri";
// const NavBar = () => {
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

//   useEffect(() => {
//     const username = localStorage.getItem('username');
//     setIsUserLoggedIn(!!username);
//   }, []);

//   return (
//     <div>
//     <nav className="navbar navbar-expand-lg fixed-top navbar-transparent rounded">
//       <div className="container">
//         <Link to="/" className="navbar-brand">
//           Bloodbank
//         </Link>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//               <Link to="/" className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`}>
//                 <FaHome style={{ marginRight: '8px' }} />
//                  Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/admin" className={`nav-link ${window.location.pathname === '/admin' ? 'active' : ''}`}>
//                 <RiUserSettingsFill style={{ marginRight: '8px' }} /> Admin
//               </Link>
//             </li>
//             {!isUserLoggedIn && (
//               <li className="nav-item">
//                 <Link to="/login" className={`nav-link ${window.location.pathname === '/login' ? 'active' : ''}`}>
//                   <RiUser3Fill  style={{ marginRight: '8px' }} /> Login
//                 </Link>
//               </li>
//             )}

//           </ul>
//         </div>
//       </div>
//     </nav>

//     </div>
//   );
// };

// export default NavBar;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';
import { FaHome } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { RiUser3Fill } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai"; // Importing the icon for the About page

const NavBar = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('username');
        setIsUserLoggedIn(!!username);
    }, []);

    return ( <
        div >
        <
        nav className = "navbar navbar-expand-lg fixed-top navbar-transparent rounded" >
        <
        div className = "container" >
        <
        Link to = "/"
        className = "navbar-brand" >
        Bloodbank <
        /Link>

        <
        div className = "collapse navbar-collapse"
        id = "navbarNav" >
        <
        ul className = "navbar-nav ms-auto" >
        <
        li className = "nav-item" >
        <
        Link to = "/"
        className = { `nav-link ${window.location.pathname === '/' ? 'active' : ''}` } >
        <
        FaHome style = {
            { marginRight: '8px' } }
        />
        Home <
        /Link> <
        /li>

        <
        li className = "nav-item" >
        <
        Link to = "/about"
        className = { `nav-link ${window.location.pathname === '/about' ? 'active' : ''}` } >
        <
        AiFillInfoCircle style = {
            { marginRight: '8px' } }
        /> About <
        /Link> <
        /li> <
        li className = "nav-item" >
        <
        Link to = "/admin"
        className = { `nav-link ${window.location.pathname === '/admin' ? 'active' : ''}` } >
        <
        RiUserSettingsFill style = {
            { marginRight: '8px' } }
        /> Admin <
        /Link> <
        /li> {
            !isUserLoggedIn && ( <
                li className = "nav-item" >
                <
                Link to = "/login"
                className = { `nav-link ${window.location.pathname === '/login' ? 'active' : ''}` } >
                <
                RiUser3Fill style = {
                    { marginRight: '8px' } }
                /> Login <
                /Link> <
                /li>
            )
        } <
        /ul> <
        /div> <
        /div> <
        /nav> <
        /div>
    );
};

export default NavBar;