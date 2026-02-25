import React from 'react'
import "../css/PullOver.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";
import  PullOverImg from "../assets/images/pullOverImg.png";

function PullOverStart({ changePage, changeToSection }) {
    const { data } = useData();
    const nextBtn = data.general[1].text;
    const title = data.PullOverStart[0].title;
    const previousPage = () => {
        changeToSection(1, true);
    };
    const nextPage = () => {
      changePage(1);
    };
  return (
    <div className='PullOverStart'>
      <BackBtn previousPage={previousPage} />
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
      <p className="title title-PullOverStart">{title}</p>
      <img className='PullOverImg' src={PullOverImg} alt="PullOverImg" />
    </div>
  )
}

export default PullOverStart
