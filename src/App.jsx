import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katie from "./assets/katie.png";
import wedding from "./assets/wedding.png";
import data from "./data";
import "./App.css";

export default function App() {
	const cards = data.map(card => 
		<Card 
			key = {card.id}
			card = {card}
		/>
	);
	return (
		<div className="app">
			<Navbar />
			<Hero />	
			<section className="cards">
				{cards}
			</section>
		</div>
	);
}