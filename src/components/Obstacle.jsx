import React from "react";
import "../css/Habits.css";
import { useData } from "../context/DataContext";
import { useState } from "react";

import BackBtn from "./BackBtn";

function Obstacle({ changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.Obstacle[0].title;
  const text = data.Obstacle[0].text;
  const note = data.Obstacle[0].note;
  const staticTitle = data.Obstacle[0].staticTitle;
  const staticText = data.Obstacle[0].staticText;
  const dynamicTitle = data.Obstacle[0].dynamicTitle;
  const dynamicText = data.Obstacle[0].dynamicText;
  const [openBlue, setOpenBlue] = useState(false);
  const [openOrange, setOpenOrange] = useState(false);

  const bothOpened = openBlue && openOrange;
  const previousPage = () => {
    changePage(2);
  };
  const nextPage = () => {
    if (bothOpened) {
      changePage(4);
    }
  };
  return (
    <div className="Obstacle">
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${!bothOpened ? "nextBtnDisable" : ""}`}
        disabled={!bothOpened}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-Habits">{title}</p>
      <p className="text-Obstacle">{text}</p>
      <div className="Obstacle-cards">
        <div className={`obstacleCard ${openBlue ? "open" : ""}`}>
          <button
            className="obstacleCard-title"
            onClick={() => setOpenBlue(!openBlue)}
          >
            {staticTitle}
          </button>

          <div className="obstacleCard-content">{staticText}</div>
        </div>
        <div className={`obstacleCard orange  ${openOrange ? "open" : ""}`}>
          <button
            className="obstacleCard-title"
            onClick={() => setOpenOrange(!openOrange)}
          >
            {dynamicTitle}
          </button>

          <div className="obstacleCard-content">{dynamicText}</div>
        </div>
      </div>
      <p className="obstacle-note">{note}</p>
    </div>
  );
}

export default Obstacle;
