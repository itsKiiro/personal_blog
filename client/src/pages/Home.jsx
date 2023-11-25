import React from "react";
import HomeNews from "../components/HomeNews";
import DontMiss from "../components/DontMiss";
import Entertainment from "../components/Entertainment";
import Sports from "../components/Sports";
import LifeStyle from "../components/LifeStyle";
import AdBanner from "../components/AdBanner";
import Videos from "../components/Videos";

const Home = () => {

    return (
        <div className="Home">
            <HomeNews />
            <DontMiss />
            <Entertainment />
            <Sports />
            <LifeStyle />
            <AdBanner />
            <Videos />
        </div>
    )
}


export default Home;