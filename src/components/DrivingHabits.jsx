import React from "react";
import "../css/Habits.css";
import { useData } from "../context/DataContext";
import { useState } from "react";

import BackBtn from "./BackBtn";

function DrivingHabits({ changePage, startPage = 0 }) {
  const [page, setPage] = useState(startPage);
  const { data } = useData();
  const [isDisabled, changeNextBtn] = useState(true);
  const [openTour, setTourVisibility] = useState(false)
  const nextBtn = data.general[1].text;
  const title = data.DrivingHabits[0].title;
  const semiTitle = data.DrivingHabits[page].semiTitle;
  const text = data.DrivingHabits[page].text;
  const driverTour = data.DrivingHabits[0].driverTour;
  const previousPage = () => {
    if (page === 0) {
      changePage(0);
    } else {
      setPage(prev => prev - 1);
    }
  };
  const nextPage = () => {
    if (!isDisabled || page > 0) {
      if (page === 2) {
        changePage(2);
      } else {
        setPage(prev => prev + 1);
      }
    }
  };
  return (
    <div className="DrivingHabits">
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${isDisabled && page === 0 ? "nextBtnDisable" : ""}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
        <p className="title title-DrivingHabits">{title}</p>
      <div className={`DrivingHabits-content DrivingHabits-content${page}`}>
        <p className="boldText semiTitle">{semiTitle}</p>
        <p>{text}</p>
        {page === 0 && <p className="driverTour-btn" onClick={() => setTourVisibility(true)}>?</p>}
      </div>
      {openTour && <div className="driverTour-text">
        <button className="close-btn" onClick={() => {setTourVisibility(false); changeNextBtn(false)} }>X</button>
        {driverTour}
      </div>}
    </div>
  );
}

export default DrivingHabits;
