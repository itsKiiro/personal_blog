import React, { useEffect, useState } from "react";
import "../styles/Videos.css";
import DontMissCardItem from "./DontMissCardItem";


const Videos = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/video`)
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


    return (
        <div className="Videos">
            <div className="sportsHeaderContainer">
                <h2 style={{ color: "red" }}>Videos</h2>
                <div>
                    <ul className="dMNavLinks">
                        <li style={{ backgroundColor: "red" }} className="dMNavLink">All</li>
                        <li style={{ backgroundColor: "purple" }} className="dMNavLink">Travel</li>
                        <li style={{ backgroundColor: "green" }} className="dMNavLink">Recipes</li>
                        <li style={{ backgroundColor: "blue" }} className="dMNavLink">Health & Fitness</li>
                        <li style={{ backgroundColor: "brown" }} className="dMNavLink">Music</li>
                    </ul>
                </div>
                <div className="sportsIconContainer">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
            </div>
            {articles.length > 0 && (
                <div className="mainVideoContainer">
                    <img 
                        alt=""
                        className="dark-img"
                        src={`http://localhost:8080/images/` + articles[0].imageUrl} 
                        style={{ width: "100%", height: "100%" }}
                    />
                    <div className="videoInfoContainer">
                        <p>{articles[0].author} - <span>{formatDatum(articles[0].createdAt)}</span></p>
                        <h2>{articles[0].title}</h2>
                    </div>
                    <div className="playButton">
                        <ion-icon name="play-circle-outline"></ion-icon>
                    </div>
                </div>                
            )}

            <div className="videoExtrasContainer">
                {articles.map((article, index) => {
                    if (index !== 0) {
                        return (
                            <DontMissCardItem 
                                key={article._id}
                                imageUrl={article.imageUrl}
                                title={article.title}
                                date={article.createdAt}
                                author={article.author}
                                link={article.link}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}


export default Videos;