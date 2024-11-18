import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        try {
            // Clear local storage or other session-related data
            localStorage.removeItem('username'); // Adjust if needed

            // Optionally clear other session data here
            // localStorage.removeItem('otherDataKey'); 

            // Display a success message
            toast.success("Logout Successfully");

            // Redirect to the home page
            navigate('/');
        } catch (error) {
            // Handle errors if necessary
            toast.error("Logout failed. Please try again.");
            console.error("Logout error:", error);
        }
    }, [navigate]);

    return null; // No UI needed
};

export default Logout;