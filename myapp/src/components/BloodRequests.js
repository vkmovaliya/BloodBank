// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const BloodRequests = () => {
//   const [formData, setFormData] = useState({
//     blood_group: '',
//     units_requested: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     const userId = storedUser ? storedUser.id : null;

//     if (!userId) {
//       setError('User not found');
//       setLoading(false);
//       return;
//     }

//     try {
//       await axios.post(
//         'http://localhost:8000/blood-requests/',
//         {
//           user: userId,
//           blood_group: formData.blood_group,
//           units_requested: formData.units_requested,
//         },
//         {
//           withCredentials: true,
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       toast.success("Blood request submitted successfully.");
//       setFormData({
//         blood_group: '',
//         units_requested: '',
//       });
//     } catch (error) {
//       console.error('Failed to submit blood request:', error);
//       setError('Failed to submit blood request');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Inline styles as JavaScript objects
//   const containerStyle = {
//     position: 'relative',
//     maxWidth: '600px',
//     width: '100%',
//     background: '#fff',
//     padding: '25px',
//     borderRadius: '8px',
//     boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
//     margin: '0 auto',
//     marginTop: '20px',
//   };

//   const headerStyle = {
//     fontSize: '1.5rem',
//     color: '#b33c34',
//     fontWeight: '500',
//     textAlign: 'center',
//     marginBottom: '30px',
//   };

//   const inputBoxStyle = {
//     marginTop: '20px',
//   };

//   const labelStyle = {
//     color: '#333',
//     marginBottom: '8px',
//     display: 'block',
//   };

//   const inputStyle = {
//     position: 'relative',
//     height: '50px',
//     width: '100%',
//     outline: 'none',
//     fontSize: '1rem',
//     color: '#707070',
//     marginTop: '8px',
//     border: '1px solid #ddd',
//     borderRadius: '6px',
//     padding: '0 15px',
//   };

//   const buttonStyle = {
//     height: '55px',
//     width: '100%',
//     color: '#fff',
//     fontSize: '1rem',
//     fontWeight: '400',
//     marginTop: '30px',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     background: 'red',
//     borderRadius: '6px',
//     textAlign: 'center',
//   };

//   const errorStyle = {
//     color: 'red',
//     marginTop: '10px',
//     textAlign: 'center',
//   };

//   return (
//     <div style={containerStyle}>
//       <header style={headerStyle}>Blood Request Form</header>
//       <form onSubmit={handleSubmit}>
//         <div style={inputBoxStyle}>
//           <label htmlFor="blood_group" style={labelStyle}>Blood Group</label>
//           <select
//             id="blood_group"
//             name="blood_group"
//             value={formData.blood_group}
//             onChange={handleChange}
//             style={inputStyle}
//             required
//           >
//             <option value="">Select Blood Group</option>
//             <option value="A+">A+</option>
//             <option value="A-">A-</option>
//             <option value="B+">B+</option>
//             <option value="B-">B-</option>
//             <option value="O+">O+</option>
//             <option value="O-">O-</option>
//             <option value="AB+">AB+</option>
//             <option value="AB-">AB-</option>
//           </select>
//         </div>
//         <div style={inputBoxStyle}>
//           <label htmlFor="units_requested" style={labelStyle}>Units Requested</label>
//           <input
//             type="number"
//             id="units_requested"
//             name="units_requested"
//             value={formData.units_requested}
//             onChange={handleChange}
//             placeholder="Enter units requested"
//             style={inputStyle}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             ...buttonStyle,
//             background: loading ? '#888' : '#ff4547',
//           }}
//         >
//           {loading ? 'Submitting...' : 'Submit Request'}
//         </button>
//         {error && <p style={errorStyle}>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default BloodRequests;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const BloodRequests = () => {
//         const [formData, setFormData] = useState({
//             blood_group: '',
//             units_requested: '',
//             full_name: '',
//             email: '',
//             mobile_no: '',
//             city: '',
//             gender: '' // Gender as radio button
//         });
//         const [loading, setLoading] = useState(false);
//         const [error, setError] = useState('');

//         const handleChange = (e) => {
//             const { name, value } = e.target;
//             setFormData(prevState => ({
//                 ...prevState,
//                 [name]: value,
//             }));
//         };

