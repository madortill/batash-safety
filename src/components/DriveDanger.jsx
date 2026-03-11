import React from "react";
import "../css/Habits.css";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";
import driveDangerImg from "../assets/images/driveDangerImg.svg";

function DriveDanger({ changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.DriveDanger[0].title;
  const dangers = data.DriveDanger[0].dangers;
  const colors = ["redBox", "orangeBox", "blueBox", "whiteBox"];
  const previousPage = () => {
    changePage(3);
  };
  const nextPage = () => {
    changePage(5);
  };
  return (
    <div className="DriveDanger">
      <BackBtn previousPage={previousPage} />
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
      <p className="title title-Habits">{title}</p>
      <img
        src={driveDangerImg}
        alt="driveDangerImg"
        className="driveDangerImg"
      />
      {dangers.map((text, i) => (
        <p key={i} className={`dangerBox ${colors[i % colors.length]} dangerBox${i}`}>
          {text}
        </p>
      ))}
    </div>
  );
}

export default DriveDanger;
