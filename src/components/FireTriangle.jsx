import React from "react";
import "../css/Fire.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";
import FireTriangleSvg from "./FireTriangleSvg";
import carFireOut from "../assets/images/carFireOut.svg";
import isolationImg from "../assets/images/isolation-img.png";
import coolingImg from "../assets/images/cooling-img.png";
import strangleImg from "../assets/images/strangle-img.png";
import carOnFire from "../assets/images/carOnFire.png";

function FireTriangle({ changePage, startPage }) {
  const [page, setPage] = useState(startPage);
  const [canContinue, setCanContinue] = useState(false);
  const [showStrangleText, setShowStrangleText] = useState(false);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.FireTriangle[0].title;
  const air = data.FireTriangle[0].air;
  const heat = data.FireTriangle[0].heat;
  const material = data.FireTriangle[0].material;
  const isolation = data.FireTriangle[1].isolation;
  const cooling = data.FireTriangle[1].cooling;
  const strangle = data.FireTriangle[1].strangle;
  const strangleTitle = data.FireTriangle[1].title;
  const strangleSemiTitle = data.FireTriangle[1].semiTitle;
  const strangleText = data.FireTriangle[1].text;
  const insideTitle = data.FireTriangle[2].insideTitle;
  const insideText= data.FireTriangle[2].insideText;
  const outsideTitle= data.FireTriangle[2].outsideTitle;
  const outsideText= data.FireTriangle[2].outsideText;
  const note = data.FireTriangle[page].note;
  const previousPage = () => {
    if (page === 0) {
      changePage(2, true);
    } else {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page === 2) {
      changePage(4);
    } else {
        if (canContinue && page !== 1) { 
            setPage(prev => prev + 1);
        }
    }
  };
  return (
    <div className="FireTriangle">
      <BackBtn previousPage={previousPage} />
      <button className={`nextBtn ${(canContinue && page !== 1) ? "" : "nextBtnDisable"}`} onClick={nextPage}>
        {nextBtn}
      </button>
      <p className="title title-FireTriangle">{title}</p>
      {page === 0 && <p className="FireTriangle-item FireTriangle-air" onClick={() => setCanContinue(true)}>{air}</p>}
      {page === 0 && <p className="FireTriangle-item FireTriangle-heat" onClick={() => setCanContinue(true)}>{heat}</p>}
      {page === 0 && <p className="FireTriangle-item FireTriangle-material" onClick={() => setCanContinue(true)}>{material}</p>}
      {page === 0 && <FireTriangleSvg fireOn={canContinue}/>}
     {page === 1 && <div className="FireTriangle-secondPage">
        <img src={carFireOut} alt="carFireOut" className="carFireOut" />
        <div className="carFireOut-item carFireOut-isolation">
            <img src={isolationImg} alt="isolationImg" className="carFireOut-item-img" />
            <p>{isolation}</p>
        </div>
        <div className="carFireOut-item carFireOut-cooling">
            <img src={coolingImg} alt="coolingImg" className="carFireOut-item-img" />
            <p>{cooling}</p>
        </div>
        <div className="carFireOut-item carFireOut-strangle">
            <img src={strangleImg} alt="strangleImg" className="carFireOut-item-img" onClick={() => setShowStrangleText(true)} />
            <p>{strangle}</p>
        </div>
      </div>}
      {page <  2 && <p className={`FireTriangle-note FireTriangle-note${page}`}>{note}</p>}
      {(showStrangleText == true) && <div className="blur-background"></div>}
      {(showStrangleText == true) && (
        <div className="FireTriangle-text-box"> <button className="close-btn" onClick={() => {
            setShowStrangleText(false);
            setPage(prev => prev + 1);
          }}>
            X
          </button>
         
          <h3>{strangleTitle}</h3>
            <p className="semiTitle">{strangleSemiTitle}</p>
            <p>{strangleText}</p>
        </div>
      )}
      {page === 2 && <div className="FireTriangle-thirdPage">
        <div className="FireTriangle-thirdPage-textBox">
            <p className="boldText">{insideTitle}</p>
            <p>{insideText}</p>
        </div>
        <img src={carOnFire} alt="carOnFire" className="FireTriangle-carOnFire" />
        <div className="FireTriangle-thirdPage-textBox">
            <p className="boldText">{outsideTitle}</p>
            <p>{outsideText}</p>
        </div>
      </div>}
    </div>
  );
}

export default FireTriangle;
