import React from "react";
import "../css/Flip.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";
import galGalgal from "../assets/images/galGalgal.png";

function FlipWhen({changePage, changeToSection}) {
  const [page, setPage] = useState(0);
  const [isDisabled, changeNextBtn] = useState(true);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.FlipWhen[0].title;
  const text = data.FlipWhen[0].text;
  const flip1 = data.FlipWhen[1].flip1;
  const flip2 = data.FlipWhen[1].flip2;
  const flip3 = data.FlipWhen[1].flip3;
  const flip4 = data.FlipWhen[1].flip4;
  const flip5 = data.FlipWhen[1].flip5;
  const flip6 = data.FlipWhen[1].flip6;

      const previousPage = () => {
        changeToSection(0, true);
    };

  const nextPage = () => {
    if (!isDisabled) {
      changePage(1);
    }
  };
  const nextStep = () => {
    setPage(1);
    setTimeout(() => {
        changeNextBtn(false);
    }, 3000);
  };
  return (
    <div className="flipWhen">
      <BackBtn previousPage={previousPage} />
      <p className="title title-flipWhen">{title}</p>
      <p className="text-flipWhen">{text}</p>
      <div className="galBubble gal-flipWhen" onClick={nextStep}>
        <img
          src={data.FlipWhen[0].galSrc}
          className="galBubble-small"
          alt="galBubble"
        />
        <img className="galImg-small" src={galGalgal} alt="galGalgal" />
      </div>
      {page === 1 && <div className="blur-background"></div>}
      {page === 1 && (
        <p className="flipWhen-circle flipWhen-circle1">{flip1}</p>
      )}
      {page === 1 && (
        <p className="flipWhen-circle flipWhen-circle2">{flip2}</p>
      )}
      {page === 1 && (
        <p className="flipWhen-circle flipWhen-circle3">{flip3}</p>
      )}
      {page === 1 && (
        <p className="flipWhen-circle flipWhen-circle4">{flip4}</p>
      )}
      {page === 1 && (
        <p className="flipWhen-circle flipWhen-circle5">{flip5}</p>
      )}
      {page === 1 && (
        <p className="flipWhen-circle flipWhen-circle6">{flip6}</p>
      )}
      <button
        className={`nextBtn nextBtn-overBackground ${
            isDisabled ? "nextBtnDisable" : ""
        }`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  );
}

export default FlipWhen;
