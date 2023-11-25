import React, { useEffect, useState } from "react";
import "../styles/DontMiss.css";
import DontMissCardItem from "./DontMissCardItem";

const DontMiss = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/dont/miss`)
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
        <div className="DontMiss">
            <div className="dontMissLeftContainer">
                <div className="dMHeaderContainer">
                    <h2>Don't Miss</h2>
                    <ul className="dMNavLinks">
                        <li style={{ backgroundColor: "red" }} className="dMNavLink">All</li>
                        <li style={{ backgroundColor: "purple" }} className="dMNavLink">Lifestyle</li>
                        <li style={{ backgroundColor: "green" }} className="dMNavLink">Vouge</li>
                        <li style={{ backgroundColor: "blue" }} className="dMNavLink">Health & Fitness</li>
                        <li style={{ backgroundColor: "brown" }} className="dMNavLink">Travel</li>
                        <li style={{ backgroundColor: "lightblue" }} className="dMNavLink">Gadgets</li>
                        <li style={{ backgroundColor: "blue" }} className="dMNavLink">World</li>
                        <li style={{ backgroundColor: "darkblue" }} className="dMNavLink">More</li>
                    </ul>
                </div>
                <div className="dMContentContainer">
                    {articles.length > 0 && (
                    <div className="dMContentLeftSide">
                        <img alt="" src={`http://localhost:8080/images/${articles[0].imageUrl}`} />
                        <div className="lifeStyleInfoContainer">
                            <p>{articles[0].author} - {formatDatum(articles[0].createdAt)}</p>
                            <h2>{articles[0].title}</h2>
                            <p>{articles[0].description}</p>
                        </div>
                    </div>
                    )}
                    <div className="dMContentRightSide">
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
            <div className="dontMissRightContainer">
                <div className="dMHeaderContainer">
                    <ul className="dMNavLinks" style={{ justifyContent: "space-between", width: "100%" }}>
                        <li className="dMNavLink_1">Recent</li>
                        <li className="dMNavLink_1">Trending</li>
                        <li className="dMNavLink_1">Most Views</li>
                    </ul>
                </div>
                <div className="dMExtrasContainer">
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
    )
}


export default DontMiss;