//         const handleSubmit = async(e) => {
//             e.preventDefault();
//             setLoading(true);

//             const storedUser = JSON.parse(localStorage.getItem('user'));
//             const userId = storedUser ? storedUser.id : null;

//             if (!userId) {
//                 setError('User not found');
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 await axios.post(
//                     'http://localhost:8000/blood-requests/', {
//                         user: userId,
//                         blood_group: formData.blood_group,
//                         units_requested: formData.units_requested,
//                         full_name: formData.full_name,
//                         email: formData.email,
//                         mobile_no: formData.mobile_no,
//                         city: formData.city,
//                         gender: formData.gender,
//                     }, {
//                         withCredentials: true,
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                     }
//                 );
//                 toast.success("Blood request submitted successfully.");
//                 setFormData({
//                     blood_group: '',
//                     units_requested: '',
//                     full_name: '',
//                     email: '',
//                     mobile_no: '',
//                     city: '',
//                     gender: ''
//                 });
//             } catch (error) {
//                 console.error('Failed to submit blood request:', error);
//                 setError('Failed to submit blood request');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         const containerStyle = {
//             maxWidth: '600px',
//             width: '100%',
//             background: '#fff',
//             padding: '25px',
//             borderRadius: '8px',
//             boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
//             margin: '0 auto',
//             marginTop: '20px',
//         };

//         const headerStyle = {
//             fontSize: '1.5rem',
//             color: '#b33c34',
//             fontWeight: '500',
//             textAlign: 'center',
//             marginBottom: '30px',
//         };

//         const formStyle = {
//             display: 'flex',
//             flexDirection: 'column',
//         };

//         const rowStyle = {
//             display: 'flex',
//             justifyContent: 'space-between',
//             gap: '15px',
//             marginBottom: '20px',
//         };

//         const inputBoxStyle = {
//             flex: '1 1 48%',
//             margin: '0 10px',
//         };

//         const labelStyle = {
//             color: '#333',
//             marginBottom: '8px',
//             display: 'block',
//         };

//         const inputStyle = {
//             height: '50px',
//             width: '100%',
//             outline: 'none',
//             fontSize: '1rem',
//             color: '#707070',
//             marginTop: '8px',
//             border: '1px solid #ddd',
//             borderRadius: '6px',
//             padding: '0 15px',
//         };

//         const buttonStyle = {
//             height: '55px',
//             width: '100%',
//             color: '#fff',
//             fontSize: '1rem',
//             fontWeight: '400',
//             marginTop: '30px',
//             border: 'none',
//             cursor: 'pointer',
//             transition: 'all 0.2s ease',
//             background: 'red',
//             borderRadius: '6px',
//             textAlign: 'center',
//         };

//         const errorStyle = {
//             color: 'red',
//             marginTop: '10px',
//             textAlign: 'center',
//         };

