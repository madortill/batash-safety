import React from 'react'
import { useState } from "react";
import { useData } from "../context/DataContext";
import BackBtn from "./BackBtn";

import announceImg from "../assets/images/announce-icon.svg";
import holdImg from "../assets/images/hold-icon.svg";

function FlipHow({ changePage, changeToSection }) {
    const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.FlipHow[0].title;
  const buttons = data.FlipHow[0].buttons;
  const hold = data.FlipHow[0].hold;
  const announce = data.FlipHow[0].announce;

  
  const [activeButton, setActiveButton] = useState(null);
  const [visitedButtons, setVisitedButtons] = useState([]);

  const canContinue = visitedButtons.length === buttons.length;

  const handleButtonClick = (id) => {
    setActiveButton(id);

    setVisitedButtons((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const previousPage = () => {
    changePage(2);
  };
  const nextPage = () => {
    if (canContinue) {
        changeToSection(1);
    }
  };


  return (
    <div className='FlipHow'>
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${!canContinue ? "nextBtnDisable" : ""}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-FlipHow">{title}</p>
      <div className='FlipHow-content'>
        <div className='FlipHow-btn' onClick={() => handleButtonClick(0)}>
            <img className='FlipHow-btn-img' src={holdImg} alt="announce" />
            <p>{hold}</p>
        </div>
        <div className='FlipHow-btn' onClick={() => handleButtonClick(1)}>
            <img className='FlipHow-btn-img' src={announceImg} alt="announce" />
            <p>{announce}</p>
        </div>
      </div>
      {activeButton !== null && <div className="blur-background"></div>}
      {activeButton !== null && (
        <div className="FlipHow-text-box">
          <button className="close-btn" onClick={() => setActiveButton(null)}>
            X
          </button>

          <h3>{buttons[activeButton].title}</h3>

          <div className="FlipHow-text-content">
            <p>{buttons[activeButton].text}</p>
            <img
              alt={buttons[activeButton].text}
              src={buttons[activeButton].img}
              className='FlipHow-text-img'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default FlipHow
