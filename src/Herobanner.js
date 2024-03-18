import React from "react";
import './components/banner/Banner.css';
import Bannercontent from "./components/header/Bannercontent";

const Herobanner = ({ text }) => {
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>{text}</h1>
                <p>And I'm a Photographer</p>
                <Bannercontent/>
            </div>
        </div>
    );
};

export default Herobanner;

