import React from "react";


const DontMissCardItem = ({ author, date, title, link, imageUrl }) => {

    function formatDatum(datumString) {
        const monate = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
        const datum = new Date(datumString);
        const tag = datum.getDate();
        const monatIndex = datum.getMonth();
        const jahr = datum.getFullYear();
    
        return `${tag} ${monate[monatIndex]} ${jahr}`;
    }

    const openLink = () => {
        window.open(link, '_blank');
    }

    return (
        <div className="DontMissCardItem" onClick={openLink}>
            <div className="dMCardImage" style={{ width: "10rem", height: "7rem" }}>
                <img src={`http://localhost:8080/images/` + imageUrl} alt="" />
            </div>
            <div className="dMCardInfo">
                <p>{author} - <span>{formatDatum(date)}</span></p>
                <a href={link} target="_blank" rel="noreferrer"><h4>{title}</h4></a>
            </div>
        </div>
    )
}


export default DontMissCardItem;