//         return ( <
//             div style = { containerStyle } >
//             <
//             header style = { headerStyle } > Blood Request Form < /header> <
//             form onSubmit = { handleSubmit }
//             style = { formStyle } >
//             <
//             div style = { rowStyle } >
//             <
//             div style = { inputBoxStyle } >
//             <
//             label htmlFor = "full_name"
//             style = { labelStyle } > Full Name < /label> <
//             input type = "text"
//             id = "full_name"
//             name = "full_name"
//             value = { formData.full_name }
//             onChange = { handleChange }
//             placeholder = "Enter full name"
//             style = { inputStyle }
//             required /
//             >
//             <
//             /div> <
//             div style = { inputBoxStyle } >
//             <
//             label htmlFor = "email"
//             style = { labelStyle } > Email < /label> <
//             input type = "email"
//             id = "email"
//             name = "email"
//             value = { formData.email }
//             onChange = { handleChange }
//             placeholder = "Enter email"
//             style = { inputStyle }
//             required /
//             >
//             <
//             /div> <
//             /div> <
//             div style = { rowStyle } >
//             <
//             div style = { inputBoxStyle } >
//             <
//             label htmlFor = "units_requested"
//             style = { labelStyle } > Units Requested < /label> <
//             input type = "number"
//             id = "units_requested"
//             name = "units_requested"
//             value = { formData.units_requested }
//             onChange = { handleChange }
//             placeholder = "Enter units requested"
//             style = { inputStyle }
//             required /
//             >
//             <
//             /div> <
//             div style = { inputBoxStyle } >
//             <
//             label htmlFor = "mobile_no"
//             style = { labelStyle } > Mobile Number < /label> <
//             input type = "text"
//             id = "mobile_no"
//             name = "mobile_no"
//             value = { formData.mobile_no }
//             onChange = { handleChange }
//             placeholder = "Enter mobile number"
//             style = { inputStyle }
//             required /
//             >
//             <
//             /div> <
//             /div> <
//             div style = { rowStyle } >
//             <
//             div style = { inputBoxStyle } >
//             <
//             label htmlFor = "blood_group"
//             style = { labelStyle } > Blood Group < /label> <
//             select id = "blood_group"
//             name = "blood_group"
//             value = { formData.blood_group }
//             onChange = { handleChange }
//             style = { inputStyle }
//             required >
//             <
//             option value = "" > Select Blood Group < /option> <
//             option value = "A+" > A + < /option> <
//             option value = "A-" > A - < /option> <
//             option value = "B+" > B + < /option> <
//             option value = "B-" > B - < /option> <
//             option value = "O+" > O + < /option> <
//             option value = "O-" > O - < /option> <
//             option value = "AB+" > AB + < /option> <
//             option value = "AB-" > AB - < /option> <
//             /select> <
//             /div> <
//             div style = { inputBoxStyle } >
//             <
//             label htmlFor = "city"
//             style = { labelStyle } > City < /label> <
//             input type = "text"
//             id = "city"
//             name = "city"
//             value = { formData.city }
//             onChange = { handleChange }
//             placeholder = "Enter city"
//             style = { inputStyle }
//             required /
//             >
//             <
//             /div> <
//             /div> { /* Gender Checkboxes */ } <
//             div style = { rowStyle } >
//             <
//             div style = { inputBoxStyle } >
//             <
//             label style = { labelStyle } > Gender < /label> <
//             div >
//             <
//             label >
//             <
//             input type = "radio"
//             name = "gender"
//             value = "Male"
//             checked = { formData.gender === 'Male' }
//             onChange = { handleChange }
//             required /
//             >
//             Male <
//             /label> <
//             label style = {
//                 { marginLeft: '20px' } } >
//             <
//             input type = "radio"
//             name = "gender"
//             value = "Female"
//             checked = { formData.gender === 'Female' }
//             onChange = { handleChange }
//             required /
//             >
//             Female <
//             /label> <
//             label style = {
//                 { marginLeft: '20px' } } >
//             <
//             input type = "radio"
//             name = "gender"
//             value = "Other"
//             checked = { formData.gender === 'Other' }
//             onChange = { handleChange }
//             required /
//             >
//             Other <
//             /label> <
//             /div> <
//             /div> <
//             /div>

//             <
//             button type = "submit"
//             style = { buttonStyle }
//             disabled = { loading } > { loading ? 'Submitting...' : 'Submit Request' } <
//             /button>

//             {
//                 error && < div style = { errorStyle } > { error } < /div>} <
//                     /form> <
//                     /div>
//             );
//         };

//         export default BloodRequests;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const BloodRequests = () => {
//     const [formData, setFormData] = useState({
//         blood_group: '',
//         units_requested: '',
//         full_name: '',
//         email: '',
//         mobile_no: '',
//         city: '',
//         gender: '' // Gender as radio button
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         const userId = storedUser ? storedUser.id : null;

//         if (!userId) {
//             setError('User not found');
//             setLoading(false);
//             return;
//         }

//         try {
//             await axios.post(
//                 'http://localhost:8000/blood-requests/',
//                 {
//                     user: userId,
//                     blood_group: formData.blood_group,
//                     units_requested: formData.units_requested,
//                     full_name: formData.full_name,
//                     email: formData.email,
//                     mobile_no: formData.mobile_no,
//                     city: formData.city,
//                     gender: formData.gender,
//                 },
//                 {
//                     withCredentials: true,
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 }
//             );
//             toast.success("Blood request submitted successfully.");
//             setFormData({
//                 blood_group: '',
//                 units_requested: '',
//                 full_name: '',
//                 email: '',
//                 mobile_no: '',
//                 city: '',
//                 gender: ''
//             });
//         } catch (error) {
//             console.error('Failed to submit blood request:', error);
//             setError('Failed to submit blood request');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const containerStyle = {
//         maxWidth: '600px',
//         width: '100%',
//         background: '#fff',
//         padding: '25px',
//         borderRadius: '8px',
//         boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
//         margin: '0 auto',
//         marginTop: '20px',
//     };

