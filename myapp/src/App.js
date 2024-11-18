// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login';
import Apipage from './components/Apipage';
import Apipagenew from './components/Apipagenew';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About';
const App = () => {
        return ( <
                Router >
                <
                div >
                <
                ToastContainer position = "top-right"
                autoClose = { 3000 }
                hideProgressBar = { false }
                newestOnTop = { false }
                closeOnClick rtl = { false }
                pauseOnFocusLoss draggable pauseOnHover theme = "light"
                bodyClassName = "toastBody"

                /
                >
                <
                Routes >
                <
                Route path = "/"
                element = { < > < NavBar / > < Home / > < />} / >
                    <
                    Route path = "/register"
                    element = { < > < NavBar / > < Register / > < />} / >
                        <
                        Route path = "/login"
                        element = { < > < NavBar / > < Login / > < />} / >
                            <
                            Route path = "/admin"
                            element = { < > < NavBar / > < AdminLogin / > < />} / >

                                <
                                Route path = "/about"
                                element = { < > < NavBar / > < About / > < />} / >
                                    <
                                    Route path = "/api/*"
                                    element = { < Apipage / > }
                                    /> <
                                    Route path = "/apinew/*"
                                    element = { < Apipagenew / > }
                                    /> { /* Add more routes as needed */ } <
                                    /Routes>

                                    <
                                    /div> <
                                    /Router>
                                );
                            };

                            export default App;