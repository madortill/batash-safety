import React from 'react'
import "../css/Fire.css";
import { useState } from "react";
import { useData } from "../context/DataContext";
import BackBtn from "./BackBtn";
import FlipCard from "./FlipCard";

import tireImg from "../assets/images/tireImg.png";
import engineImg from "../assets/images/enginImg.png";
import insideImg from "../assets/images/insideImg.png";
import galGalgal from "../assets/images/galGalgal.png";

function FirePractice({ changePage }) {
  const [page, setPage] = useState(0);
    const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.FirePractice[0].title;
  const text = data.FirePractice[0].text;
  const note = data.FirePractice[0].note;
  const tireText = data.FirePractice[0].tireText;
  const engineText = data.FirePractice[0].engineText;
  const insideText = data.FirePractice[0].insideText;
  const galSrc = data.FirePractice[0].galSrc;
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
      img: tireImg,
      backText: data.FirePractice[0].tireBack,
      title: tireText
    },
    {
      img: engineImg,
      backText: data.FirePractice[0].engineBack,
      title: engineText
    },
    {
      img: insideImg,
      backText: data.FirePractice[0].insideBack,
      title: insideText
    },
  ];

  const nextPage = () => {
    if (!isDisabled) {
      if (page === 0) {
        setPage(1);
      } else {
        changePage(6);
      }
    }
  };
  return (
    <div className='FirePractice'>
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn nextBtn-overBackground ${isDisabled ? "nextBtnDisable" : ""}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-FirePracticeVideo">{title}</p>
      <p className='FirePractice-text'>{text}</p>
      <div className='FirePractice-cardContainer'>
        {cards.map((card, i) => (
            <div key={i} onMouseEnter={() => handleCardHover(i)} className='FirePractice-flipCard'>
              <FlipCard backText={card.backText} img={card.img}  className="flip-card--FirePractice" />
              <p>{card.title}</p>
            </div>
          ))}
      </div>
      <p className='FirePractice-note'>{note}</p>
      {page === 1 && <div className="blur-background"></div>}
      {page == 1 && (
        <div className="gal-FirePractice galBubble">
          <img src={galSrc} className="galBubble-big" alt="galBubble" />
          <img className="galImg-big" src={galGalgal} alt="galGalgal" />
        </div>
      )}
    </div>
  )
}

export default FirePractice
