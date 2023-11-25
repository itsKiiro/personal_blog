import React, { useEffect, useState } from "react";
import "../styles/Entertainment.css";
import DontMissCardItem from "./DontMissCardItem";

const Entertainment = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/entertainment`)
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
        <div className="Entertainment">
            <div className="entertainmentHeaderContainer">
                <h2 style={{ color: "red" }}>Entertainment</h2>
                <div className="entertainmentIconContainer">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
            </div>
            {articles.length > 0 && (
                <div className="entertainmentImageContainer">
                    <img className="dark-img" alt="" src={`http://localhost:8080/images/` + articles[0].imageUrl} />
                    <div className="entertainmentInfoContainer">
                        <p>{articles[0].author} - {formatDatum(articles[0].createdAt)}</p>
                        <h1>{articles[0].title}</h1>
                    </div>             
                </div>
            )} 
            <div className="entertainmentArticleContainer">
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
    )
}


export default Entertainment;