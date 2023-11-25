import React, { useEffect, useState } from "react";
import "../styles/Sports.css";
import DontMissCardItem from "./DontMissCardItem";

const Sports = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/sport`)
        .then((res) => res.json())
        .then((data) => setArticles(data))
    }, [])

    function formatDatum(datumString) {
        const monate = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
        const datum = new Date(datumString);
        const tag = datum.getDate();
        const monatIndex = datum.getMonth();
        const jahr = datum.getFullYear();
    
        return `${tag} ${monate[monatIndex]} ${jahr}`;
    }

    const socialLinks = [
        {
            title: "Facebook",
            backgroundColor: "blue"
        },
        {
            title: "Instagram",
            backgroundColor: "purple"
        },
        {
            title: "Twitter",
            backgroundColor: "lightblue"
        },
        {
            title: "LinkedIn",
            backgroundColor: "darkblue"
        },
        {
            title: "GitHub",
            backgroundColor: "brown"
        }
    ]

    return (
        <div className="Sports">
            <div className="sportsLeftSide">
                <div className="sportsHeaderContainer">
                    <h2 style={{ color: "red" }}>Sports</h2>
                    <div>
                        <ul className="dMNavLinks">
                            <li style={{ backgroundColor: "red" }} className="dMNavLink">All</li>
                            <li style={{ backgroundColor: "purple" }} className="dMNavLink">Football</li>
                            <li style={{ backgroundColor: "green" }} className="dMNavLink">Cricket</li>
                            <li style={{ backgroundColor: "blue" }} className="dMNavLink">Basketball</li>
                            <li style={{ backgroundColor: "brown" }} className="dMNavLink">Badminton</li>
                            <li style={{ backgroundColor: "lightblue" }} className="dMNavLink">Boxing</li>
                            <li style={{ backgroundColor: "blue" }} className="dMNavLink">E-Sports</li>
                        </ul>
                    </div>
                    <div className="sportsIconContainer">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                </div>
                <div className="sportsContentContainer">
                    <div className="sportsLeftContentContainer">
                        {articles.length > 0 && (
                            <>
                            <div className="sportMainImageContainer">
                                <img
                                    alt="" 
                                    src={`http://localhost:8080/images/${articles[0].imageUrl}`}
                                    style={{ width: "100%" }}
                                />
                            </div> 
                            <div className="lifeStyleInfoContainer">
                                <p>{articles[0].author} - <span>{formatDatum(articles[0].createdAt)}</span></p>
                                <h2>{articles[0].title}</h2>
                                <p>{articles[0].description}</p>
                            </div>
                            </>
                        )}


                    </div>
                    <div className="sportsRightContentContainer">
                        {articles.map((article) => (
                            <DontMissCardItem 
                                key={article._id}
                                imageUrl={article.imageUrl}
                                title={article.title}
                                date={article.createdAt}
                                author={article.author}
                                link={article.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="sportsRightSide">
                <div className="stayConnectedHeaderContainer">
                   <h2 style={{ color: "red" }}>Stay Connected</h2> 
                </div>
                <div className="connectedLinksContainer">
                    {socialLinks.map((link) => (
                        <div className="stayConnectedCardContainer" style={{ backgroundColor: `${link.backgroundColor}` }} key={link.title}>
                            <span>{link.title}</span>
                        </div>
                    ))}
                </div>
                <div className="sportsAdContainer">
                    <img 
                        alt="" 
                        className="dark-img"
                        src={`http://localhost:8080/images/foodAd.webp`} 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            </div>

        </div>
    )
}


export default Sports;