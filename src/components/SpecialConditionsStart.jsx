import React from "react";
import "../css/SpecialConditions.css";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";
import SpecialConditionsImg from "../assets/images/SpecialConditionsImg.png";

function SpecialConditionsStart({ changeSection, changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.SpecialConditionsStart[0].title;
  const previousPage = () => {
    changeSection(2, true);
  };
  const nextPage = () => {
    changePage(1);
  };
  return (
    <div className="SpecialConditionsStart">
      <BackBtn previousPage={previousPage} />
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
      <p className="title title-SpecialConditionsStart">{title}</p>
      <img
        src={SpecialConditionsImg}
        alt="SpecialConditionsImg"
        className="SpecialConditionsImg"
      />
    </div>
  );
}

export default SpecialConditionsStart;
