import React from "react";
import { useData } from "../context/DataContext";
import { useState } from "react";
import "../css/SpecialConditions.css";

import BackBtn from "./BackBtn";
import seledCounter from "../assets/images/seledCounter.png";
import galGalgal from "../assets/images/galGalgal.png";

function GearSpeed({ changePage, startPage }) {
  const [page, setPage] = useState(startPage);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.GearSpeed[0].title;
  const img = data.GearSpeed[0].img;
  const semiTitle = data.GearSpeed[1].semiTitle;
  const text = data.GearSpeed[1].text;
  const title1 = data.GearSpeed[2].title1;
  const text1 = data.GearSpeed[2].text1;
  const title2 = data.GearSpeed[2].title2;
  const text2 = data.GearSpeed[2].text2;
  const [canContinue, setCanContinue] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const previousPage = () => {
    if (page === 0) {
      changePage(5);
    } else {
      setPage(0);
    }
  };
  const nextPage = () => {
    if (page === 0) {
      setPage(1);
    } else {
      changePage(7);
    }
  };
  return (
    <div className="GearSpeed">
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${page > 0 && !canContinue ? "nextBtnDisable" : ""}`}
        disabled={page > 0 && !canContinue}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-SpecialConditions">{title}</p>
      {page === 0 && (
        <img src={img} alt="GearSpeedImg" className="GearSpeedImg" />
      )}
      {page === 1 && (
        <div className="GearSpeed-content">
          <p className="boldText">{semiTitle}</p>
          <p>{text}</p>
        </div>
      )}
      {page === 1 && (
        <img
          src={seledCounter}
          alt="seledCounter"
          className={`seledCounter ${!canContinue ? "seledCounter-animation" : ""}`}
          onClick={() => {
            setShowBubble(true);
          }}
        />
      )}
      {page === 1 && (
        <div className="galBubble gal-GearSpeed">
          <img
            src={data.GearSpeed[1].galSrc}
            className="galBubble-small"
            alt="galBubble"
          />
          <img className="galImg-small" src={galGalgal} alt="galGalgal" />
        </div>
      )}
      {showBubble && (
        <div className="GearSpeedBubble">
          <button
            className="close-btn"
            onClick={() => {
              setShowBubble(false);
              setCanContinue(true);
            }}
          >
            X
          </button>
          <div className="GearSpeedBubble-text">
            <p className="boldText">{title1}</p>
            <p>{text1}</p>
          </div>
          <img
            src={seledCounter}
            alt="seledCounter"
            className="seledCounterBubble"
          />
          <div className="GearSpeedBubble-text">
            <p className="boldText">{title2}</p>
            <p>{text2}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GearSpeed;