//     const headerStyle = {
//         fontSize: '1.5rem',
//         color: '#b33c34',
//         fontWeight: '500',
//         textAlign: 'center',
//         marginBottom: '30px',
//     };

//     const formStyle = {
//         display: 'flex',
//         flexDirection: 'column',
//     };

//     const rowStyle = {
//         display: 'flex',
//         justifyContent: 'space-between',
//         gap: '15px',
//         marginBottom: '20px',
//     };

//     const inputBoxStyle = {
//         flex: '1 1 48%',
//         margin: '0 10px',
//     };

//     const labelStyle = {
//         color: '#333',
//         marginBottom: '8px',
//         display: 'block',
//     };

//     const inputStyle = {
//         height: '50px',
//         width: '100%',
//         outline: 'none',
//         fontSize: '1rem',
//         color: '#707070',
//         marginTop: '8px',
//         border: '1px solid #ddd',
//         borderRadius: '6px',
//         padding: '0 15px',
//     };

//     const buttonStyle = {
//         height: '55px',
//         width: '100%',
//         color: '#fff',
//         fontSize: '1rem',
//         fontWeight: '400',
//         marginTop: '30px',
//         border: 'none',
//         cursor: 'pointer',
//         transition: 'all 0.2s ease',
//         background: 'red',
//         borderRadius: '6px',
//         textAlign: 'center',
//     };

//     const errorStyle = {
//         color: 'red',
//         marginTop: '10px',
//         textAlign: 'center',
//     };

//     return (
//         <div style={containerStyle}>
//             <header style={headerStyle}>Blood Request Form</header>
//             <form onSubmit={handleSubmit} style={formStyle}>
//                 <div style={rowStyle}>
//                     <div style={inputBoxStyle}>
//                         <label htmlFor="full_name" style={labelStyle}>Full Name</label>
//                         <input
//                             type="text"
//                             id="full_name"
//                             name="full_name"
//                             value={formData.full_name}
//                             onChange={handleChange}
//                             placeholder="Enter full name"
//                             style={inputStyle}
//                             required
//                         />
//                     </div>
//                     <div style={inputBoxStyle}>
//                         <label htmlFor="email" style={labelStyle}>Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Enter email"
//                             style={inputStyle}
//                             required
//                         />
//                     </div>
//                 </div>
//                 <div style={rowStyle}>
//                     <div style={inputBoxStyle}>
//                         <label htmlFor="units_requested" style={labelStyle}>Units Requested</label>
//                         <input
//                             type="number"
//                             id="units_requested"
//                             name="units_requested"
//                             value={formData.units_requested}
//                             onChange={handleChange}
//                             placeholder="Enter units requested"
//                             style={inputStyle}
//                             required
//                         />
//                     </div>
//                     <div style={inputBoxStyle}>
//                         <label htmlFor="mobile_no" style={labelStyle}>Mobile Number</label>
//                         <input
//                             type="text"
//                             id="mobile_no"
//                             name="mobile_no"
//                             value={formData.mobile_no}
//                             onChange={handleChange}
//                             placeholder="Enter mobile number"
//                             style={inputStyle}
//                             required
//                         />
//                     </div>
//                 </div>
//                 <div style={rowStyle}>
//                     <div style={inputBoxStyle}>
//                         <label htmlFor="blood_group" style={labelStyle}>Blood Group</label>
//                         <select
//                             id="blood_group"
//                             name="blood_group"
//                             value={formData.blood_group}
//                             onChange={handleChange}
//                             style={inputStyle}
//                             required
//                         >
//                             <option value="">Select Blood Group</option>
//                             <option value="A+">A+</option>
//                             <option value="A-">A-</option>
//                             <option value="B+">B+</option>
//                             <option value="B-">B-</option>
//                             <option value="O+">O+</option>
//                             <option value="O-">O-</option>
//                             <option value="AB+">AB+</option>
//                             <option value="AB-">AB-</option>
//                         </select>
//                     </div>
//                     <div style={inputBoxStyle}>
//                         <label htmlFor="city" style={labelStyle}>City</label>
//                         <input
//                             type="text"
//                             id="city"
//                             name="city"
//                             value={formData.city}
//                             onChange={handleChange}
//                             placeholder="Enter city"
//                             style={inputStyle}
//                             required
//                         />
//                     </div>
//                 </div>
//                 <div style={rowStyle}>
//                     <div style={inputBoxStyle}>
//                         <label style={labelStyle}>Gender</label>
//                         <div>
//                             <label>
//                                 <input
//                                     type="radio"
//                                     name="gender"
//                                     value="Male"
//                                     checked={formData.gender === 'Male'}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 Male
//                             </label>
//                             <label style={{ marginLeft: '20px' }}>
//                                 <input
//                                     type="radio"
//                                     name="gender"
//                                     value="Female"
//                                     checked={formData.gender === 'Female'}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 Female
//                             </label>
//                             <label style={{ marginLeft: '20px' }}>
//                                 <input
//                                     type="radio"
//                                     name="gender"
//                                     value="Other"
//                                     checked={formData.gender === 'Other'}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 Other
//                             </label>
//                         </div>
//                     </div>
//                 </div>
//                 <button type="submit" style={buttonStyle} disabled={loading}>
//                     {loading ? 'Submitting...' : 'Submit Request'}
//                 </button>
//                 {error && <div style={errorStyle}>{error}</div>}
//             </form>
//         </div>
//     );
// };

