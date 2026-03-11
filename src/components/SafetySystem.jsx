import React, { useState } from "react";
import { useData } from "../context/DataContext";
import BackBtn from "./BackBtn";
import "../css/Habits.css";

function SafetySystem({ changePage }) {
  const { data } = useData();

  const nextBtn = data.general[1].text;
  const title = data.SafetySystem[0].title;
  const note = data.SafetySystem[0].note;
  const items = data.SafetySystem[0].items;

  const [activeItem, setActiveItem] = useState(null);
  const [visitedItems, setVisitedItems] = useState([]);

  const canContinue = visitedItems.length === items.length;

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleClosePopup = () => {
    if (activeItem !== null) {
      setVisitedItems((prev) =>
        prev.includes(activeItem) ? prev : [...prev, activeItem]
      );
    }
    setActiveItem(null);
  };

  const previousPage = () => {
    changePage(5);
  };

  const nextPage = () => {
      changePage(7);
  };

  return (
    <div className="SafetySystem">
      <BackBtn previousPage={previousPage} />

      <button
        className={`nextBtn ${!canContinue ? "nextBtnDisable" : ""}`}
        disabled={!canContinue}
        onClick={nextPage}
      >
        {nextBtn}
      </button>

      <p className="title title-Habits">{title}</p>
      <p className="SafetySystem-note">{note}</p>

      <div className={`SafetySystem-grid ${activeItem !== null ? "gridDimmed" : ""}`}>
        {items.map((item, index) => {
          const isVisited = visitedItems.includes(index);

          return (
            <div
              key={index}
              className={`SafetySystem-item ${isVisited ? "visited" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="SafetySystem-item-img"
              />
              <p className="SafetySystem-item-title">{item.title}</p>
            </div>
          );
        })}
      </div>

      {activeItem !== null && <div className="blur-background"></div>}

      {activeItem !== null && (
        <div className="SafetySystem-popup">
          <button className="close-btn" onClick={handleClosePopup}>
            X
          </button>

          <p className="SafetySystem-popup-title">
            {items[activeItem].title}
          </p>

          <p className="SafetySystem-popup-text">
            {items[activeItem].text}
          </p>
        </div>
      )}
    </div>
  );
}

export default SafetySystem;