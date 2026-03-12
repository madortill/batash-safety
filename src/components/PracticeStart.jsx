import React from 'react'
import "../css/Practice.css";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";
import practiceImg from "../assets/images/practiceImg.png";

function PracticeStart({changePractice, changeSection}) {
    const { data } = useData();
      const nextBtn = data.general[1].text;
      const title = data.PracticeStart[0].title;
      const previousPage = () => {
    changeSection(1, true);
  };
  const nextPage = () => {
      changePractice(1);
  };
  return (
    <div className='PracticeStart'>
       <BackBtn previousPage={previousPage} />
      <button
        className="nextBtn"
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className='title title-PracticeStart'>{title}</p>
      <img src={practiceImg} alt="practiceImg" className='practiceImg' />
    </div>
  )
}

export default PracticeStart
