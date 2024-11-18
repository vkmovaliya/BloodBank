// src/components/Carousel.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import a from "../images/a1.jpg";
import a2 from "../images/b1.jpg";
import a1 from "../images/a2.jpg";
import a3 from "../images/b.jpg";
import a4 from "../images/b2.jpg";
import a5 from "../images/r.jpg";

import { Carousel } from "react-bootstrap"; // Import Carousel components from react-bootstrap
import {
    FaFacebookF,
    FaDribbble,
    FaTwitter,
    FaGooglePlusG,
    FaHome,
    FaEnvelope,
    FaPhone,
    FaStar,
    FaStarHalfAlt
} from "react-icons/fa";

const Home = () => {
    const teamMembers = [
        { name: "John Doe", role: "Founder", imgUrl: a },
        { name: "Jane Smith", role: "Coordinator", imgUrl: a1 },
        { name: "Emily Davis", role: "Medical Officer", imgUrl: a2 },
    ];


    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '50px',
        },
        imageContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        image: {
            width: '100%',
            maxWidth: '300px',
            height: 'auto',
        },
        textContainer: {
            textAlign: 'center',
            maxWidth: '500px',
        },
        title: {
            color: '#ff0000',
            marginBottom: '20px',
        },
        paragraph: {
            marginBottom: '20px',
            fontSize: '1.25rem',
        },
        button: {
            display: 'inline-block',
            padding: '12px 24px',
            borderRadius: '5px',
            color: 'white',
            backgroundColor: '#ff0000',
            cursor: 'pointer',
            textDecoration: 'none',
            fontSize: '18px',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#cc0000',
        },
        tableContainer: {
            marginTop: '40px',
            overflowX: 'auto',
        },
        table: {
            borderCollapse: 'collapse',
            width: '100%',
        },
        tableCell: {
            border: '1px solid black',
            padding: '10px',
            textAlign: 'left',
        },
        headerCell: {
            backgroundColor: '#f2f2f2',
        },
        h2: {
            color: '#ff0000',
            marginBottom: '20px',
        },
    };

    const bloodTypes = [
        { type: 'A+', donateTo: 'A+ AB+', receiveFrom: 'A+ A- O+ O-' },
        { type: 'O+', donateTo: 'O+ A+ B+ AB+', receiveFrom: 'O+ O-' },
        { type: 'B+', donateTo: 'B+ AB+', receiveFrom: 'B+ B- O+ O-' },
        { type: 'AB+', donateTo: 'AB+', receiveFrom: 'Everyone' },
        { type: 'A-', donateTo: 'A+ A- AB+ AB-', receiveFrom: 'A- O-' },
        { type: 'O-', donateTo: 'Everyone', receiveFrom: 'O-' },
        { type: 'B-', donateTo: 'B+ B- AB+ AB-', receiveFrom: 'B- O-' },
        { type: 'AB-', donateTo: 'AB+ AB-', receiveFrom: 'AB- A- B- O-' },
    ];
    return ( <
        div >
        <
        Carousel controls indicators dark >
        <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = { a2 }
        alt = "slide 1"
        height = { "600px" }
        /> <
        Carousel.Caption className = "d-none d-md-block" >
        <
        h5 > "Save Lives, Donate Blood" < /h5> <
        p > "Your donation can give someone a second chance at life." <
        /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = { a1 }
        alt = "slide 2"
        height = { "600px" }
        /> <
        Carousel.Caption className = "d-none d-md-block" >
        <
        h5 > "Be a Hero Today" < /h5> <
        p > "A single pint of blood can save up to three lives." < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = { a }
        alt = "slide 3"
        height = { "600px" }
        /> <
        Carousel.Caption className = "d-none d-md-block" >
        <
        h5 > "Join Our Blood Donor Community" < /h5> <
        p > "Help us ensure a safe and sufficient blood supply." < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        /Carousel>

        <
        section className = "intro text-center p-5" >
        <
        div className = "container" >
        <
        h2 > Our Mission < /h2> <
        p >
        We are dedicated to saving lives through blood donation.Our mission is to ensure that everyone in need of blood can receive it promptly and safely. <
        /p> <
        /div> <
        /section>

        <
        div className = "container-fluid" >
        <
        h1 className = "text-center" > GALLERY < /h1> <
        div className = "gallery" >
        <
        img src = { a1 }
        alt = "Gallery" / >
        <
        img src = { a1 }
        alt = "Gallery" / >
        <
        img src = { a3 }
        alt = "Gallery" / >
        <
        img src = { a4 }
        alt = "Gallery" / >
        <
        img src = { a5 }
        alt = "Gallery" / >
        <
        img src = { a1 }
        alt = "Gallery" / >
        <
        img src = { a1 }
        alt = "Gallery" / >
        <
        /div> <
        /div>

        <
        section className = "cards-section p-5" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-md-4" >
        <
        div className = "card" >
        <
        img src = { a }
        className = "card-img-top"
        alt = "History" / >
        <
        div className = "card-body" >
        <
        h5 className = "card-title" > Our History < /h5> <
        p className = "card-text" >
        Founded in 2020, our blood bank has been at the forefront of blood donation and collection efforts in our community. <
        /p> <
        /div> <
        /div> <
        /div> <
        div className = "col-md-4" >
        <
        div className = "card" >
        <
        img src = { a2 }
        className = "card-img-top"
        alt = "Mission" / >
        <
        div className = "card-body" >
        <
        h5 className = "card-title" > Our Mission < /h5> <
        p className = "card-text" >
        We strive to ensure that everyone in need of blood can receive it promptly and safely. <
        /p> <
        /div> <
        /div> <
        /div> <
        div className = "col-md-4" >
        <
        div className = "card" >
        <
        img src = { a3 }
        className = "card-img-top"
        alt = "Impact" / >
        <
        div className = "card-body" >
        <
        h5 className = "card-title" > Our Impact < /h5> <
        p className = "card-text" >
        We have successfully collected and distributed thousands of units of blood, helping to save countless lives. <
        /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section>

        <
        div className = "container py-5" >
        <
        div className = "row text-center" >
        <
        div className = "col-md-3" >
        <
        div className = "card shadow-sm p-4" >
        <
        h5 > CUSTOMER SATISFACTION < /h5> <
        h1 > 4.5 / 5 < /h1> <
        div className = "d-flex justify-content-center" >
        <
        FaStar className = "text-primary" / >
        <
        FaStar className = "text-primary" / >
        <
        FaStar className = "text-primary" / >
        <
        FaStar className = "text-primary" / >
        <
        FaStarHalfAlt className = "text-primary" / >
        <
        /div> <
        p > 41, 042 Reviews < /p> <
        /div> <
        /div> <
        div className = "col-md-3" >
        <
        div className = "card shadow-sm p-4" >
        <
        h5 > TOTAL CUSTOMERS < /h5> <
        h1 > 16 K + < /h1> <
        p > Total customers used our design services. < /p> <
        /div> <
        /div> <
        div className = "col-md-3" >
        <
        div className = "card shadow-sm p-4" >
        <
        h5 > TOTAL SLIDES < /h5> <
        h1 > 1.3 M + < /h1> <
        p > Slides created
        for clients in every industry to communicate ideas effectively. < /p> <
        /div> <
        /div> <
        div className = "col-md-3" >
        <
        div className = "card shadow-sm p-4" >
        <
        h5 > HOURS SAVED < /h5> <
        h1 > 1 M + < /h1> <
        p > Total hours saved by our customers using our services. < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "container py-5" >
        <
        h1 className = "text-center mb-4" > LEARN ABOUT DONATION < /h1>

        <
        div className = "row" > { /* Image section */ } <
        div className = "col-md-6 d-flex justify-content-center" >
        <
        img src = { a1 }
        alt = "Blood Donation"
        className = "img-fluid rounded"
        style = {
            { maxHeight: '1000px' } }
        /> <
        /div>

        { /* Table section */ } <
        div className = "col-md-6" >
        <
        table className = "table table-bordered table-striped" >
        <
        thead className = "thead-dark" >
        <
        tr >
        <
        th > Blood Type < /th> <
        th > Donate Blood To < /th> <
        th > Receive Blood From < /th> <
        /tr> <
        /thead> <
        tbody > {
            bloodTypes.map((bloodType, index) => ( <
                tr key = { index } >
                <
                td > { bloodType.type } < /td> <
                td > { bloodType.donateTo } < /td> <
                td > { bloodType.receiveFrom } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        /div> <
        /div> <
        /div>



        <
        section className = "impact-section py-5" >
        <
        div className = "container" >
        <
        h2 className = "section-title text-center text-danger mb-4" > Our Impact < /h2> <
        div className = "row" >
        <
        div className = "col-md-4 text-center" >
        <
        h3 > 10, 000 + < /h3> <
        p > Donations Collected < /p> <
        /div> <
        div className = "col-md-4 text-center" >
        <
        h3 > 5, 000 + < /h3> <
        p > Lives Saved < /p> <
        /div> <
        div className = "col-md-4 text-center" >
        <
        h3 > 100 + < /h3> <
        p > Blood Drives < /p> <
        /div> <
        /div> <
        /div> <
        /section>


        { /* footer section */ } <
        div className = "container-fluid mt-5 mx-0 py-0" >
        <
        footer className = "text-white text-center text-lg-start"
        style = {
            { backgroundColor: "#B22222" } } >
        <
        div className = "container p-4" >
        <
        div className = "row mt-4" > { /* About company */ } <
        div className = "col-lg-4 col-md-12 mb-4 mb-md-0" >
        <
        h5 className = "text-uppercase mb-4" > About Us < /h5> <
        p >
        We are dedicated to saving lives by connecting donors with those in need.Your blood donations make a world of difference. <
        /p> <
        div className = "mt-4" >
        <
        button type = "button"
        className = "btn btn-floating btn-light btn-lg" >
        <
        FaFacebookF / >
        <
        /button> <
        button type = "button"
        className = "btn btn-floating btn-light btn-lg" >
        <
        FaDribbble / >
        <
        /button> <
        button type = "button"
        className = "btn btn-floating btn-light btn-lg" >
        <
        FaTwitter / >
        <
        /button> <
        button type = "button"
        className = "btn btn-floating btn-light btn-lg" >
        <
        FaGooglePlusG / >
        <
        /button> <
        /div> <
        /div>

        { /* Contact information */ } <
        div className = "col-lg-4 col-md-6 mb-4 mb-md-0" >
        <
        h5 className = "text-uppercase mb-4 pb-1" > Contact Us < /h5> <
        ul className = "list-unstyled" >
        <
        li className = "mb-3 d-flex align-items-center" >
        <
        FaHome className = "me-2" / >
        <
        span > 123 Blood Bank Street, Life City, Amreli < /span> <
        /li> <
        li className = "mb-3 d-flex align-items-center" >
        <
        FaEnvelope className = "me-2" / >
        <
        span > vk @bloodbank.com < /span> <
        /li> <
        li className = "mb-3 d-flex align-items-center" >
        <
        FaPhone className = "me-2" / >
        <
        span > +91 9016303888 < /span> <
        /li> <
        /ul> <
        /div>

        { /* Opening hours */ } <
        div className = "col-lg-4 col-md-6 mb-4 mb-md-0" >
        <
        h5 className = "text-uppercase mb-4" > Opening Hours < /h5> <
        table className = "table table-striped text-white" >
        <
        tbody className = "fw-normal" >
        <
        tr >
        <
        td > Mon - Thu: < /td> <
        td > 8 am - 9 pm < /td> <
        /tr> <
        tr >
        <
        td > Fri - Sat: < /td> <
        td > 8 am - 1 am < /td> <
        /tr> <
        tr >
        <
        td > Sunday: < /td> <
        td > 9 am - 10 pm < /td> <
        /tr> <
        /tbody> <
        /table> <
        /div> <
        /div> <
        /div>

        <
        hr / >

        { /* Call to Action */ } <
        section className = "text-center p-4" >
        <
        p className = "d-flex justify-content-center align-items-center" >
        <
        span className = "me-3" > Join Us and Save Lives < /span> <
        button type = "button"
        className = "btn btn-outline-light btn-rounded" >
        Sign Up Now!
        <
        /button> <
        /p> <
        /section> <
        /footer> <
        /div> <
        /div>
    );
};

export default Home;