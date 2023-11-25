import React, { useEffect, useState } from "react";
import "../styles/LifeStyle.css";
import DontMissCardItem from "./DontMissCardItem";


const LifeStyle = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/lifeStyle`)
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
        <div className="LifeStyle">
            <div className="lifeStyleLeftSideContainer">
                <div className="sportsHeaderContainer">
                    <h2 style={{ color: "red" }}>Life Style</h2>
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
                <div className="lifeStyleContentContainer">
                    <div className="lifeStyleMainContentContainer">
                        {articles.length > 0 && (
                            <div className="lifeStyleMainArticleContainer">
                                <div className="lifeStyleImageContainer">
                                    <img 
                                        alt="" 
                                        src={`http://localhost:8080/images/${articles[0].imageUrl}`} 
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </div>
                                <div className="lifeStyleInfoContainer">
                                    <p>{articles[0].author} - <span>{formatDatum(articles[0].createdAt)}</span></p>
                                    <h2>{articles[0].title}</h2>
                                    <p>{articles[0].description}</p>
                                </div>
                            </div>
                        )}
                        {articles.length > 0 && (                        
                        <div className="lifeStyleMainArticleContainer">
                            <div className="lifeStyleImageContainer">
                                <img 
                                    alt="" 
                                    src={`http://localhost:8080/images/${articles[1].imageUrl}`} 
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <div className="lifeStyleInfoContainer">
                                <p>{articles[1].author} - <span>{formatDatum(articles[1].createdAt)}</span></p>
                                <h2>{articles[1].title}</h2>
                                <p>{articles[1].description}</p>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="lifeStyleContentExtrasContainer">
                    {articles.map((article, index) => {
                        if (index !== 0 && index !== 1) {
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
            </div>
            <div className="lifeStyleRightSideContainer">
                <div className="newsLetterContainer">
                    <h2>Get Latest Update</h2>
                    <input 
                        className="subInput"
                        style={{ width: "85%", padding: "0.4rem", fontSize: "1.4rem" }}
                        placeholder="Your Email Address..."
                    />
                    <button className="subButton" style={{ width: "89%", padding: "0.4rem" }}>Subscribe</button>
                </div>
            </div>
        </div>
    )
}


export default LifeStyle;