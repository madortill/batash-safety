import React from 'react'
import { useState } from "react";
import Flip from "./Flip";
import Fire from "./Fire";
import PullOver from "./PullOver";
import PracticeStart from './PracticeStart';

function Practices({changeToSection, startingPage}) {
    const [page, setPage] = useState(startingPage);
    const [startPage, setStartPage] = useState(0);
    const pagesMap = {
      0: 0,
      1: 3,
      2: 6, 
      3: 3, 
    };
    const handleChangePractice = (targetPage, returnToLast = false) => {
      setPage(targetPage);
      if (returnToLast) {
        setStartPage(pagesMap[targetPage]);
      } else {
        setStartPage(0);
      }
    };
    const handleChangeSection = (section, returnToLast = false) => {
        if (changeToSection) changeToSection(section, returnToLast);
      };
  return (
    <div className='Practices'>
      {page === 0 && <PracticeStart changePractice={handleChangePractice} changeSection={handleChangeSection}/>}
      {page == 1 && <Flip changePractice={handleChangePractice} startingPage={startPage} />}
      {page == 2 && <Fire changePractice={handleChangePractice} startingPage={startPage}/>}
{page == 3 && (
  <PullOver
    changePractice={handleChangePractice}
    startingPage={startingPage === 3 ? 3 : startPage}
    changeSection={handleChangeSection}
  />
)}    </div>
  )
}

export default Practices
