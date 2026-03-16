import React from 'react'
import { useData } from "../context/DataContext";
import "../css/Summary.css";

import BackBtn from "./BackBtn";

function CarCheck({changeSection, changePage}) {
   const { data } = useData();
    const nextBtn = data.general[1].text;
    const title = data.CarCheck[0].title;
    const CarCheckImg = data.CarCheck[0].imgSrc;
    const previousPage = () => {
    changeSection(3, true);
  };
  const nextPage = () => {
    changePage(1);
  };
  return (
    <div className='CarCheck'>
      <BackBtn previousPage={previousPage} />
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
      <p className="title title-Summary">{title}</p>
      <img src={CarCheckImg} alt="CarCheckImg" className='CarCheckImg' />
    </div>
  )
}

export default CarCheck
