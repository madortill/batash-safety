import React from "react";
import { useState } from "react";
import { useData } from "../context/DataContext";
import "../css/SpecialConditions.css";

import BackBtn from "./BackBtn";
import map from "../assets/images/mapLocation.png";

function Urban({ changePage, startPage }) {
   const [page, setPage] = useState(startPage ?? 0);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.Urban[page].title;
  const semiTitle = data.Urban[0].semiTitle;
  const text = data.Urban[0].text;
  const note = data.Urban[0].note;
  const bubbleTitle = data.Urban[0].bubbleTitle;
  const bubbleText = data.Urban[0].bubbleText;
  const buildingImg = data.Urban[1].buildingImg;
  const [canContinue, setCanContinue] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const previousPage = () => {
    if (page === 0) {
      changePage(0);
    } else {
      setPage(0)
    }
  };
  const nextPage = () => {
    if (page === 0) {
      setPage(1)
    } else {

      changePage(2);
    }
  };
  return (
    <div>
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${(!canContinue && page === 0) ? "nextBtnDisable" : ""}`}
        disabled={!canContinue && page === 0}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-SpecialConditions">{title}</p>
     {page === 0 && <div className="urban-text-container">
        <p className="semiTitle semiTitle-Urban">{semiTitle}</p>
        <p className="text-Urban">{text}</p>
      </div>}
     {page === 0 && <img src={map} alt="map" className={`map-urban ${!canContinue ? "pulse-animation" : ""}`} onClick={()=> setShowBubble(true)} />}
      {page === 0 && <p className="note-Urban">{note}</p>}
      {showBubble && <div className="blur-background"></div>}
      {showBubble && <div className="urbanBubble">
         <button className="close-btn close-btn-urban" onClick={() => {setShowBubble(false); setCanContinue(true)}}>
            X
          </button>
        <p className="boldText">{bubbleTitle}</p>
        <p>{bubbleText}</p>
      </div>}
     {page === 1 && <img src={buildingImg} alt="buildingImg" className="buildingImg" />}
    </div>
  );
}

export default Urban;
