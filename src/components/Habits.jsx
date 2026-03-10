import React from 'react'
import { useState } from "react";
import HabitsStart from './HabitsStart';
import DrivingHabits from './DrivingHabits';
import EffectDrive from './EffectDrive';
import Obstacle from './Obstacle';

function Habits({changeToSection, startingPage}) {
    const [page, setPage] = useState(0);
        const [startPage, setStartPage] = useState(0);
        const pagesMap = {
          0: 0,
          1: 2, 
          2: 0, 
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
    <div className='Habits'>
      {page === 0 && <HabitsStart changePage={handleChangePage}/>}
      {page === 1 && <DrivingHabits changePage={handleChangePage} startingPage={startPage}/>}
      {page === 2 && <EffectDrive changePage={handleChangePage}/>}
      {page === 3 && <Obstacle changePage={handleChangePage}/>}
    </div>
  )
}

export default Habits
