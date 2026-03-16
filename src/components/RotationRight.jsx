import React from "react";
import { useState } from "react";
import { useData } from "../context/DataContext";
import "../css/SpecialConditions.css";

import BackBtn from "./BackBtn";
import lanePlaceImg from "../assets/images/lanePlaceImg.png";
import wheelWorkImg from "../assets/images/wheelWorkImg.png";

function RotationRight({ changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.RotationRight[0].title;
  const card1Title = data.RotationRight[0].card1Title;
  const card2Title = data.RotationRight[0].card2Title;
  const card1Text = data.RotationRight[0].card1Text;
  const card2Text = data.RotationRight[0].card2Text;
  const [openBlue, setOpenBlue] = useState(false);
  const [openOrange, setOpenOrange] = useState(false);

  const bothOpened = openBlue && openOrange;
  const previousPage = () => {
    changePage(4);
  };
  const nextPage = () => {
    changePage(6);
  };
  return (
    <div className="RotationRight">
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${!bothOpened ? "nextBtnDisable" : ""}`}
        disabled={!bothOpened}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-SpecialConditions">{title}</p>
      <div className="RotationRight-cards">
        <div className={`RotationRightCard ${openBlue ? "open" : ""}`}>
          <button
            className="RotationRightCard-title"
            onClick={() => setOpenBlue(!openBlue)}
          >
            <img
              src={wheelWorkImg}
              alt="wheelWorkImg"
              className="RotationRightCard-img"
            />
            {card1Title}
          </button>

          <div className="RotationRightCard-content">{card1Text}</div>
        </div>
        <div className={`RotationRightCard orange  ${openOrange ? "open" : ""}`}>
          <button
            className="RotationRightCard-title"
            onClick={() => setOpenOrange(!openOrange)}
          >
            <img
              src={lanePlaceImg}
              alt="wheelWorkImg"
              className="RotationRightCard-img"
            />
            {card2Title}
          </button>

          <div className="RotationRightCard-content">{card2Text}</div>
        </div>
      </div>
    </div>
  );
}

export default RotationRight;
