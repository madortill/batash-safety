import React from 'react'
import { useState } from "react";
import "../css/Fire.css";
import FireStart from './FireStart';
import FirePrevent from './FirePrevent';
import FirePreventDrive from './FirePreventDrive';
import FireTriangle from './FireTriangle';
import FirePracticeVideo from './firePracticeVideo';

function Fire({changeToSection, startingPage}) {
    const [page, setPage] = useState(0);
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
    if (changeToSection) changeToSection(section, returnToLast);
  };
  return (
    <div className='Fire'>
     {page === 0 && <FireStart changePage={handleChangePage} changeToSection={handleChangeSection}/>}
     {page === 1 && <FirePrevent  changePage={handleChangePage} />}
     {page === 2 && <FirePreventDrive changePage={handleChangePage} startPage={startPage} />}
     {page === 3 && <FireTriangle changePage={handleChangePage} startPage={startPage} />}
     {page === 4 && <FirePracticeVideo changePage={handleChangePage} />}
    </div>
  )
}

export default Fire
