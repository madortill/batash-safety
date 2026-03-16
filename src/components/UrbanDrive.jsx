import React from "react";
import { useState } from "react";
import { useData } from "../context/DataContext";
import "../css/SpecialConditions.css";

import BackBtn from "./BackBtn";
import UrbanDriveSvg from "./UrbanDriveSvg";

function UrbanDrive({ changePage, startPage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.UrbanDrive[0].title;
  const note = data.UrbanDrive[0].note;
  const items = data.UrbanDrive[0].items;
  const [activeItem, setActiveItem] = useState(null);
  const [visitedItems, setVisitedItems] = useState([]);
  const canContinue = startPage === 1 || visitedItems.length === items.length;

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleClosePopup = () => {
    if (activeItem !== null) {
      setVisitedItems((prev) =>
        prev.includes(activeItem) ? prev : [...prev, activeItem],
      );
    }
    setActiveItem(null);
  };
  const previousPage = () => {
    changePage(1, true);
  };
  const nextPage = () => {
    changePage(3);
  };
  return (
    <div className="UrbanDrive">
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${!canContinue ? "nextBtnDisable" : ""}`}
        disabled={!canContinue}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-SpecialConditions">{title}</p>
      <p className="note-UrbanDrive">{note}</p>
      <UrbanDriveSvg itemClicked={handleItemClick} />
      {activeItem !== null && <div className="blur-background"></div>}

      {activeItem !== null && (
        <div className={`UrbanDrive-popup UrbanDrive-popup${activeItem}`}>
          <button
            className={`close-btn close-btn-UrbanDrive${activeItem}`}
            onClick={handleClosePopup}
          >
            X
          </button>

          <p className="UrbanDrive-popup-title">{items[activeItem].title}</p>

          <p className="UrbanDrive-popup-text">{items[activeItem].text}</p>
        </div>
      )}
    </div>
  );
}

export default UrbanDrive;
