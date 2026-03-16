import React from "react";
import { useState } from "react";
import { useData } from "../context/DataContext";
import "../css/SpecialConditions.css";

import BackBtn from "./BackBtn";
import FlipCard from "./FlipCard";

function GripLoss({ changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.GripLoss[0].title;
  const cards = data.GripLoss[0].cards;
  const [flippedCards, setFlippedCards] = useState([]);
  const allFlipped = flippedCards.length === cards.length;
  const handleCardFlipped = (index) => {
    setFlippedCards((prev) => {
      if (prev.includes(index)) return prev; // כבר נספר
      return [...prev, index];
    });
  };
  const previousPage = () => {
    changePage(3);
  };
  const nextPage = () => {
    changePage(5);
  };
  return (
    <div className="GripLoss">
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${!allFlipped ? "nextBtnDisable" : ""}`}
        disabled={!allFlipped}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-SpecialConditions">{title}</p>
      <div className="cards-GripLoss">
        {cards.map((card, index) => (
          <FlipCard
            key={index}
            frontText={card.front}
            backText={card.back}
            className="flip-card--large flip-card--orange"
            flipOn="click"
            onFlip={() => handleCardFlipped(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default GripLoss;
