import React, { useEffect, useState } from "react";
import "./TopBanner.css";

const TopBanner = () => {

    const [temp, setTemp] = useState("");

    useEffect(() => {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=48.2085&longitude=16.3721&hourly=temperature_2m")
        .then((res) => res.json())
        .then((data) => setTemp(data))
    }, [])

    return (
        <div className="TopBanner">
            <div className="socialLinksContainer">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-github"></ion-icon>
            </div>
            <div>
                <p>Vienna Temp: {temp.hourly.temperature_2m[0]} °C</p>
            </div>
        </div>
    )
}

export default TopBanner;