import React from "react";
import airbnb from "../assets/airbnb.png";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <img id="nav--logo" src={airbnb} alt="AirBnb Logo" />
        </nav>
    );
}
