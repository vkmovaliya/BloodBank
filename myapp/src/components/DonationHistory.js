// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DonationHistory = () => {
//   const [donations, setDonations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDonations = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/blood-donations/', {
//           withCredentials: true,
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

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container">
//       <h4 className="text-center">My Donation History</h4>
//       <br />
//       <table className="table table-light table-hover table-bordered table-striped">
//         <thead className="bg-dark">
//           <tr>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Donor's Age</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Weight</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Gender</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Blood Group</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Units Donated</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Date</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {donations.map((donation) => (
//             <tr key={donation.id}>
//               <td>{donation.age}</td>
//               <td>{donation.weight} kg</td>
//               <td>{donation.gender}</td>
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
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DonationHistory;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DonationHistory = () => {
//   const [donations, setDonations] = useState([]);
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

//     const fetchDonations = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/blood-donations/${userId}/`, {
//           withCredentials: true,
//         });
//         setDonations(response.data);
//       } catch (err) {
//         setError('Failed to fetch donations');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonations();
//   }, [userId]);

//   const handleDownload = (donationId) => {
//     const url = `http://localhost:8000/api/download-certificate/${donationId}/`;
//     axios({
//       url,
//       method: 'GET',
//       responseType: 'blob', // Important to receive a binary file
//       withCredentials: true,
//     })
//       .then((response) => {
//         const url = window.URL.createObjectURL(new Blob([response.data]));
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', `certificate_${donationId}.pdf`); // File name for the download
//         document.body.appendChild(link);
//         link.click();
//       })
//       .catch((error) => {
//         console.error('Error downloading the certificate:', error);
//       });
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container">
//       <h4 className="text-center">My Donation History</h4>
//       <br />
//       <table className="table table-light table-hover table-bordered table-striped">
//         <thead className="bg-dark">
//           <tr>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Donor's Age</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Weight</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Gender</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Blood Group</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Units Donated</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Date</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Status</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Download Certificate</th> 
//           </tr>
//         </thead>
//         <tbody>
//           {donations.map((donation) => (
//             <tr key={donation.id}>
//               <td>{donation.age}</td>
//               <td>{donation.weight} kg</td>
//               <td>{donation.gender}</td>
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
//                 {donation.status === 'fulfilled' && (
//                   <button
//                     className="btn btn-primary btn-sm"
//                     onClick={() => handleDownload(donation.id)}
//                   >
//                     Download
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DonationHistory;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationHistory = () => {
  const [donations, setDonations] = useState([]);
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

    const fetchDonations = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/blood-donations/${userId}/`, {
          withCredentials: true,
        });
        setDonations(response.data);
      } catch (err) {
        setError('Failed to fetch donations');
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, [userId]);

  const handleDownload = (donationId) => {
    const url = `http://localhost:8000/api/download-certificate/${donationId}/`;
    axios({
      url,
      method: 'GET',
      responseType: 'blob',
      withCredentials: true,
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `certificate_${donationId}.pdf`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error('Error downloading the certificate:', error);
      });
  };

  if (loading) return <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

  // Inline CSS styles
  const tableContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    overflow: 'hidden', // Ensure rounded corners are visible
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow for better depth
    backgroundColor: '#f8f9fa', // Light background for contrast
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

  const buttonStyle = {
    padding: '8px 12px',
    fontSize: '0.875rem',
    backgroundColor: '#d9534f', // Blood bank theme color
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#c9302c', // Darker shade for button hover
  };

  return (
    <div style={tableContainerStyle}>
      <h4 style={{ textAlign: 'center', marginBottom: '20px', color: '#343a40' }}>My Donation History</h4>
      <table style={tableStyle}>
        <thead style={theadStyle}>
          <tr>
            <th style={thStyle}>Donor's Age</th>
            <th style={thStyle}>Weight</th>
            <th style={thStyle}>Gender</th>
            <th style={thStyle}>Blood Group</th>
            <th style={thStyle}>Units Donated</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Download Certificate</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td style={tdStyle}>{donation.age}</td>
              <td style={tdStyle}>{donation.weight} kg</td>
              <td style={tdStyle}>{donation.gender}</td>
              <td style={tdStyle}>{donation.blood_group}</td>
              <td style={tdStyle}>{donation.units_donated}</td>
              <td style={tdStyle}>{new Date(donation.donation_date).toLocaleDateString()}</td>
              <td style={tdStyle}>
                {donation.status === 'fulfilled' ? (
                  <span style={successStyle}>Approved</span>
                ) : donation.status === 'cancelled' ? (
                  <span style={dangerStyle}>Rejected</span>
                ) : (
                  <span style={infoStyle}>Pending</span>
                )}
              </td>
              <td style={tdStyle}>
                {donation.status === 'fulfilled' && (
                  <button
                    style={buttonStyle}
                    onClick={() => handleDownload(donation.id)}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                  >
                    Download
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationHistory;
