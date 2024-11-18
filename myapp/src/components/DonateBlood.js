// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// // import '../styles/DonateBlood.css'; // Assuming the CSS file is named DonateBlood.css

// const DonateBlood = () => {
//   const [formData, setFormData] = useState({
//     user: '',
//     blood_group: '',
//     units_donated: '',
//     donation_date: '',
//     age: '',
//     weight: '',
//     gender: '',
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
//         'http://localhost:8000/blood-donate/',
//         {
//           user: userId,
//           donation_date: formData.donation_date,
//           blood_group: formData.blood_group,
//           units_donated: formData.units_donated,
//           age: formData.age,
//           weight: formData.weight,
//           gender: formData.gender,
//           status: "pending"
//         },
//         {
//           withCredentials: true,
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       toast.success("Blood donation recorded successfully.");
//       setFormData({
//         user: userId,
//         blood_group: '',
//         units_donated: '',
//         donation_date: '',
//         age: '',
//         weight: '',
//         gender: '',
//       });
//     } catch (error) {
//       console.error('Failed to record blood donation:', error);
//       setError('Failed to record blood donation');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="container">
//       <header>Blood Donation Form</header>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="input-box">
//           <label htmlFor="blood_group">Blood Group</label>
//           <select
//             id="blood_group"
//             name="blood_group"
//             value={formData.blood_group}
//             onChange={handleChange}
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
//         <div className="input-box">
//           <label htmlFor="units_donated">Units Donated</label>
//           <input
//             type="number"
//             id="units_donated"
//             name="units_donated"
//             value={formData.units_donated}
//             onChange={handleChange}
//             placeholder="Enter units donated"
//             required
//           />
//         </div>
//         <div className="input-box">
//           <label htmlFor="donation_date">Date</label>
//           <input
//             type="date"
//             id="donation_date"
//             name="donation_date"
//             value={formData.donation_date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="column">
//           <div className="input-box">
//             <label htmlFor="age">Age</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               placeholder="Enter age"
//               required
//             />
//           </div>
//           <div className="input-box">
//             <label htmlFor="weight">Weight (kg)</label>
//             <input
//               type="number"
//               id="weight"
//               name="weight"
//               value={formData.weight}
//               onChange={handleChange}
//               placeholder="Enter weight"
//               required
//             />
//           </div>
//         </div>
//         <div className="gender-box">
//           <h3>Gender</h3>
//           <div className="gender-option">
//             <div className="gender">
//               <input
//                 type="radio"
//                 id="check-male"
//                 name="gender"
//                 value="male"
//                 checked={formData.gender === 'male'}
//                 onChange={handleChange}
//                 required
//               />
//               <label htmlFor="check-male">Male</label>
//             </div>
//             <div className="gender">
//               <input
//                 type="radio"
//                 id="check-female"
//                 name="gender"
//                 value="female"
//                 checked={formData.gender === 'female'}
//                 onChange={handleChange}
//               />
//               <label htmlFor="check-female">Female</label>
//             </div>
//           </div>
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? 'Submitting...' : 'Submit'}
//         </button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </section>
//   );
// };

// export default DonateBlood;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify'; // Ensure you have react-toastify installed

