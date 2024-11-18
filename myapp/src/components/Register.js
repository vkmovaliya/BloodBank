import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHome, FaUser } from "react-icons/fa"; // Importing icons

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async(event) => {
        event.preventDefault();

        if (password !== passwordConfirmation) {
            setMessage("Passwords do not match");
            setIsError(true);
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/signup/", {
                username,
                email,
                password,
                bloodGroup,
            });

            setMessage("Registration successful");
            setIsError(false);
            localStorage.setItem("username", username);

            toast.success("Registered Successfully");
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.data) {
                const errorMsg =
                    error.response.data.username || error.response.data.email || "Registration failed";
                toast.error(errorMsg);
                setMessage(errorMsg);
            } else {
                toast.error("Registration failed");
                setMessage("Registration failed");
            }
            setIsError(true);
        }
    };

    return ( <
        div >
        <
        section className = "register py-5"
        style = {
            {
                marginTop: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f8f9fa",
            }
        } >
        <
        div className = "container py-xl-5 py-lg-3"
        style = {
            { maxWidth: "500px" } } >
        <
        div className = "card"
        style = {
            {
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
            }
        } >
        <
        div className = "title-section mb-md-4 mb-2 text-center" >
        <
        h3 className = "w3ls-title text-uppercase text-danger font-weight-bold" >
        Register <
        /h3> <
        /div> <
        form onSubmit = { handleRegister } >
        <
        div className = "form-group" >
        <
        input type = "text"
        id = "username"
        className = "form-control"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value) }
        placeholder = "Username"
        required style = {
            { borderRadius: "4px" } }
        /> <
        /div> <
        div className = "form-group" >
        <
        input type = "email"
        id = "email"
        className = "form-control"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        placeholder = "Email"
        required style = {
            { borderRadius: "4px" } }
        /> <
        /div> <
        div className = "form-group" >
        <
        input type = "password"
        id = "password"
        className = "form-control"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        placeholder = "Password"
        required style = {
            { borderRadius: "4px" } }
        /> <
        /div> <
        div className = "form-group" >
        <
        input type = "password"
        id = "password_confirmation"
        className = "form-control"
        value = { passwordConfirmation }
        onChange = {
            (e) => setPasswordConfirmation(e.target.value) }
        placeholder = "Confirm Password"
        required style = {
            { borderRadius: "4px" } }
        /> <
        /div> <
        div className = "form-group" >
        <
        select id = "blood_group"
        className = "form-control"
        value = { bloodGroup }
        onChange = {
            (e) => setBloodGroup(e.target.value) }
        required style = {
            { borderRadius: "4px" } } >
        <
        option value = ""
        disabled >
        Choose blood group <
        /option> <
        option value = "A+" > A + < /option> <
        option value = "A-" > A - < /option> <
        option value = "B+" > B + < /option> <
        option value = "B-" > B - < /option> <
        option value = "AB+" > AB + < /option> <
        option value = "AB-" > AB - < /option> <
        option value = "O+" > O + < /option> <
        option value = "O-" > O - < /option> <
        /select> <
        /div> <
        div className = "text-center" >
        <
        button type = "submit"
        className = "btn btn-danger"
        style = {
            {
                padding: "10px 50px",
                fontSize: "18px",
                borderRadius: "4px",
            }
        } >
        Register <
        /button> <
        /div> <
        /form> {
            message && ( <
                p style = {
                    {
                        color: isError ? "red" : "green",
                        marginTop: "10px",
                    }
                } >
                { message } <
                /p>
            )
        } <
        div className = "text-center mt-4" >
        <
        div className = "d-flex justify-content-between align-items-center"
        style = {
            { width: "100%" } } > { /* Back to Home Link with Icon */ } <
        Link to = "/"
        className = "text-primary"
        style = {
            { display: "flex", alignItems: "center" } } >
        <
        FaHome className = "mr-1" / > Back to home <
        /Link> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section> <
        /div>
    );
};

export default Register;