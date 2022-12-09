import React from "react";
import hero from "../assets/photo-grid.png";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <img id="hero--img" src={hero} alt="Hero Image" />
            <h1 id="hero--header">Online Experiences</h1>
            <p id="hero--text">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    );
}
export default Hero;