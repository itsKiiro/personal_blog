import React, { useEffect, useState } from "react";
import "../styles/Videos.css";


const AdBanner = () => {

    const [currentAd, setCurrentAd] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/api/ad`)
        .then((res) => res.json())
        .then((data) => setCurrentAd(data[0]))
    }, [])


    return (
        <>
            {currentAd && (
                <div 
                    className="AdBanner" 
                    style={{ width: "70%", height: "10rem", marginTop: "4rem", marginBottom: "4rem", objectFit: "cover" }}
                >
                    <img 
                        src={`http://localhost:8080/images/` + currentAd.imageUrl}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>            
            )}
        </>
    )
}

export default AdBanner;