// const DonateBlood = () => {
//   const [formData, setFormData] = useState({
//     user: '',
//     blood_group: '',
//     units_donated: '',
//     donation_date: '',
//     age: '',
//     weight: '',
//     gender: '',
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
//         'http://localhost:8000/blood-donate/',
//         {
//           user: userId,
//           donation_date: formData.donation_date,
//           blood_group: formData.blood_group,
//           units_donated: formData.units_donated,
//           age: formData.age,
//           weight: formData.weight,
//           gender: formData.gender,
//           status: "pending"
//         },
//         {
//           withCredentials: true,
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       toast.success("Blood donation recorded successfully.");
//       setFormData({
//         user: userId,
//         blood_group: '',
//         units_donated: '',
//         donation_date: '',
//         age: '',
//         weight: '',
//         gender: '',
//       });
//     } catch (error) {
//       console.error('Failed to record blood donation:', error);
//       setError('Failed to record blood donation');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="container mx-auto p-6 bg-white rounded-lg shadow-md">
//       <header className="text-2xl font-semibold mb-4 text-center">Blood Donation Form</header>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           <label htmlFor="blood_group" className="mb-2 font-medium">Blood Group</label>
//           <select
//             id="blood_group"
//             name="blood_group"
//             value={formData.blood_group}
//             onChange={handleChange}
//             className="border rounded-lg p-2"
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
//         <div className="flex flex-col">
//           <label htmlFor="units_donated" className="mb-2 font-medium">Units Donated</label>
//           <input
//             type="number"
//             id="units_donated"
//             name="units_donated"
//             value={formData.units_donated}
//             onChange={handleChange}
//             placeholder="Enter units donated"
//             className="border rounded-lg p-2"
//             required
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="donation_date" className="mb-2 font-medium">Date</label>
//           <input
//             type="date"
//             id="donation_date"
//             name="donation_date"
//             value={formData.donation_date}
//             onChange={handleChange}
//             className="border rounded-lg p-2"
//             required
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="flex flex-col">
//             <label htmlFor="age" className="mb-2 font-medium">Age</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               placeholder="Enter age"
//               className="border rounded-lg p-2"
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="weight" className="mb-2 font-medium">Weight (kg)</label>
//             <input
//               type="number"
//               id="weight"
//               name="weight"
//               value={formData.weight}
//               onChange={handleChange}
//               placeholder="Enter weight"
//               className="border rounded-lg p-2"
//               required
//             />
//           </div>
//         </div>
//         <div className="flex flex-col mb-4">
//           <label className="mb-2 font-medium">Gender</label>
//           <div className="flex items-center mb-2">
//             <input
//               type="radio"
//               id="check-male"
//               name="gender"
//               value="male"
//               checked={formData.gender === 'male'}
//               onChange={handleChange}
//               className="mr-2"
//               required
//             />
//             <label htmlFor="check-male">Male</label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="radio"
//               id="check-female"
//               name="gender"
//               value="female"
//               checked={formData.gender === 'female'}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <label htmlFor="check-female">Female</label>
//           </div>
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
//         >
//           {loading ? 'Submitting...' : 'Submit'}
//         </button>
//         {error && <p className="text-red-500 text-center mt-2">{error}</p>}
//       </form>
//     </section>
//   );
// };

// export default DonateBlood;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const DonateBlood = () => {
//   const [formData, setFormData] = useState({
//     user: '',
//     blood_group: '',
//     units_donated: '',
//     donation_date: '',
//     age: '',
//     weight: '',
//     gender: '',
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
//         'http://localhost:8000/blood-donate/',
//         {
//           user: userId,
//           donation_date: formData.donation_date,
//           blood_group: formData.blood_group,
//           units_donated: formData.units_donated,
//           age: formData.age,
//           weight: formData.weight,
//           gender: formData.gender,
//           status: "pending"
//         },
//         {
//           withCredentials: true,
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       toast.success("Blood donation recorded successfully.");
//       setFormData({
//         user: userId,
//         blood_group: '',
//         units_donated: '',
//         donation_date: '',
//         age: '',
//         weight: '',
//         gender: '',
//       });
//     } catch (error) {
//       console.error('Failed to record blood donation:', error);
//       setError('Failed to record blood donation');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Inline styles as JavaScript objects
//   const containerStyle = {
//     position: 'relative',
//     maxWidth: '600px', // Medium size
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
//     color: '#b33c34', // Blood bank related color
//     fontWeight: '500',
//     textAlign: 'center',
//     marginBottom: '30px',
//   };

//   const inputBoxStyle = {
//     marginTop: '0px',
//   };

//   const labelStyle = {
//     color: '#333',
//     marginBottom: '0px',
//     display: 'block',
//     marginTop: '10px'
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
//     background: 'red', // Changed to red
//     borderRadius: '6px',
//     textAlign: 'center',
//   };

//   const errorStyle = {
//     color: 'red',
//     marginTop: '10px',
//     textAlign: 'center',
//   };

