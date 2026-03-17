import React from 'react'
import { useState } from "react";
import CarCheck from './CarCheck';
import BeforeDrive from './BeforeDrive';

function Summary({changeToSection}) {
    const [page, setPage] = useState(0);
      const [startPage, setStartPage] = useState(0);
      const pagesMap = {
        0: 0,
        1: 1
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
    <div className='Summary'>
      {page === 0 && <CarCheck changePage={handleChangePage} changeSection={handleChangeSection}/>}
      {page === 1 && <BeforeDrive changePage={handleChangePage}/>}
    </div>
  )
}

export default Summary
