import React from 'react'
import { useState } from "react";
import ContentStart from "./ContentStart";
import Flip from "./Flip";
import Fire from "./Fire";
import PullOver from "./PullOver";

function Practices({changeToSection, startingPage}) {
    const [page, setPage] = useState(startingPage);
    const [startPage, setStartPage] = useState(0);
    const pagesMap = {
      0: 3,
      1: 6, 
      2: 3, 
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
      {page == 0 && <Flip changePractice={handleChangePractice} startingPage={startPage} />}
      {page == 1 && <Fire changePractice={handleChangePractice} startingPage={startPage}/>}
      {page == 2 && <PullOver changePractice={handleChangePractice} startingPage={startPage} changeSection={handleChangeSection}/>}
    </div>
  )
}

export default Practices
