import React from "react";

import star from "../assets/star.png";
import "./Card.css";

function Card(props) {
    const card = props.card
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img className="card--img" src={card.coverImg} alt="Katie" />
            <div className="description">
                <div className="card--rating">
                    <img className="card--star" src={star} alt="Star" />
                    <span>{card.stats.rating}</span>
                    <span className="grey">({card.stats.reviewCount}) •</span>
                    <span className="grey">{card.location}</span>
                </div>
                <p className="card--title">{card.title}</p>
                <p className="card--price"><span className="bold">From ${card.price} / </span>person</p>
            </div>
        </div>
    );
}

export default Card;