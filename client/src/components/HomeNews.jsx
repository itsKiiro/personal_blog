import React, { useEffect, useState } from "react";
import "../styles/HomeNews.css";


const HomeNews = () => {

    const [articles,setArticles] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/recent`)
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

    const openLink = (link) => {
        window.open(link, "_blank")
    }

    return (
        <div className="HomeNews">
            {articles.length > 0 && (
            <div className="leftSideContainer" onClick={() => openLink("https://karall.dev")}>
                <img className="dark-img" alt="" src={`http://localhost:8080/images/${articles[0].imageUrl}`} /> 
                <div className="homeNewsInfoContainer">
                    <p>{articles[0].author} - {formatDatum(articles[0].createdAt)}</p>
                    <h1>{articles[0].title}</h1>
                </div>
            </div>                
            )}

            {articles.length > 0 && (
            <div className="rightSideContainer">
                <div className="rightSideTopContainer">
                    <div onClick={() => openLink("https://karall.dev")}>
                        <img className="dark-img" alt="" src={`http://localhost:8080/images/${articles[1].imageUrl}`} />
                        <div className="homeNewsInfoContainer">
                            <p>{articles[1].author} - {formatDatum(articles[1].createdAt)}</p>
                            <h1>{articles[1].title}</h1>
                        </div>
                    </div>
                    <div onClick={() => openLink("https://karall.dev")}>
                        <img className="dark-img" alt="" src={`http://localhost:8080/images/${articles[2].imageUrl}`} />
                        <div className="homeNewsInfoContainer">
                            <p>{articles[2].author} - {formatDatum(articles[2].createdAt)}</p>
                            <h1>{articles[2].title}</h1>
                        </div>
                    </div>
                </div>
                <div className="rightSideBottomContainer" onClick={() => openLink("https://karall.dev")}>
                    <img className="dark-img" alt="" src={`http://localhost:8080/images/${articles[3].imageUrl}`} />
                    <div className="homeNewsInfoContainer">
                        <p>{articles[3].author} - {formatDatum(articles[3].createdAt)}</p>
                        <h1>{articles[3].title}</h1>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default HomeNews;