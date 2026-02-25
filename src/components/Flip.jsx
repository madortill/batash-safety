import React from 'react'
import { useState } from "react";
import "../css/Flip.css";
import FlipWhen from './FlipWhen';
import FlipWhere from './FlipWhere';
import FlipStage from './FlipStage';
import FlipHow from './FlipHow';

function Flip({ changePractice, startingPage }) {
    const [page, setPage] = useState(startingPage);
  const handleChangePage = (targetPage, returnToLast = false) => {
    setPage(targetPage);
  };
  const handleChangeSection = (section, returnToLast = false) => {
    if (changePractice) changePractice(section, returnToLast);
  };
  return (
    <div className='Flip'>
     {page === 0 && <FlipWhen changePage={handleChangePage}/>}
     {page === 1 && <FlipWhere changePage={handleChangePage}/>}
     {page === 2 && <FlipStage changePage={handleChangePage}/>}
     {page === 3 &&  <FlipHow changePage={handleChangePage} changeToSection={handleChangeSection} />}
    </div>
  )
}

export default Flip
