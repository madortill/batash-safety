import React from "react";
import "../css/Flip.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import map from "../assets/images/mapLocation.png";

import BackBtn from "./BackBtn";

function FlipWhere({ changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.FlipWhere[0].title;
  const text1 = data.FlipWhere[0].text1;
  const text2 = data.FlipWhere[0].text2;
  const previousPage = () => {
    changePage(0);
  };
  const nextPage = () => {
    changePage(2);
  };
  return (
    <div className="FlipWhere">
      <BackBtn previousPage={previousPage} />
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
      <p className="title title-flipWhere">{title}</p>
      <div className="flipWhere-content">
        <div className="flipWhere-text">{text1}</div>
        <img src={map} alt="map" className="flipWhere-map" />
        <div className="flipWhere-text">{text2}</div>
      </div>
    </div>
  );
}

export default FlipWhere;
