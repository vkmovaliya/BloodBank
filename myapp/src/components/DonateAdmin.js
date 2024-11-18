// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DonateAdmin = () => {
//   const [donations, setDonations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDonations = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/apinew/blood-donates/', {
//           withCredentials: true
//         });
//         setDonations(response.data);
//       } catch (err) {
//         setError('Failed to fetch donations');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonations();
//   }, []);

//   const handleStatusChange = async (id, status) => {
//     try {
//       // Update the donation status
//       await axios.patch(`http://localhost:8000/api/blood-donates/${id}/`, { status }, {
//         withCredentials: true
//       });

//       // If the status is 'fulfilled', update the blood stock
//       if (status === 'fulfilled') {
//         const donation = donations.find(donation => donation.id === id);
//         if (donation) {
//           await axios.post('http://localhost:8000/api/update-stock/', {
//             blood_group: donation.blood_group,
//             units: donation.units_donated
//           }, {
//             withCredentials: true
//           });
//         }
//       }

//       // Update the local state with the new status
//       setDonations(donations.map(donation => donation.id === id ? { ...donation, status } : donation));
//     } catch (err) {
//       setError('Failed to update donation status');
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container">
//       <h4 className="text-center">Blood Donations History</h4>
//       <br />
//       <table className="table table-light table-hover table-bordered table-striped">
//         <thead className="bg-dark">
//           <tr>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>id</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Blood Group</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Units Donated</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Donation Date</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Status</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {donations.map((donation) => (
//             <tr key={donation.id}>
//               <td>{`${donation.user_first_name} ${donation.user_last_name}`}</td>
//               <td>{donation.blood_group}</td>
//               <td>{donation.units_donated}</td>
//               <td>{new Date(donation.donation_date).toLocaleDateString()}</td>
//               <td>
//                 {donation.status === 'fulfilled' ? (
//                   <span className="label success">Approved</span>
//                 ) : donation.status === 'cancelled' ? (
//                   <span className="label danger">Rejected</span>
//                 ) : (
//                   <span className="label info">Pending</span>
//                 )}
//               </td>
//               <td>
//                 {donation.status === 'pending' && (
//                   <>
//                     <button
//                       className="btn btn-success"
//                       onClick={() => handleStatusChange(donation.id, 'fulfilled')}
//                     >
//                       Approve
//                     </button>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => handleStatusChange(donation.id, 'cancelled')}
//                     >
//                       Reject
//                     </button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DonateAdmin;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DonateAdmin = () => {
//   const [donations, setDonations] = useState([]);
//   const [filteredDonations, setFilteredDonations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [filters, setFilters] = useState({
//     status: '',
//     bloodGroup: '',
//     userName: '',
//   });

//   useEffect(() => {
//     const fetchDonations = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/apinew/blood-donates/', {
//           params: filters,  // Include filters in the request
//           withCredentials: true,
//         });
//         setDonations(response.data);
//         setFilteredDonations(response.data);  // Initialize filtered data
//       } catch (err) {
//         setError('Failed to fetch donations');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonations();
//   }, [filters]);  // Re-fetch data when filters change
//   const handleStatusChange = async (id, status) => {
//     try {
//       await axios.patch(`http://localhost:8000/api/blood-donates/${id}/`, { status }, {
//         withCredentials: true,
//       });
  
//       if (status === 'fulfilled') {
//         const donation = donations.find(donation => donation.id === id);
//         if (donation) {
//           await axios.post('http://localhost:8000/api/update-stock/', {
//             blood_group: donation.blood_group,
//             units: donation.units_donated,
//           }, {
//             withCredentials: true,
//           });
//         }
//       }
  