// export default BloodRequests;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const BloodRequests = () => {
        const [formData, setFormData] = useState({
            blood_group: '',
            units_requested: '',
            full_name: '',
            email: '',
            mobile_no: '',
            city: '',
            gender: ''
        });
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState('');

        // Prefill user data after the component mounts
        useEffect(() => {
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser) {
                const { first_name, last_name, blood_group, mobile_no, email } = storedUser;
                setFormData(prevState => ({
                    ...prevState,
                    full_name: `${first_name} ${last_name}`,
                    blood_group: blood_group || '',
                    mobile_no: mobile_no || '',
                    email: email || ''
                }));
            }
        }, []);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        };

        const handleSubmit = async(e) => {
            e.preventDefault();
            setLoading(true);

            const storedUser = JSON.parse(localStorage.getItem('user'));
            const userId = storedUser ? storedUser.id : null;

            if (!userId) {
                setError('User not found');
                setLoading(false);
                return;
            }

            try {
                await axios.post(
                    'http://localhost:8000/blood-requests/', {
                        user: userId,
                        blood_group: formData.blood_group,
                        units_requested: formData.units_requested,
                        full_name: formData.full_name,
                        email: formData.email,
                        mobile_no: formData.mobile_no,
                        city: formData.city,
                        gender: formData.gender,
                    }, {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                toast.success("Blood request submitted successfully.");
                setFormData({
                    blood_group: '',
                    units_requested: '',
                    full_name: '',
                    email: '',
                    mobile_no: '',
                    city: '',
                    gender: ''
                });
            } catch (error) {
                console.error('Failed to submit blood request:', error);
                setError('Failed to submit blood request');
            } finally {
                setLoading(false);
            }
        };

        const containerStyle = {
            maxWidth: '600px',
            width: '100%',
            background: '#fff',
            padding: '25px',
            borderRadius: '8px',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
            margin: '0 auto',
            marginTop: '20px',
        };

        const headerStyle = {
            fontSize: '1.5rem',
            color: '#b33c34',
            fontWeight: '500',
            textAlign: 'center',
            marginBottom: '30px',
        };

        const formStyle = {
            display: 'flex',
            flexDirection: 'column',
        };

        const rowStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '15px',
            marginBottom: '20px',
        };

        const inputBoxStyle = {
            flex: '1 1 48%',
            margin: '0 10px',
        };

        const labelStyle = {
            color: '#333',
            marginBottom: '8px',
            display: 'block',
        };

        const inputStyle = {
            height: '50px',
            width: '100%',
            outline: 'none',
            fontSize: '1rem',
            color: '#707070',
            marginTop: '8px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            padding: '0 15px',
        };

        const buttonStyle = {
            height: '55px',
            width: '100%',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: '400',
            marginTop: '30px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            background: 'red',
            borderRadius: '6px',
            textAlign: 'center',
        };

        const errorStyle = {
            color: 'red',
            marginTop: '10px',
            textAlign: 'center',
        };

        return ( <
            div style = { containerStyle } >
            <
            header style = { headerStyle } > Blood Request Form < /header> <
            form onSubmit = { handleSubmit }
            style = { formStyle } >
            <
            div style = { rowStyle } >
            <
            div style = { inputBoxStyle } >
            <
            label htmlFor = "full_name"
            style = { labelStyle } > Full Name < /label> <
            input type = "text"
            id = "full_name"
            name = "full_name"
            value = { formData.full_name }
            onChange = { handleChange }
            placeholder = "Enter full name"
            style = { inputStyle }
            required /
            >
            <
            /div> <
            div style = { inputBoxStyle } >
            <
            label htmlFor = "email"
            style = { labelStyle } > Email < /label> <
            input type = "email"
            id = "email"
            name = "email"
            value = { formData.email }
            onChange = { handleChange }
            placeholder = "Enter email"
            style = { inputStyle }
            required /
            >
            <
            /div> <
            /div> <
            div style = { rowStyle } >
            <
            div style = { inputBoxStyle } >
            <
            label htmlFor = "units_requested"
            style = { labelStyle } > Units Requested < /label> <
            input type = "number"
            id = "units_requested"
            name = "units_requested"
            value = { formData.units_requested }
            onChange = { handleChange }
            placeholder = "Enter units requested"
            style = { inputStyle }
            required /
            >
            <
            /div> <
            div style = { inputBoxStyle } >
            <
            label htmlFor = "mobile_no"
            style = { labelStyle } > Mobile Number < /label> <
            input type = "text"
            id = "mobile_no"
            name = "mobile_no"
            value = { formData.mobile_no }
            onChange = { handleChange }
            placeholder = "Enter mobile number"
            style = { inputStyle }
            required /
            >
            <
            /div> <
            /div> <
            div style = { rowStyle } >
            <
            div style = { inputBoxStyle } >
            <
            label htmlFor = "blood_group"
            style = { labelStyle } > Blood Group < /label> <
            select id = "blood_group"
            name = "blood_group"
            value = { formData.blood_group }
            onChange = { handleChange }
            style = { inputStyle }
            required >
            <
            option value = "" > Select Blood Group < /option> <
            option value = "A+" > A + < /option> <
            option value = "A-" > A - < /option> <
            option value = "B+" > B + < /option> <
            option value = "B-" > B - < /option> <
            option value = "O+" > O + < /option> <
            option value = "O-" > O - < /option> <
            option value = "AB+" > AB + < /option> <
            option value = "AB-" > AB - < /option> <
            /select> <
            /div> <
            div style = { inputBoxStyle } >
            <
            label htmlFor = "city"
            style = { labelStyle } > City < /label> <
            input type = "text"
            id = "city"
            name = "city"
            value = { formData.city }
            onChange = { handleChange }
            placeholder = "Enter city"
            style = { inputStyle }
            required /
            >
            <
            /div> <
            /div> <
            div style = { rowStyle } >
            <
            div style = { inputBoxStyle } >
            <
            label style = { labelStyle } > Gender < /label> <
            div >
            <
            label >
            <
            input type = "radio"
            name = "gender"
            value = "Male"
            checked = { formData.gender === 'Male' }
            onChange = { handleChange }
            required /
            >
            Male <
            /label> <
            label style = {
                { marginLeft: '20px' } } >
            <
            input type = "radio"
            name = "gender"
            value = "Female"
            checked = { formData.gender === 'Female' }
            onChange = { handleChange }
            required /
            >
            Female <
            /label> <
            label style = {
                { marginLeft: '20px' } } >
            <
            input type = "radio"
            name = "gender"
            value = "Other"
            checked = { formData.gender === 'Other' }
            onChange = { handleChange }
            required /
            >
            Other <
            /label> <
            /div> <
            /div> <
            /div> <
            button type = "submit"
            style = { buttonStyle }
            disabled = { loading } > { loading ? 'Submitting...' : 'Submit Request' } <
            /button> {
                error && < div style = { errorStyle } > { error } < /div>} <
                    /form> <
                    /div>
            );
        };

        export default BloodRequests;