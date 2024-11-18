// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BloodAdmin = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [stockError, setStockError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/apinew/blood-requests/', {
//           withCredentials: true,
//         });
//         console.log(response.data)
//         setRequests(response.data);
//       } catch (err) {
//         setError('Failed to fetch blood requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleStatusChange = async (id, status) => {
//     try {
//       const request = requests.find((req) => req.id === id);

//       if (status === 'fulfilled') {
//         const stockResponse = await axios.get(`http://127.0.0.1:8000/api/blood-stock/${request.blood_group}/`, {
//           withCredentials: true,
//         });
//         const availableUnits = stockResponse.data.units_available;

//         if (availableUnits < request.units_requested) {
//           setStockError('Not enough units in stock to fulfill this request.');
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

//       setRequests(requests.map((req) => (req.id === id ? { ...req, status } : req)));
//       setStockError('');
//     } catch (err) {
//       setError('Failed to update request status');
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (stockError) return <p>{stockError}</p>;

//   return (
//     <div className="container">
//       <h4 className="text-center">Blood Request History</h4>
//       <br />
//       <table className="table table-light table-hover table-bordered table-striped">
//         <thead className="bg-dark">
//           <tr>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>User</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Blood Group</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Units Requested</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Request Date</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Status</th>
//             <th scope="col" style={{ color: 'rgb(192, 192, 192)' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requests.map((request) => (
//             <tr key={request.id}>
//               <td>{`${request.user_first_name} ${request.user_last_name}`}</td>
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
//               <td>
//                 {request.status === 'pending' && (
//                   <>
//                     <button
//                       className="btn btn-success"
//                       onClick={() => handleStatusChange(request.id, 'fulfilled')}
//                     >
//                       Approve
//                     </button>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => handleStatusChange(request.id, 'cancelled')}
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

