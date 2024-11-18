import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // API call to the admin login endpoint
      const response = await axios.post('http://localhost:8000/admin-login/', {
        username,
        password,
      });

      if (response.data && response.data.success) {
        // Save admin data to localStorage
        localStorage.setItem('admin', JSON.stringify(response.data));
        
        // Success toast notification
        toast.success('Admin Login Successfully');

        // Redirect to the Admin Dashboard
        navigate('/apinew/dashboard');
      } else {
        // Error handling if the response is invalid
        setError('Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error('Admin login failed:', error);
      // Error toast notification
      toast.error('Admin login failed. Please check your credentials.');
      setError('Admin login failed');
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
                ADMIN Login
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
            
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
{/* <div className="admin-login-container">
      <section className="logins py-1" style={{ margin: '8%' }}>
        <div className="container py-xl-5 py-lg-3">
          <div className="title-section mb-md-3 mb-1">
            <h3 className="w3ls-title text-uppercase text-dark font-weight-bold">Admin Login</h3>
          </div>
          <hr />
          <div className="login px-sm-12" style={{ width: '100%' }}>
            <form onSubmit={handleLogin}>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control mt-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control mt-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
             
              <button type="submit" className="btn btn-outline-danger submit mt-1">Login</button>
            </form>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          </div>
        </div>
      </section>
    </div> */}