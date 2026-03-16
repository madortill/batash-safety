import React from "react";
import { useData } from "../context/DataContext";
import "../css/SpecialConditions.css";

import BackBtn from "./BackBtn";
import galGalgal from "../assets/images/galGalgal.png";

function Strength({ changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.Strength[0].title;
  const boldText = data.Strength[0].boldText;
  const semiTitle = data.Strength[0].semiTitle;
  const text = data.Strength[0].text;
  const previousPage = () => {
    changePage(6, true);
  };
  const nextPage = () => {
      changePage(8);
  };
  return <div>
    <BackBtn previousPage={previousPage} />
      <button
        className="nextBtn"
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-SpecialConditions">{title}</p>
      <div className="Strength-content">
          <p className="boldText">{boldText}</p>
          <p className="semiTitle">{semiTitle}</p>
          <p>{text}</p>
        </div>
      <div className="galBubble gal-Strength">
                <img
                  src={data.Strength[0].galSrc}
                  className="galBubble-small"
                  alt="galBubble"
                />
                <img className="galImg-small" src={galGalgal} alt="galGalgal" />
              </div>
  </div>;
}

export default Strength;
