import React from 'react'
import { useState } from "react";
import "../css/Flip.css";
import FlipWhen from './FlipWhen';
import FlipWhere from './FlipWhere';

function Flip({ changeToSection, startingPage }) {
    const [page, setPage] = useState(0);
  const [startPage, setStartPage] = useState(0);
  const pagesMap = {
    0: 0,
    1: 2,
    2: 0,
    3: 0,
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
    <div className='Flip'>
     {page === 0 && <FlipWhen changePage={handleChangePage}/>}
     {page === 1 && <FlipWhere changePage={handleChangePage}/>}
    </div>
  )
}

export default Flip
