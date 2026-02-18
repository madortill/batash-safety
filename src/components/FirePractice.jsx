import React from 'react'
import "../css/Fire.css";
import { useState } from "react";
import { useData } from "../context/DataContext";
import BackBtn from "./BackBtn";
import FlipCard from "./FlipCard";

function FirePractice({ changePage }) {
    const { data } = useData();
  const nextBtn = data.general[1].text;
  const [isDisabled, changeNextBtn] = useState(true);
  const [hoveredCards, setHoveredCards] = useState([]);
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
    changePage(4);
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
      changePage(6);
    }
  };
  return (
    <div className='FirePractice'>
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${isDisabled ? "nextBtnDisable" : ""}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  )
}

export default FirePractice
