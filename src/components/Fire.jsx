import React from 'react'
import { useState } from "react";
import "../css/Fire.css";
import FireStart from './FireStart';
import FirePrevent from './FirePrevent';
import FirePreventDrive from './FirePreventDrive';
import FireTriangle from './FireTriangle';
import FirePracticeVideo from './FirePracticeVideo';
import FirePractice from './FirePractice';
import FireSafety from './FireSafety';

function Fire({changePractice, startingPage}) {
    const [page, setPage] = useState(startingPage);
    const [startPage, setStartPage] = useState(0);
    const pagesMap = {
      0: 0,
      1: 0,
      2: 2,
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
  return (
    <div className='Fire'>
     {page === 0 && <FireStart changePage={handleChangePage} changeToSection={handleChangeSection}/>}
     {page === 1 && <FirePrevent  changePage={handleChangePage} />}
     {page === 2 && <FirePreventDrive changePage={handleChangePage} startPage={startPage} />}
     {page === 3 && <FireTriangle changePage={handleChangePage} startPage={startPage} />}
     {page === 4 && <FirePracticeVideo changePage={handleChangePage} />}
     {page === 5 && <FirePractice changePage={handleChangePage} />}
     {page === 6 && <FireSafety changePage={handleChangePage} changeToSection={handleChangeSection}/>}
    </div>
  )
}

export default Fire
