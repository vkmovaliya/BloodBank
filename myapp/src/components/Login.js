// // src/components/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import {  toast } from 'react-toastify';
// const Login = () => {

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8000/login/', {
//         username,
//         password,
//       });

//       setSuccessMessage('Login successful');
//       setError('');
//       localStorage.setItem('username', username);
//       toast.success("Login Successfully");
//       // Redirect to the API page
//       navigate('/api');

//       console.log(response.data);
//     } catch (error) {
//       console.error('Login failed:', error);
//       toast.error("Login failed");
//       setError('Login failed');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div>
//       <section className="logins py-1" style={{margin:'8%'}}>
//         <div className="container py-xl-5 py-lg-3">
//           <div className="title-section mb-md-3 mb-1">
//             <h3 className="w3ls-title text-uppercase text-dark font-weight-bold">User Login</h3>
//           </div>
//           <hr />
//           <div className="login px-sm-12" style={{ width: '100%' }}>
//             <form onSubmit={handleLogin}>
//               <div className="form-group row">
//                 <div className="col-md-6">
//                   <label htmlFor="username">Username</label>
//                   <input
//                     type="text"
//                     id="username"
//                     className="form-control mt-2"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Username"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="form-control mt-2"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                     required
//                   />
//                 </div>
//               </div>
//               <p className='mt-5'>
//                 Don't have an account? <Link to="/register" className="login-link">Click here to Register</Link>
//               </p>
//               <button type="submit"  className="btn btn-outline-danger submit mt-1">Login</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUserPlus, FaHome } from "react-icons/fa";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login/", {
        username,
        password,
      });

      if (response.data && response.data.data) {
        setSuccessMessage("Login successful");
        setError("");

        // Save the entire user object to localStorage
        localStorage.setItem("user", JSON.stringify(response.data.data));
        toast.success("Login Successfully");

        // Redirect to the User Profile page
        navigate("/api/user-profile");
      } else {
        throw new Error("Invalid login response");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed");
      setError("Login failed");
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <section
        className="logins py-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div
          className="container py-xl-5 py-lg-3"
          style={{ maxWidth: "500px" }}
        >
          <div
            className="card"
            style={{
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            <div className="title-section mb-md-4 mb-2 text-center">
              <h3 className="w3ls-title text-uppercase text-danger font-weight-bold">
                Login
              </h3>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                  style={{ borderRadius: "4px" }}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  style={{ borderRadius: "4px" }}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-danger"
                  style={{
                    padding: "10px 50px",
                    fontSize: "18px",
                    borderRadius: "4px",
                  }}
                >
                  Login
                </button>
              </div>
            </form>
            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}
            {successMessage && (
              <p style={{ color: "green", marginTop: "10px" }}>
                {successMessage}
              </p>
            )}
            <div className="text-center mt-4">
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "100%" }}
              >
                {/* New Registration Link with Icon */}
                <Link
                  to="/register"
                  className="text-primary"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FaUserPlus className="mr-1" /> New Registration
                </Link>
                {/* Back to Home Link with Icon */}
                <Link
                  to="/"
                  className="text-primary"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FaHome className="mr-1" /> Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
