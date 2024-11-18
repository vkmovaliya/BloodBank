import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UserProfile.css';
import defaultImage from '../images/default.jpg'; // Import a default image
import { toast } from 'react-toastify';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile_no: '',
        blood_group: '',
        birthdate: '',
        image: null,
    });
    const [imagePreview, setImagePreview] = useState(defaultImage); // State for image preview

    useEffect(() => {
        const fetchUserData = async() => {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            const username = storedUser ? storedUser.username : null;

            if (!username) {
                setError('No username found');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8000/user-profile/${username}/`, {
                    withCredentials: true,
                });
                setUser(response.data);
                setFormData({
                    first_name: response.data.first_name || '',
                    last_name: response.data.last_name || '',
                    email: response.data.email || '',
                    mobile_no: response.data.mobile_no || '',
                    blood_group: response.data.blood_group || '',
                    birthdate: response.data.birthdate || '',
                    image: null,
                });
                setImagePreview(response.data.image ? `http://localhost:8000${response.data.image}` : defaultImage); // Set initial image preview
            } catch (error) {
                setError('Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            const file = files[0];
            setFormData(prevState => ({
                ...prevState,
                [name]: file,
            }));
            setImagePreview(URL.createObjectURL(file)); // Update image preview
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const username = storedUser ? storedUser.username : null;

        const formDataToSend = new FormData();
        for (const key in formData) {
            if (formData[key] !== null) { // Avoid appending null values
                formDataToSend.append(key, formData[key]);
            }
        }

        try {
            const response = await axios.patch(
                `http://localhost:8000/user-profile/${username}/`,
                formDataToSend, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data', // Use multipart/form-data for file uploads
                    },
                }
            );
            setUser(response.data);
            toast.success("Edit Successfully");
            setIsEditing(false);
        } catch (error) {
            setError('Failed to update user data');
        }
    };

    if (loading) return <p > Loading... < /p>;
    if (error) return <p > { error } < /p>;
    if (!user) return <p > No user data available < /p>;

    return ( <
        div className = "page-content" >
        <
        div className = "user-card-full" >
        <
        div className = "row m-l-0 m-r-0" >
        <
        div className = "col-sm-4 bg-c-lite-green user-profile" >
        <
        div className = "card-block text-center text-white" >
        <
        div className = "m-b-25" >
        <
        img src = { imagePreview }
        className = "img-radius"
        alt = "User-Profile" /
        >
        <
        /div> <
        h6 className = "f-w-600"
        style = {
            { marginTop: '10px', fontSize: '20px' } } > {
            isEditing ? ( <
                input type = "text"
                name = "first_name"
                value = { formData.first_name }
                onChange = { handleChange }
                className = "form-control"
                placeholder = 'First Name' /
                >
            ) : ( <
                p className = "value"
                style = {
                    { color: 'white' } } > { user.first_name || 'N/A' } < /p>
            )
        } <
        /h6> <
        h6 className = "f-w-600"
        style = {
            { marginTop: '10px', fontSize: '20px' } } > {
            isEditing ? ( <
                input type = "text"
                name = "last_name"
                value = { formData.last_name }
                onChange = { handleChange }
                className = "form-control"
                placeholder = 'Last Name' /
                >
            ) : ( <
                p className = "value"
                style = {
                    { color: 'white' } } > { user.last_name || 'N/A' } < /p>
            )
        } <
        /h6> <
        /div> <
        /div> <
        div className = "col-sm-8" >
        <
        div className = "card-block" >
        <
        h6 className = "m-b-20 p-b-5 b-b-default f-w-600"
        style = {
            { fontSize: '30px' } } > Information < /h6> <
        hr className = "separator" / >
        <
        form onSubmit = { handleSubmit } >
        <
        div className = "line-item" >
        <
        p className = "label" > Email: < /p> {
            isEditing ? ( <
                input type = "email"
                name = "email"
                value = { formData.email }
                onChange = { handleChange }
                className = "form-control" /
                >
            ) : ( <
                p className = "value" > { user.email || 'N/A' } < /p>
            )
        } <
        /div> <
        div className = "line-item" >
        <
        p className = "label" > Phone: < /p> {
            isEditing ? ( <
                input type = "text"
                name = "mobile_no"
                value = { formData.mobile_no }
                onChange = { handleChange }
                className = "form-control" /
                >
            ) : ( <
                p className = "value" > { user.mobile_no || 'N/A' } < /p>
            )
        } <
        /div> <
        div className = "line-item" >
        <
        p className = "label" > BG: < /p> {
            isEditing ? ( <
                select name = "blood_group"
                value = { formData.blood_group }
                onChange = { handleChange }
                className = "form-control" >
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
                /select>
            ) : ( <
                p className = "value" > { user.blood_group || 'N/A' } < /p>
            )
        } <
        /div> <
        div className = "line-item" >
        <
        p className = "label" > Birthdate: < /p> {
            isEditing ? ( <
                input type = "date"
                name = "birthdate"
                value = { formData.birthdate }
                onChange = { handleChange }
                className = "form-control" /
                >
            ) : ( <
                p className = "value" > { user.birthdate || 'N/A' } < /p>
            )
        } <
        /div> {
            isEditing && ( <
                div className = "line-item" >
                <
                p className = "label" > Profile: < /p> <
                input type = "file"
                name = "image"
                onChange = { handleChange }
                className = "form-control" /
                >
                <
                /div>
            )
        } {
            isEditing && ( <
                div className = "button-container" >
                <
                button type = "submit"
                className = "btn btn-danger" > Save Changes < /button> <
                /div>
            )
        } <
        /form> {
            !isEditing && ( <
                div className = "button-container" >
                <
                button className = "btn btn-danger"
                onClick = { handleEditClick } > Edit < /button> <
                /div>
            )
        } <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default UserProfile;