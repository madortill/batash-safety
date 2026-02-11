import React from 'react'
import backBtn from "../assets/images/backBtn.svg";
import "../css/Start.css";
import { useData } from "../context/DataContext";

function BackBtn({previousPage}) {
    const { data } = useData();
    const backBtnText = data.general[0].text;
  return (
    <div className="backBtn" >
    <img src={backBtn} alt="backBtn" className="backBtnImg" onClick={previousPage}/>
    <p className="backBtnText" >{backBtnText}</p>
  </div>
  )
}

export default BackBtn
