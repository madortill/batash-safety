import React from "react";
import { useState } from "react";
import { useData } from "../context/DataContext";
import "../css/Flip.css";

import FlipCard from "./FlipCard";
import BackBtn from "./BackBtn";

function FlipStage({ changePage }) {
  const { data } = useData();
  const [isDisabled, changeNextBtn] = useState(true);
  const [hoveredCards, setHoveredCards] = useState([]);
  const nextBtn = data.general[1].text;
  const text = data.FlipStage[0].text;
  const note = data.FlipStage[0].note;
  const handleCardHover = (index) => {
    setHoveredCards((prev) => {
      if (prev.includes(index)) return prev;

      const updated = [...prev, index];

      if (updated.length === cards.length) {
        changeNextBtn(false); // פותח את כפתור "הבא"
      }

      return updated;
    });
  };

  const previousPage = () => {
    changePage(1);
  };

  const cards = [
    {
      frontText: data.FlipStage[0].front1,
      backText: data.FlipStage[0].back1,
    },
    {
      frontText: data.FlipStage[0].front2,
      backText: data.FlipStage[0].back2,
    },
  ];

  const nextPage = () => {
    if (!isDisabled) {
      changePage(3);
    }
  };
  return (
    <div className="FlipStage">
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${isDisabled ? "nextBtnDisable" : ""}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <div className="FlipStage-container">
        <p className="FlipStage-text">{text}</p>
        <div className="cards-container">
          {cards.map((card, i) => (
            <div key={i} onMouseEnter={() => handleCardHover(i)}>
              <FlipCard backText={card.backText} frontText={card.frontText} />
            </div>
          ))}
        </div>
        <p className="intro-note">{note}</p>
      </div>
    </div>
  );
}

export default FlipStage;
