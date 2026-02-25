import React from 'react'
import "../css/Fire.css";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";

function FireSafety({ changePage, changeToSection }) {
    const { data } = useData();
    const nextBtn = data.general[1].text;
    const title = data.FireSafety[0].title;
    const warning = data.FireSafety[0].warning;
    const previousPage = () => {
        changePage(5);
    };
    const nextPage = () => {
        changeToSection(2);
    };
  return (
    <div className='FireSafety'>
      <BackBtn previousPage={previousPage} />
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
      <p className='title title-FireSafety'>{title}</p>
      <div className='FireSafety-content'>
      {warning.map((warning, index) => (
          <div
            key={index}
            className={`
              warning-FireSafety
            `}
          >
            {warning}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FireSafety
