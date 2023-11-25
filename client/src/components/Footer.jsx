import React from "react";
import "../styles/Footer.css";



const Footer = () => {


    return (
        <div className="Footer">
            <div className="footerContainer">
                <div className="footerLogoContainer">
                    <h1>News<span style={{ color: "red" }}>cast</span></h1>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                </div>
                <div className="footerSocialLinksContainer">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                </div>
            </div>
            <div className="footerContainer">
                <div className="footerHeaderContainer">
                    <h2>Photo Gallery</h2>
                </div>
                <div>

                </div>
            </div>
            <div className="footerContainer">
                <div className="footerHeaderContainer">
                    <h2>Tags</h2>
                </div>
                <div style={{ width: "100%" }}>
                    <ul className="footerTags">
                            <li style={{ backgroundColor: "red" }} className="dMNavLink">All</li>
                            <li style={{ backgroundColor: "purple" }} className="dMNavLink">Football</li>
                            <li style={{ backgroundColor: "green" }} className="dMNavLink">Cricket</li>
                            <li style={{ backgroundColor: "blue" }} className="dMNavLink">Basketball</li>
                            <li style={{ backgroundColor: "brown" }} className="dMNavLink">Badminton</li>
                            <li style={{ backgroundColor: "lightblue" }} className="dMNavLink">Boxing</li>
                            <li style={{ backgroundColor: "blue" }} className="dMNavLink">E-Sports</li>
                    </ul>
                </div>
            </div>
            <div className="footerContainer">
                <div className="footerHeaderContainer">
                    <h2>Stay In Touch</h2>
                </div>
                <div style={{ color: "#fff" }}>
                    <p>To be updated with all the latest news, offers and special annoucements.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "1rem" }}>
                    <input 
                        style={{ padding: "0.4rem" }}
                        placeholder="Your email address"
                    />
                    <button className="subButton" style={{  }}>Subscribe</button>
                </div>
            </div>
        </div>
    )
}


export default Footer;