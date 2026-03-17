import React from "react";
import { useData } from "../context/DataContext";
import { useState } from "react";
import "../css/Summary.css";
import { Navigate, useNavigate } from "react-router-dom";
import BackBtn from "./BackBtn";

function BeforeDrive({ changePage }) {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.BeforeDrive[0].title;
  const note = data.BeforeDrive[0].note;
  const warning = data.BeforeDrive[0].warning;
  const card1Title = data.BeforeDrive[0].card1Title;
  const card2Title = data.BeforeDrive[0].card2Title;
  const card3Title = data.BeforeDrive[0].card3Title;
  const card1Text = data.BeforeDrive[0].card1Text;
  const card2Text = data.BeforeDrive[0].card2Text;
  const card3Text = data.BeforeDrive[0].card3Text;
  const [openBlue, setOpenBlue] = useState(false);
  const [openOrange, setOpenOrange] = useState(false);
  const [openRed, setOpenRed] = useState(false);

  const bothOpened = openBlue && openOrange && openRed;
  const previousPage = () => {
    changePage(0);
  };
  const nextPage = () => {
    if (page === 1) {
      navigate("/end");
    } else {
      setPage(1);
    }
  };
  return (
    <div>
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn nextBtn-overBackground ${!bothOpened ? "nextBtnDisable" : ""}`}
        disabled={!bothOpened}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-SpecialConditions">{title}</p>
      <p className="note-RotationRight">{note}</p>
      <div className="RotationRight-cards">
        <div className={`RotationRightCard ${openBlue ? "open" : ""}`}>
          <button
            className="RotationRightCard-title"
            onClick={() => setOpenBlue(!openBlue)}
          >
            {card1Title}
          </button>

          <div className="RotationRightCard-content">{card1Text}</div>
        </div>
        <div
          className={`RotationRightCard orange  ${openOrange ? "open" : ""}`}
        >
          <button
            className="RotationRightCard-title"
            onClick={() => setOpenOrange(!openOrange)}
          >
            {card2Title}
          </button>

          <div className="RotationRightCard-content">{card2Text}</div>
        </div>
        <div className={`RotationRightCard red  ${openRed ? "open" : ""}`}>
          <button
            className="RotationRightCard-title"
            onClick={() => setOpenRed(!openRed)}
          >
            {card3Title}
          </button>

          <div className="RotationRightCard-content">{card3Text}</div>
        </div>
      </div>
      {page === 1 && <div className="blur-background"></div>}
       {page === 1 && (
        <div className="warning1-container">
          <img className="warning1" src={warning} alt="warning1" />
        </div>
      )}
    </div>
  );
}

export default BeforeDrive;