//export default BloodAdmin;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BloodAdmin = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [stockError, setStockError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchRequests = async() => {
            try {
                // Fetch data with current search query 
                const response = await axios.get('http://127.0.0.1:8000/apinew/blood-requests/', {
                    params: { search: searchQuery.trim() },
                    withCredentials: true,
                });
                console.log('API Response:', response.data); // Log response data
                setRequests(response.data);
            } catch (err) {
                console.error('Error fetching requests:', err); // Log error
                setError('Failed to fetch blood requests');
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, [searchQuery]);

    const handleStatusChange = async(id, status) => {
        try {
            const request = requests.find((req) => req.id === id);

            if (status === 'fulfilled') {
                const stockResponse = await axios.get(`http://127.0.0.1:8000/api/blood-stock/${request.blood_group}/`, {
                    withCredentials: true,
                });
                const availableUnits = stockResponse.data.units_available;

                if (availableUnits < request.units_requested) {
                    setStockError('Not enough units in stock to fulfill this request.');
                    return;
                }

                await axios.post('http://127.0.0.1:8000/api/update-stock/', {
                    blood_group: request.blood_group,
                    units: -(request.units_requested),
                }, {
                    withCredentials: true,
                });
            }

            await axios.patch(`http://127.0.0.1:8000/blood-requests/${id}/`, { status }, {
                withCredentials: true,
            });

            setRequests(requests.map((req) => (req.id === id ? {...req, status } : req)));
            setStockError('');
        } catch (err) {
            setError('Failed to update request status');
        }
    };

    if (loading) return <p > Loading... < /p>;
    if (error) return <p > { error } < /p>;
    if (stockError) return <p > { stockError } < /p>;

    return ( <
        div className = "container" >
        <
        h4 className = "text-center" > Blood Request History < /h4> <
        br / >
        Username:
        <
        input type = "text"
        className = "form-control"
        placeholder = "Search by username"
        value = { searchQuery }
        onChange = {
            (e) => setSearchQuery(e.target.value) }
        /> <
        br / >
        <
        table className = "table table-light table-hover table-bordered table-striped" >
        <
        thead className = "bg-dark" >
        <
        tr >
        <
        th scope = "col"
        style = {
            { color: 'rgb(192, 192, 192)' } } > User < /th> <
        th scope = "col"
        style = {
            { color: 'rgb(192, 192, 192)' } } > Blood Group < /th> <
        th scope = "col"
        style = {
            { color: 'rgb(192, 192, 192)' } } > Units Requested < /th> <
        th scope = "col"
        style = {
            { color: 'rgb(192, 192, 192)' } } > Request Date < /th> <
        th scope = "col"
        style = {
            { color: 'rgb(192, 192, 192)' } } > Status < /th> <
        th scope = "col"
        style = {
            { color: 'rgb(192, 192, 192)' } } > Actions < /th> <
        /tr> <
        /thead> <
        tbody > {
            requests.map((request) => ( <
                tr key = { request.id } >
                <
                td > { `${request.user_first_name} ${request.user_last_name}` } < /td> <
                td > { request.blood_group } < /td> <
                td > { request.units_requested } < /td> <
                td > { new Date(request.request_date).toLocaleDateString() } < /td> <
                td > {
                    request.status === 'fulfilled' ? ( <
                        span className = "label success" > Fulfilled < /span>
                    ) : request.status === 'cancelled' ? ( <
                        span className = "label danger" > Cancelled < /span>
                    ) : ( <
                        span className = "label info" > Pending < /span>
                    )
                } <
                /td> <
                td > {
                    request.status === 'pending' && ( <
                        >
                        <
                        button className = "btn btn-success"
                        onClick = {
                            () => handleStatusChange(request.id, 'fulfilled') } >
                        Approve <
                        /button> <
                        button className = "btn btn-danger"
                        onClick = {
                            () => handleStatusChange(request.id, 'cancelled') } >
                        Reject <
                        /button> <
                        />
                    )
                } <
                /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        /div>
    );
};

export default BloodAdmin;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BloodAdmin = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [stockError, setStockError] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/apinew/blood-requests/', {
//           params: { search: searchQuery.trim() },
//           withCredentials: true,
//         });
//         setRequests(response.data);
//       } catch (err) {
//         setError('Failed to fetch blood requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, [searchQuery]);

//   const handleStatusChange = async (id, status) => {
//     try {
//       const request = requests.find((req) => req.id === id);

//       if (status === 'fulfilled') {
//         const stockResponse = await axios.get(`http://127.0.0.1:8000/api/blood-stock/${request.blood_group}/`, {
//           withCredentials: true,
//         });
//         const availableUnits = stockResponse.data.units_available;

//         if (availableUnits < request.units_requested) {
//           setStockError('Not enough units in stock to fulfill this request.');
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

//       setRequests(requests.map((req) => (req.id === id ? { ...req, status } : req)));

//       setStockError('');
//     } catch (err) {
//       setError('Failed to update request status');
//     }
//   };

//   if (loading) return <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Loading...</p>;
//   if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;
//   if (stockError) return <p style={{ textAlign: 'center', color: 'red' }}>{stockError}</p>;

//   return (
//     <div className="container" style={{ padding: '20px', backgroundColor: '#f8d7da' }}>
//       <h4 className="text-center" style={{ marginBottom: '20px', color: '#C8102E' }}>Blood Request History</h4>
//       <div className="d-flex justify-content-end" style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by username"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           style={{
//             maxWidth: '300px',
//             borderRadius: '20px',
//             borderColor: '#C8102E',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//             padding: '10px 15px',
//             outline: 'none'
//           }}
//         />
//       </div>
//       <div style={{ overflowX: 'auto' }}>
//         <table style={{
//           width: '100%',
//           borderCollapse: 'separate',
//           borderSpacing: '0',
//           borderColor: '#C8102E',
//           border: '1px solid #C8102E',
//           borderRadius: '10px',
//           backgroundColor: '#ffffff',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//         }}>
//           <thead style={{
//             backgroundColor: '#C8102E',
//             color: '#ffffff',
//             borderRadius: '10px 10px 0 0',
//             textAlign: 'left'
//           }}>
//             <tr>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>User</th>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>Blood Group</th>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>Units Requested</th>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>Request Date</th>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>Status</th>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((request) => (
//               <tr key={request.id} style={{ backgroundColor: '#ffffff' }}>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>{`${request.user_first_name} ${request.user_last_name}`}</td>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>{request.blood_group}</td>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>{request.units_requested}</td>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>{new Date(request.request_date).toLocaleDateString()}</td>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>
//                   {request.status === 'fulfilled' ? (
//                     <span style={{
//                       backgroundColor: '#28a745',
//                       color: '#ffffff',
//                       padding: '0.5em 1em',
//                       borderRadius: '12px',
//                       fontSize: '0.9em',
//                       display: 'inline-block'
//                     }}>Fulfilled</span>
//                   ) : request.status === 'cancelled' ? (
//                     <span style={{
//                       backgroundColor: '#dc3545',
//                       color: '#ffffff',
//                       padding: '0.5em 1em',
//                       borderRadius: '12px',
//                       fontSize: '0.9em',
//                       display: 'inline-block'
//                     }}>Cancelled</span>
//                   ) : (
//                     <span style={{
//                       backgroundColor: '#ffc107',
//                       color: '#ffffff',
//                       padding: '0.5em 1em',
//                       borderRadius: '12px',
//                       fontSize: '0.9em',
//                       display: 'inline-block'
//                     }}>Pending</span>
//                   )}
//                 </td>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>
//                   {request.status === 'pending' && (
//                     <>
//                       <button
//                         className="btn btn-success btn-sm me-2"
//                         onClick={() => handleStatusChange(request.id, 'fulfilled')}
//                         style={{ borderRadius: '5px' }}
//                       >
//                         Approve
//                       </button>
//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => handleStatusChange(request.id, 'cancelled')}
//                         style={{ borderRadius: '5px' }}
//                       >
//                         Reject
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BloodAdmin;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BloodAdmin = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [stockError, setStockError] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/apinew/blood-requests/', {
//           params: { search: searchQuery.trim() },
//           withCredentials: true,
//         });
//         setRequests(response.data);
//       } catch (err) {
//         setError('Failed to fetch blood requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, [searchQuery]);

//   const handleStatusChange = async (id, status) => {
//     try {
//       const request = requests.find((req) => req.id === id);

//       if (status === 'fulfilled') {
//         const stockResponse = await axios.get(`http://127.0.0.1:8000/api/blood-stock/${request.blood_group}/`, {
//           withCredentials: true,
//         });
//         const availableUnits = stockResponse.data.units_available;

//         if (availableUnits < request.units_requested) {
//           setStockError('Not enough units in stock to fulfill this request.');
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

//       setRequests(requests.map((req) => (req.id === id ? { ...req, status } : req)));
//       setStockError('');
//     } catch (err) {
//       setError('Failed to update request status');
//     }
//   };

//   if (loading) return <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Loading...</p>;
//   if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;
//   if (stockError) return <p style={{ textAlign: 'center', color: 'red' }}>{stockError}</p>;

//   return (
//     <div className="container" style={{ padding: '20px', backgroundColor: '#f8d7da' }}>
//       <h4 className="text-center" style={{ marginBottom: '20px', color: '#C8102E' }}>Blood Request History</h4>
//       <div className="d-flex justify-content-end" style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by username"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           style={{
//             maxWidth: '300px',
//             borderRadius: '20px',
//             borderColor: '#C8102E',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//             padding: '10px 15px',
//             outline: 'none'
//           }}
//         />
//       </div>
//       <div style={{ overflowX: 'auto' }}>
//         <table style={{
//           width: '100%',
//           borderCollapse: 'collapse',
//           border: '1px solid #C8102E',
//           borderRadius: '10px',
//           backgroundColor: '#ffffff',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//         }}>
//           <thead style={{
//             backgroundColor: '#C8102E',
//             color: '#ffffff',
//             borderRadius: '10px 10px 0 0',
//             textAlign: 'left'
//           }}>
//             <tr>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>User</th>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>Blood Group</th>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>Units Requested</th>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>Request Date</th>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>Status</th>
//               <th style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((request) => (
//               <tr key={request.id} style={{ backgroundColor: '#ffffff' }}>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>{`${request.user_first_name} ${request.user_last_name}`}</td>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>{request.blood_group}</td>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>{request.units_requested}</td>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>{new Date(request.request_date).toLocaleDateString()}</td>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>
//                   {request.status === 'fulfilled' ? (
//                     <span style={{
//                       backgroundColor: '#28a745',
//                       color: '#ffffff',
//                       padding: '0.5em 1em',
//                       borderRadius: '12px',
//                       fontSize: '0.9em',
//                       display: 'inline-block'
//                     }}>Fulfilled</span>
//                   ) : request.status === 'cancelled' ? (
//                     <span style={{
//                       backgroundColor: '#dc3545',
//                       color: '#ffffff',
//                       padding: '0.5em 1em',
//                       borderRadius: '12px',
//                       fontSize: '0.9em',
//                       display: 'inline-block'
//                     }}>Cancelled</span>
//                   ) : (
//                     <span style={{
//                       backgroundColor: '#ffc107',
//                       color: '#ffffff',
//                       padding: '0.5em 1em',
//                       borderRadius: '12px',
//                       fontSize: '0.9em',
//                       display: 'inline-block'
//                     }}>Pending</span>
//                   )}
//                 </td>
//                 <td style={{ padding: '12px 15px', border: '1px solid #C8102E' }}>
//                   {request.status === 'pending' && (
//                     <>
//                       <button
//                         className="btn btn-success btn-sm me-2"
//                         onClick={() => handleStatusChange(request.id, 'fulfilled')}
//                         style={{ borderRadius: '5px' }}
//                       >
//                         Approve
//                       </button>
//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => handleStatusChange(request.id, 'cancelled')}
//                         style={{ borderRadius: '5px' }}
//                       >
//                         Reject
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BloodAdmin;