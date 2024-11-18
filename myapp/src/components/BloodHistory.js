// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BloodHistory = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const fetchUserId = () => {
//       const user = JSON.parse(localStorage.getItem('user'));
//       const userId = user ? user.id : null;
//       setUserId(userId);
//     };

//     fetchUserId();
//   }, []);

//   useEffect(() => {
//     if (userId === null) return; // Skip fetching if userId is not available

//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/blood-requests/${userId}/`, {
//           withCredentials: true
//         });
//         setRequests(response.data);
//       } catch (err) {
//         setError('Failed to fetch blood requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, [userId]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container">
//       <h4 className="text-center">My Blood Request History</h4>
//       <br />
//       <table className="table table-light table-hover table-bordered table-striped">
//         <thead className="bg-dark">
//           <tr>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>User</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Blood Group</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Units Requested</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Request Date</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requests.map((request) => (
//             <tr key={request.id}>
//               <td>{request.user || 'N/A'}</td>
//               <td>{request.blood_group}</td>
//               <td>{request.units_requested}</td>
//               <td>{new Date(request.request_date).toLocaleDateString()}</td>
//               <td>
//                 {request.status === 'fulfilled' ? (
//                   <span className="label success">Fulfilled</span>
//                 ) : request.status === 'cancelled' ? (
//                   <span className="label danger">Cancelled</span>
//                 ) : (
//                   <span className="label info">Pending</span>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BloodHistory;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BloodHistory = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user ? user.id : null;
      setUserId(userId);
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (userId === null) return;

    const fetchRequests = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/blood-requests/${userId}/`, {
          withCredentials: true,
        });
        setRequests(response.data);
      } catch (err) {
        setError('Failed to fetch blood requests');
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [userId]);

  if (loading) return <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

  // Inline CSS styles
  const tableContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const theadStyle = {
    backgroundColor: '#d9534f', // Blood bank theme color
    color: '#ffffff',
  };

  const thStyle = {
    padding: '12px',
    borderBottom: '2px solid #ddd',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const tdStyle = {
    padding: '12px',
    borderBottom: '1px solid #ddd',
    textAlign: 'center',
  };

  const successStyle = {
    color: '#28a745', // Green color for success
    fontWeight: 'bold',
  };

  const dangerStyle = {
    color: '#dc3545', // Red color for danger
    fontWeight: 'bold',
  };

  const infoStyle = {
    color: '#ffc107', // Yellow color for info
    fontWeight: 'bold',
  };

  return (
    <div style={tableContainerStyle}>
      <h4 style={{ textAlign: 'center', marginBottom: '20px', color: '#343a40' }}>My Blood Request History</h4>
      <table style={tableStyle}>
        <thead style={theadStyle}>
          <tr>
            <th style={thStyle}>User Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Blood Group</th>
            <th style={thStyle}>Units Requested</th>
            <th style={thStyle}>Request Date</th>
            <th style={thStyle}>Gender</th>
            <th style={thStyle}>City</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td style={tdStyle}>{request.full_name || 'N/A'}</td>
              <td style={tdStyle}>{request.email || 'N/A'}</td>
              <td style={tdStyle}>{request.blood_group}</td>
              <td style={tdStyle}>{request.units_requested}</td>
              
              <td style={tdStyle}>{new Date(request.request_date).toLocaleDateString()}</td>
              <td style={tdStyle}>{request.gender || 'N/A'}</td>
              <td style={tdStyle}>{request.city || 'N/A'}</td>
              <td style={tdStyle}>
                {request.status === 'fulfilled' ? (
                  <span style={successStyle}>Fulfilled</span>
                ) : request.status === 'cancelled' ? (
                  <span style={dangerStyle}>Cancelled</span>
                ) : (
                  <span style={infoStyle}>Pending</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodHistory;
