import React from "react";
import "../css/Flip.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import map from "../assets/images/mapLocation.png";
import loactionBackground from "../assets/images/loactionBackground.svg";

import BackBtn from "./BackBtn";

function FlipWhere({changePage}) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.FlipWhen[0].title;
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
    </div>
  );
}

export default FlipWhere;
