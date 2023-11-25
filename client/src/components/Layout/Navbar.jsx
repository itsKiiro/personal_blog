import React from "react";
import "./Navbar.css";


const Navbar = () => {


    return (
        <div className="Navbar">
            <div className="topNav">
                <div className="logoContainer">
                    <h1 className="logo">News<span style={{ color: "red" }}>cast</span></h1>
                </div>
                <div className="adContainer">
                    <img 
                        alt="" 
                        className="adBannerImg"
                        src={`http://localhost:8080/images/adBanner.jpg`}
                    />
                </div>
            </div>
            <div className="nav">
                <ul className="navLinks">
                    <li className="navLink">Home</li>
                    <li className="navLink">International</li>
                    <li className="navLink">Sports</li>
                    <li className="navLink">Opinion</li>
                    <li className="navLink">Business</li>
                    <li className="navLink">Youth</li>
                    <li className="navLink">Entertainment</li>
                    <li className="navLink">Lifestyle</li>
                    <li className="navLink">Pages</li>
                </ul>
                <div className="navSearchContainer">
                    <input placeholder="Search..." />
                </div>
            </div>
        </div>
    )
}


export default Navbar;