import React from 'react'
import { useState } from "react";
import "../css/Fire.css";
import FireStart from './FireStart';
import FirePrevent from './FirePrevent';
import FirePreventDrive from './FirePreventDrive';

function Fire({changeToSection, startingPage}) {
    const [page, setPage] = useState(0);
  const handleChangePage = (targetPage, returnToLast = false) => {
    setPage(targetPage);
  };
  const handleChangeSection = (section, returnToLast = false) => {
    if (changeToSection) changeToSection(section, returnToLast);
  };
  return (
    <div className='Fire'>
     {page === 0 && <FireStart changePage={handleChangePage} changeToSection={handleChangeSection}/>}
     {page === 1 && <FirePrevent  changePage={handleChangePage} />}
     {page === 2 && <FirePreventDrive changePage={handleChangePage} />}
    </div>
  )
}

export default Fire
