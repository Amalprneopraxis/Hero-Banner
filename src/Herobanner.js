import React from "react";
import './components/banner/Banner.css'
import Bannercontent from "./components/header/Bannercontent";

const Herobanner = () => {
    return (
        <>
            <div class="hero-image">
                <div class="hero-text">
                    <h1>I am John Doe</h1>
                    <p>And I'm a Photographer</p>
                    <Bannercontent/>
                </div>
            </div>
        </>
    )
}

// Attach Headernav to the window object
window.Herobanner = Herobanner;
export default Herobanner;