//   const horizontalGroupStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     gap: '15px',
//     marginBottom: '20px',
//   };

//   const genderGroupStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px',
//     marginBottom: '20px',
//   };

//   const genderLabelStyle = {
//     marginRight: '15px', // Space between label and radio buttons
//   };

//   return (
//     <div style={containerStyle}>
//       <header style={headerStyle}>Blood Donation Form</header>
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
//         <div style={horizontalGroupStyle}>
//           <div style={{ width: '48%' }}>
//             <label htmlFor="units_donated" style={labelStyle}>Units Donated</label>
//             <input
//               type="number"
//               id="units_donated"
//               name="units_donated"
//               value={formData.units_donated}
//               onChange={handleChange}
//               placeholder="Enter units donated"
//               style={{ ...inputStyle, marginTop: '10px' }} // Ensure top margin is uniform
//               required
//             />
//           </div>
//           <div style={{ width: '48%' }}>
//             <label htmlFor="donation_date" style={labelStyle}>Date</label>
//             <input
//               type="date"
//               id="donation_date"
//               name="donation_date"
//               value={formData.donation_date}
//               onChange={handleChange}
//               style={{ ...inputStyle, marginTop: '10px' }} // Ensure top margin is uniform
//               required
//             />
//           </div>
//         </div>
//         <div style={horizontalGroupStyle}>
//           <div style={{ width: '48%' }}>
//             <label htmlFor="age" style={labelStyle}>Age</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               placeholder="Enter age"
//               style={{ ...inputStyle, marginTop: '10px' }} // Ensure top margin is uniform
//               required
//             />
//           </div>
//           <div style={{ width: '48%' }}>
//             <label htmlFor="weight" style={labelStyle}>Weight (kg)</label>
//             <input
//               type="number"
//               id="weight"
//               name="weight"
//               value={formData.weight}
//               onChange={handleChange}
//               placeholder="Enter weight"
//               style={{ ...inputStyle, marginTop: '10px' }} // Ensure top margin is uniform
//               required
//             />
//           </div>
//         </div>
//         <div style={genderGroupStyle}>
//           <label style={genderLabelStyle}>Gender: </label>
//           <div>
//             <input
//               type="radio"
//               id="check-male"
//               name="gender"
//               value="male"
//               checked={formData.gender === 'male'}
//               onChange={handleChange}
//               style={{ marginRight: '10px' }}
//               required
//             />
//             <label htmlFor="check-male">Male</label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               id="check-female"
//               name="gender"
//               value="female"
//               checked={formData.gender === 'female'}
//               onChange={handleChange}
//               style={{ marginRight: '10px' }}
//             />
//             <label htmlFor="check-female">Female</label>
//           </div>
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             ...buttonStyle,
//             background: loading ? '#d9534f' : '#ff4547', // Changed to red
//           }}
//         >
//           {loading ? 'Submitting...' : 'Submit'}
//         </button>
//         {error && <p style={errorStyle}>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default DonateBlood;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DonateBlood = () => {
        const [formData, setFormData] = useState({
            user: '',
            blood_group: '',
            units_donated: '',
            donation_date: '',
            age: '',
            weight: '',
            gender: '',
        });
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState('');

        // Load user data from localStorage when the component mounts
        useEffect(() => {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                setFormData(prevState => ({
                    ...prevState,
                    user: storedUser.id,
                    blood_group: storedUser.blood_group, // Pre-fill the blood group
                }));
            } else {
                setError('User not found');
            }
        }, []);

        // Get today's date in the format 'YYYY-MM-DD' to restrict past dates
        const getCurrentDate = () => {
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const dd = String(today.getDate()).padStart(2, '0');
            return `${yyyy}-${mm}-${dd}`;
        };

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
                    'http://localhost:8000/blood-donate/', {
                        user: userId,
                        donation_date: formData.donation_date,
                        blood_group: formData.blood_group,
                        units_donated: formData.units_donated,
                        age: formData.age,
                        weight: formData.weight,
                        gender: formData.gender,
                        status: 'pending',
                    }, {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                toast.success('Blood donation recorded successfully.');
                setFormData({
                    user: userId,
                    blood_group: storedUser.blood_group, // Keep blood group unchanged
                    units_donated: '',
                    donation_date: '',
                    age: '',
                    weight: '',
                    gender: '',
                });
            } catch (error) {
                console.error('Failed to record blood donation:', error);
                setError('Failed to record blood donation');
            } finally {
                setLoading(false);
            }
        };

        const containerStyle = {
            position: 'relative',
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

        const inputBoxStyle = {
            marginTop: '0px',
        };

        const labelStyle = {
            color: '#333',
            marginBottom: '0px',
            display: 'block',
            marginTop: '10px',
        };

        const inputStyle = {
            position: 'relative',
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

        const horizontalGroupStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '15px',
            marginBottom: '20px',
        };

        const genderGroupStyle = {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '20px',
        };

        const genderLabelStyle = {
            marginRight: '15px',
        };

        return ( <
            div style = { containerStyle } >
            <
            header style = { headerStyle } > Blood Donation Form < /header> <
            form onSubmit = { handleSubmit } >
            <
            div style = { inputBoxStyle } >
            <
            label htmlFor = "blood_group"
            style = { labelStyle } > Blood Group < /label> <
            input type = "text"
            id = "blood_group"
            name = "blood_group"
            value = { formData.blood_group }
            readOnly // Make the field read-only
            style = { inputStyle }
            required /
            >
            <
            /div> <
            div style = { horizontalGroupStyle } >
            <
            div style = {
                { width: '48%' } } >
            <
            label htmlFor = "units_donated"
            style = { labelStyle } > Units Donated < /label> <
            input type = "number"
            id = "units_donated"
            name = "units_donated"
            value = { formData.units_donated }
            onChange = { handleChange }
            placeholder = "Enter units donated"
            style = { inputStyle }
            required /
            >
            <
            /div> <
            div style = {
                { width: '48%' } } >
            <
            label htmlFor = "donation_date"
            style = { labelStyle } > Date < /label> <
            input type = "date"
            id = "donation_date"
            name = "donation_date"
            value = { formData.donation_date }
            onChange = { handleChange }
            style = { inputStyle }
            min = { getCurrentDate() } // Prevent past dates
            required /
            >
            <
            /div> <
            /div> <
            div style = { horizontalGroupStyle } >
            <
            div style = {
                { width: '48%' } } >
            <
            label htmlFor = "age"
            style = { labelStyle } > Age < /label> <
            input type = "number"
            id = "age"
            name = "age"
            value = { formData.age }
            onChange = { handleChange }
            placeholder = "Enter age"
            style = { inputStyle }
            required /
            >
            <
            /div> <
            div style = {
                { width: '48%' } } >
            <
            label htmlFor = "weight"
            style = { labelStyle } > Weight(kg) < /label> <
            input type = "number"
            id = "weight"
            name = "weight"
            value = { formData.weight }
            onChange = { handleChange }
            placeholder = "Enter weight"
            style = { inputStyle }
            required /
            >
            <
            /div> <
            /div> <
            div style = { genderGroupStyle } >
            <
            label style = { genderLabelStyle } > Gender: < /label> <
            div >
            <
            input type = "radio"
            id = "check-male"
            name = "gender"
            value = "male"
            checked = { formData.gender === 'male' }
            onChange = { handleChange }
            required /
            >
            <
            label htmlFor = "check-male" > Male < /label> <
            /div> <
            div >
            <
            input type = "radio"
            id = "check-female"
            name = "gender"
            value = "female"
            checked = { formData.gender === 'female' }
            onChange = { handleChange }
            /> <
            label htmlFor = "check-female" > Female < /label> <
            /div> <
            /div> <
            button type = "submit"
            disabled = { loading }
            style = {
                {
                    ...buttonStyle,
                    background: loading ? '#d9534f' : '#ff4547',
                }
            } >
            { loading ? 'Submitting...' : 'Submit' } <
            /button> {
                error && < p style = { errorStyle } > { error } < /p>} <
                    /form> <
                    /div>
            );
        };

        export default DonateBlood;