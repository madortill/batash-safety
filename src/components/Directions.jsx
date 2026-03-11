import React from "react";
import { useState } from "react";
import "../css/Habits.css";
import { useData } from "../context/DataContext";
import BackBtn from "./BackBtn";
import warningSign from "../assets/images/warning-sign.svg";

function Directions({ onNext, onBack, screenData, screenId }) {
  const [page, setPage] = useState(0);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.Directions[0].title;
  const { warningImg, content } = screenData;
  const bubble = data.Directions[0].bubble;
  const nextPage = () => {
    if (page === 2) {
    console.log("next")
      onNext();
    }
  };
  const previousPage = () => {
    onBack();
  };
  return (
    <div className="Directions">
       <BackBtn previousPage={previousPage} />
      <p className="DirectionsTitle">{title}</p>
      <div className={`roadBackground ${screenId === 0 ? "road-page-0" : ""}`}>
        {content.map((block, i) => (
          <p key={i}>
            {block.parts.map((part, j) => {
              const isLast = j === block.parts.length - 1;

              const content =
                part.type === "bold" ? (
                  <strong>{part.value}</strong>
                ) : part.type === "highlight" ? (
                  <span className="highlightText">{part.value}</span>
                ) : (
                  <span>{part.value}</span>
                );

              return (
                <React.Fragment key={j}>
                  {content}
                  {!isLast && " "}
                </React.Fragment>
              );
            })}
          </p>
        ))}
        <img
          src={warningSign}
          alt="warningSign"
          className="DirectionsWarningSign"
          onClick={() => setPage(1)}
        />
        <img src={bubble} alt="bubble" className="DirectionsBubble" />
      </div>
      <button
        className={`nextBtn ${page === 2 ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      {(page === 1 || page === 3) && <div className="blur-background"></div>}
      {page === 1 && (
        <div className="warning1-container">
          <img className="warning1" src={warningImg} alt="warning1" />
          <p className="xbtn xbtn-Directions" onClick={() => setPage(2)}>
            X
          </p>
        </div>
      )}
    </div>
  );
}

export default Directions;
