import React from 'react'
import "../css/Fire.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";

function FireStart({ changePage, changeToSection }) {
    const { data } = useData();
    const nextBtn = data.general[1].text;
    const title = data.FireStart[0].title;
    const text1 = data.FireStart[0].text1;
    const text2 = data.FireStart[0].text2;
    const text3 = data.FireStart[0].text3;
    const previousPage = () => {
        changeToSection(1, true);
    };
    const nextPage = () => {
      changePage(1);
    };
  return (
    <div className='FireStart'>
      <BackBtn previousPage={previousPage} />
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
      <p className="title title-flipWhere">{title}</p>
      <div className='fireStart-content'>
        <div className='fireStart-bubble'>{text1}</div>
        <div className='fireStart-bubble'>{text2}</div>
        <div className='fireStart-bubble'>{text3}</div>
      </div>
    </div>
  )
}

export default FireStart
