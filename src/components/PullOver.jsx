import React from 'react'
import { useState } from "react";
import "../css/PullOver.css";
import PullOverStart from './PullOverStart';
import PlanedPullOver from './PlanedPullOver';
import ForcedPullOver from './ForcedPullOver';
import ForcedPullOverPractice from './ForcedPullOverPractice';

function PullOver({changePractice, startingPage, changeSection}) {
    const [page, setPage] = useState(startingPage);
    const [startPage, setStartPage] = useState(0);
    const pagesMap = {
      0: 0,
      1: 0,
      2: 1,
      3: 2,
      4: 1,
      5: 0,
      6: 0
    };
    const handleChangePage = (targetPage, returnToLast = false) => {
      setPage(targetPage);
      if (returnToLast) {
        setStartPage(pagesMap[targetPage]);
      } else {
        setStartPage(0);
      }
    };
  const handleChangeSection = (section, returnToLast = false) => {
    if (changePractice) changePractice(section, returnToLast);
  };
  const handleChangeBigSection = (section, returnToLast = false) => {
    if (changeSection) changeSection(section, returnToLast);
  };
  return (
    <div className='PullOver'>
      {page === 0 && <PullOverStart changePage={handleChangePage} changeToSection={handleChangeSection}/>}
      {page === 1 && <PlanedPullOver changePage={handleChangePage}/>}
      {page === 2 && <ForcedPullOver changePage={handleChangePage} startPage={startPage}/>}
      {page === 3 && <ForcedPullOverPractice changePage={handleChangePage} startPage={startPage} changeToBigSection={handleChangeBigSection}/>}
    </div>
  )
}

export default PullOver
