import React from 'react';
import {
    FaFacebookF,
    FaDribbble,
    FaTwitter,
    FaGooglePlusG,
    FaHome,
    FaEnvelope,
    FaPhone
} from "react-icons/fa";
const About = () => {
    return ( <
        >
        <
        div className = "about-container" >
        <
        style jsx > { `
        .about-container {
          margin-top:50px;
          padding: 40px;
          max-width: 900px;
          margin: 110px auto;
          background: linear-gradient(to right, #f8d7da, #f5c6cb);
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          color: #333;
        }

        .about-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .about-header h1 {
          color: #c00;
          font-size: 2.5rem;
          font-weight: bold;
        }

        .about-header p {
          font-size: 1.2rem;
          color: #555;
        }

        .about-content {
          margin-top: 20px;
        }

        .about-section {
          margin-bottom: 30px;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .about-section h2 {
          color: #c00;
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        .about-section p {
          font-size: 1rem;
          color: #666;
        }

        .about-footer {
          text-align: center;
          margin-top: 40px;
          font-size: 1.2rem;
          font-weight: bold;
          color: #c00;
        }
      ` } < /style>

        <
        div className = "about-header" >
        <
        h1 > About Us < /h1>

        <
        /div> <
        div className = "about-content" >
        <
        section className = "about-section" >
        <
        h2 > Our Mission < /h2> <
        p >
        Our mission is to ensure that every patient in need of a blood transfusion receives the safest and most effective treatment.We are committed to maintaining a stable supply of blood through our dedicated donors and state - of - the - art facilities. <
        /p> <
        /section> <
        section className = "about-section" >
        <
        h2 > Our Vision < /h2> <
        p >
        We envision a world where every individual in need of blood has timely access to safe and sufficient blood supplies.Our goal is to promote a culture of voluntary blood donation and to contribute to the health and well - being of the community. <
        /p> <
        /section> <
        section className = "about-section" >
        <
        h2 > How We Operate < /h2> <
        p >
        We operate through a network of donor centers and blood collection drives.Our team of professionals ensures that each donation is processed and tested rigorously to guarantee its safety.We collaborate with hospitals and healthcare providers to meet the needs of patients efficiently. <
        /p> <
        /section> <
        /div> <
        div className = "about-footer" >
        <
        p > Thank you
        for your support and commitment to saving lives. < /p> <
        /div> <
        /div> <
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
        />
    );
};

export default About;