//       setDonations(prevDonations => 
//         prevDonations.map(donation => 
//           donation.id === id ? { ...donation, status } : donation
//         )
//       );
//     } catch (err) {
//       setError('Failed to update donation status');
//     }
//   };
  

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container">
//       <h4 className="text-center">Blood Donations History</h4>
//       <br />
//       <div className="filters">
//         <select name="status" onChange={handleFilterChange} className="form-select">
//           <option value="">All Status</option>
//           <option value="fulfilled">Approved</option>
//           <option value="cancelled">Rejected</option>
//           <option value="pending">Pending</option>
//         </select>
//         <select name="bloodGroup" onChange={handleFilterChange} className="form-select">
//           <option value="">All Blood Groups</option>
//           <option value="A+">A+</option>
//           <option value="A-">A-</option>
//           <option value="B+">B+</option>
//           <option value="B-">B-</option>
//           <option value="AB+">AB+</option>
//           <option value="AB-">AB-</option>
//           <option value="O+">O+</option>
//           <option value="O-">O-</option>
//         </select>
//         <input
//           type="text"
//           name="userName"
//           placeholder="User Name"
//           onChange={handleFilterChange}
//           className="form-control"
//         />
//       </div>
//       <br />
//       <table className="table table-light table-hover table-bordered table-striped">
//         <thead className="bg-dark">
//           <tr>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>User</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Blood Group</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Units Donated</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Donation Date</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Status</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredDonations.length === 0 ? (
//             <tr>
//               <td colSpan="6" className="text-center">Results not found</td>
//             </tr>
//           ) : (
//             filteredDonations.map((donation) => (
//               <tr key={donation.id}>
//                 <td>{`${donation.user_first_name} ${donation.user_last_name}`}</td>
//                 <td>{donation.blood_group}</td>
//                 <td>{donation.units_donated}</td>
//                 <td>{new Date(donation.donation_date).toLocaleDateString()}</td>
//                 <td>
//                   {donation.status === 'fulfilled' ? (
//                     <span className="label success">Approved</span>
//                   ) : donation.status === 'cancelled' ? (
//                     <span className="label danger">Rejected</span>
//                   ) : (
//                     <span className="label info">Pending</span>
//                   )}
//                 </td>
//                 <td>
//                   {donation.status === 'pending' && (
//                     <>
//                       <button
//                         className="btn btn-success"
//                         onClick={() => handleStatusChange(donation.id, 'fulfilled')}
//                       >
//                         Approve
//                       </button>
//                       <button
//                         className="btn btn-danger"
//                         onClick={() => handleStatusChange(donation.id, 'cancelled')}
//                       >
//                         Reject
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DonateAdmin;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonateAdmin = () => {
  const [donations, setDonations] = useState([]);
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    bloodGroup: '',
    userName: '',
  });

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/apinew/blood-donates/', {
          withCredentials: true,
        });
        setDonations(response.data);
        setFilteredDonations(response.data);  // Initialize filtered data
      } catch (err) {
        setError('Failed to fetch donations');
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  useEffect(() => {
    // Filter donations based on the filters state
    const filterDonations = () => {
      let filtered = donations;

      if (filters.status) {
        filtered = filtered.filter(donation => donation.status === filters.status);
      }

      if (filters.bloodGroup) {
        filtered = filtered.filter(donation => donation.blood_group === filters.bloodGroup);
      }

      if (filters.userName) {
        filtered = filtered.filter(donation =>
          `${donation.user_first_name} ${donation.user_last_name}`
            .toLowerCase()
            .includes(filters.userName.toLowerCase())
        );
      }

      setFilteredDonations(filtered);
    };

    filterDonations();
  }, [filters, donations]);

  const handleStatusChange = async (id, status) => {
    try {
      await axios.patch(`http://localhost:8000/api/blood-donates/${id}/`, { status }, {
        withCredentials: true,
      });

      if (status === 'fulfilled') {
        const donation = donations.find(donation => donation.id === id);
        if (donation) {
          await axios.post('http://localhost:8000/api/update-stock/', {
            blood_group: donation.blood_group,
            units: donation.units_donated,
          }, {
            withCredentials: true,
          });
        }
      }

      setDonations(prevDonations =>
        prevDonations.map(donation =>
          donation.id === id ? { ...donation, status } : donation
        )
      );
    } catch (err) {
      setError('Failed to update donation status');
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h4 className="text-center">Blood Donations History</h4>
      <br />
      {/* <div className="filters">
        <select name="status" onChange={handleFilterChange} className="form-select">
          <option value="">All Status</option>
          <option value="fulfilled">Approved</option>
          <option value="cancelled">Rejected</option>
          <option value="pending">Pending</option>
        </select>
        <select name="bloodGroup" onChange={handleFilterChange} className="form-select">
          <option value="">All Blood Groups</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          onChange={handleFilterChange}
          className="form-control"
        />
      </div> */}
      <div className="container py-4">
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="statusFilter" className="form-label">Status</label>
          <select
            id="statusFilter"
            name="status"
            onChange={handleFilterChange}
            className="form-select"
          >
            <option value="">All Status</option>
            <option value="fulfilled">Approved</option>
            <option value="cancelled">Rejected</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="bloodGroupFilter" className="form-label">Blood Group</label>
          <select
            id="bloodGroupFilter"
            name="bloodGroup"
            onChange={handleFilterChange}
            className="form-select"
          >
            <option value="">All Blood Groups</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="userNameFilter" className="form-label">User Name</label>
          <input
            id="userNameFilter"
            type="text"
            name="userName"
            placeholder="User Name"
            onChange={handleFilterChange}
            className="form-control"
          />
        </div>
      </div>
    </div>
      
      <table className="table table-light table-hover table-bordered table-striped">
        <thead className="bg-dark">
          <tr>
            <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>User</th>
            <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Blood Group</th>
            <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Units Donated</th>
            <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Donation Date</th>
            <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Status</th>
            <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonations.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">No results found</td>
            </tr>
          ) : (
            filteredDonations.map((donation) => (
              <tr key={donation.id}>
                <td>{`${donation.user_first_name} ${donation.user_last_name}`}</td>
                <td>{donation.blood_group}</td>
                <td>{donation.units_donated}</td>
                <td>{new Date(donation.donation_date).toLocaleDateString()}</td>
                <td>
                  {donation.status === 'fulfilled' ? (
                    <span className="label success">Approved</span>
                  ) : donation.status === 'cancelled' ? (
                    <span className="label danger">Rejected</span>
                  ) : (
                    <span className="label info">Pending</span>
                  )}
                </td>
                <td>
                  {donation.status === 'pending' && (
                    <>
                      <button
                        className="btn btn-success"
                        onClick={() => handleStatusChange(donation.id, 'fulfilled')}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleStatusChange(donation.id, 'cancelled')}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DonateAdmin;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BloodAdmin = () => {
//   const [requests, setRequests] = useState([]);
//   const [filteredRequests, setFilteredRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [filters, setFilters] = useState({
//     status: '',
//     bloodGroup: '',
//     userName: '',
//   });

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/apinew/blood-requests/', {
//           withCredentials: true,
//         });
//         setRequests(response.data);
//         setFilteredRequests(response.data); // Initialize filtered data
//       } catch (err) {
//         setError('Failed to fetch blood requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   useEffect(() => {
//     // Filter requests based on the filters state
//     const filterRequests = () => {
//       let filtered = requests;

//       if (filters.status) {
//         filtered = filtered.filter(request => request.status === filters.status);
//       }

//       if (filters.bloodGroup) {
//         filtered = filtered.filter(request => request.blood_group === filters.bloodGroup);
//       }

//       if (filters.userName) {
//         filtered = filtered.filter(request =>
//           `${request.user_first_name} ${request.user_last_name}`
//             .toLowerCase()
//             .includes(filters.userName.toLowerCase())
//         );
//       }

//       setFilteredRequests(filtered);
//     };

//     filterRequests();
//   }, [filters, requests]);

//   const handleStatusChange = async (id, status) => {
//     try {
//       const request = requests.find(req => req.id === id);

//       if (status === 'fulfilled') {
//         const stockResponse = await axios.get(`http://127.0.0.1:8000/api/blood-stock/${request.blood_group}/`, {
//           withCredentials: true,
//         });
//         const availableUnits = stockResponse.data.units_available;

//         if (availableUnits < request.units_requested) {
//           setError('Not enough units in stock to fulfill this request.');
//           return;
//         }

//         await axios.post('http://127.0.0.1:8000/api/update-stock/', {
//           blood_group: request.blood_group,
//           units: -(request.units_requested),
//         }, {
//           withCredentials: true,
//         });
//       }

//       await axios.patch(`http://127.0.0.1:8000/blood-requests/${id}/`, { status }, {
//         withCredentials: true,
//       });

//       setRequests(prevRequests =>
//         prevRequests.map(req => (req.id === id ? { ...req, status } : req))
//       );
//       setError('');
//     } catch (err) {
//       setError('Failed to update request status');
//     }
//   };

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
//   };

//   if (loading) return <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Loading...</p>;
//   if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

//   // Inline CSS styles
//   const tableContainerStyle = {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '20px',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#f8f9fa',
//   };

//   const tableStyle = {
//     width: '100%',
//     borderCollapse: 'collapse',
//   };

//   const theadStyle = {
//     backgroundColor: '#d9534f', // Blood bank theme color
//     color: '#ffffff',
//   };

//   const thStyle = {
//     padding: '12px',
//     borderBottom: '2px solid #ddd',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   };

//   const tdStyle = {
//     padding: '12px',
//     borderBottom: '1px solid #ddd',
//     textAlign: 'center',
//   };

//   const badgeStyles = {
//     fulfilled: { color: '#28a745', fontWeight: 'bold' }, // Green for Fulfilled
//     cancelled: { color: '#dc3545', fontWeight: 'bold' }, // Red for Cancelled
//     pending: { color: '#ffc107', fontWeight: 'bold' } // Yellow for Pending
//   };

//   const buttonStyle = {
//     borderRadius: '0.375rem',
//     marginRight: '0.5rem'
//   };

//   const evenRowStyle = {
//     backgroundColor: '#f8f9fa',
//   };

//   const hoverRowStyle = {
//     backgroundColor: '#e9ecef',
//   };

//   return (
//     <div style={tableContainerStyle}>
//       <h4 style={{ textAlign: 'center', marginBottom: '20px', color: '#343a40' }}>Blood Requests History</h4>
//       <div className="container py-4">
//         <div className="row">
//           <div className="col-md-4 mb-3">
//             <label htmlFor="statusFilter" className="form-label">Status</label>
//             <select
//               id="statusFilter"
//               name="status"
//               onChange={handleFilterChange}
//               className="form-select"
//             >
//               <option value="">All Status</option>
//               <option value="fulfilled">Fulfilled</option>
//               <option value="cancelled">Cancelled</option>
//               <option value="pending">Pending</option>
//             </select>
//           </div>
//           <div className="col-md-4 mb-3">
//             <label htmlFor="bloodGroupFilter" className="form-label">Blood Group</label>
//             <select
//               id="bloodGroupFilter"
//               name="bloodGroup"
//               onChange={handleFilterChange}
//               className="form-select"
//             >
//               <option value="">All Blood Groups</option>
//               <option value="A+">A+</option>
//               <option value="A-">A-</option>
//               <option value="B+">B+</option>
//               <option value="B-">B-</option>
//               <option value="AB+">AB+</option>
//               <option value="AB-">AB-</option>
//               <option value="O+">O+</option>
//               <option value="O-">O-</option>
//             </select>
//           </div>
//           <div className="col-md-4 mb-3">
//             <label htmlFor="userNameFilter" className="form-label">User Name</label>
//             <input
//               id="userNameFilter"
//               type="text"
//               name="userName"
//               placeholder="User Name"
//               onChange={handleFilterChange}
//               className="form-control"
//             />
//           </div>
//         </div>
//       </div>

//       <table style={tableStyle}>
//         <thead style={theadStyle}>
//           <tr>
//             <th style={thStyle}>User</th>
//             <th style={thStyle}>Blood Group</th>
//             <th style={thStyle}>Units Requested</th>
//             <th style={thStyle}>Request Date</th>
//             <th style={thStyle}>Status</th>
//             <th style={thStyle}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredRequests.length === 0 ? (
//             <tr>
//               <td colSpan="6" className="text-center">No results found</td>
//             </tr>
//           ) : (
//             filteredRequests.map((request, index) => (
//               <tr key={request.id} style={index % 2 === 0 ? evenRowStyle : hoverRowStyle}>
//                 <td style={tdStyle}>{`${request.user_first_name} ${request.user_last_name}`}</td>
//                 <td style={tdStyle}>{request.blood_group}</td>
//                 <td style={tdStyle}>{request.units_requested}</td>
//                 <td style={tdStyle}>{new Date(request.request_date).toLocaleDateString()}</td>
//                 <td style={tdStyle}>
//                   {request.status === 'fulfilled' ? (
//                     <span style={badgeStyles.fulfilled}>Fulfilled</span>
//                   ) : request.status === 'cancelled' ? (
//                     <span style={badgeStyles.cancelled}>Cancelled</span>
//                   ) : (
//                     <span style={badgeStyles.pending}>Pending</span>
//                   )}
//                 </td>
//                 <td style={tdStyle}>
//                   {request.status === 'pending' && (
//                     <>
//                       <button
//                         onClick={() => handleStatusChange(request.id, 'fulfilled')}
//                         className="btn btn-success"
//                         style={buttonStyle}
//                       >
//                         Fulfill
//                       </button>
//                       <button
//                         onClick={() => handleStatusChange(request.id, 'cancelled')}
//                         className="btn btn-danger"
//                         style={buttonStyle}
//                       >
//                         Cancel
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BloodAdmin;
