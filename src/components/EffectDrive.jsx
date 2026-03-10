import React from 'react'
import "../css/Habits.css";
import { useData } from "../context/DataContext";
import { useState } from "react";

import BackBtn from "./BackBtn";
import carTriangle from "../assets/images/car-triangle.svg";
import galGalgal from "../assets/images/galGalgal.png";

function EffectDrive({changePage}) {
    const [page, setPage] = useState(0);
      const { data } = useData();
      const nextBtn = data.general[1].text;
  const title = data.EffectDrive[0].title;
  const text = data.EffectDrive[0].text;
  const driver = data.EffectDrive[0].driver;
  const road = data.EffectDrive[0].road;
  const car = data.EffectDrive[0].car;
   const galSrc = data.EffectDrive[0].galSrc;
    const previousPage = () => {
      changePage(1);
  };
  const nextPage = () => {
      if (page === 1) {
        changePage(3);
      } else {
        setPage(1);
    }
  };
  return (
    <div className='EffectDrive'>
      <BackBtn previousPage={previousPage} />
      <button
        className="nextBtn nextBtn-overBackground"
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-Habits">{title}</p>
      <p className="EffectDrive-item EffectDrive-driver">{driver}</p>
      <p className="EffectDrive-item EffectDrive-road">{road}</p>
      <p className="EffectDrive-item EffectDrive-car" >{car}</p>
      <img src={carTriangle} alt="carTriangle" className='carTriangle' />
      <p className='EffectDrive-text'>{text}</p>
       {page === 1 && <div className="blur-background"></div>}
            {page == 1 && (
              <div className="gal-FirePractice galBubble">
                <img src={galSrc} className="galBubble-big" alt="galBubble" />
                <img className="galImg-big" src={galGalgal} alt="galGalgal" />
              </div>
            )}
    </div>
  )
}

export default EffectDrive
