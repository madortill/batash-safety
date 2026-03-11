import React from "react";
import "../css/Habits.css";
import { useData } from "../context/DataContext";
import { useState } from "react";

import BackBtn from "./BackBtn";
import FlipCard from "./FlipCard";

function DriveSteps({ changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const cards = data.DriveSteps[0].cards;
  const text = data.DriveSteps[0].text;
  const [flippedCards, setFlippedCards] = useState([]);
  const allFlipped = flippedCards.length === cards.length;
  const handleCardFlipped = (index) => {
    setFlippedCards((prev) => {
      if (prev.includes(index)) return prev; // כבר נספר
      return [...prev, index];
    });
  };
  const previousPage = () => {
    changePage(4);
  };
  const nextPage = () => {
    changePage(6);
  };

  return (
    <div className="DriveSteps">
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${!allFlipped ? "nextBtnDisable" : ""}`}
        disabled={!allFlipped}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="DriveSteps-text">{text}</p>
      <div className="cards-DriveSteps">
        {cards.map((card, index) => (
          <FlipCard
            key={index}
            frontText={card.front}
            backText={card.back}
            className="flip-card--large"
            flipOn="click"
            onFlip={() => handleCardFlipped(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default DriveSteps;
