import React from 'react'
import { useState } from "react";
import CarCheck from './CarCheck';

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
    </div>
  )
}

export default Summary
