import React from 'react'
import { useState } from "react";
import HabitsStart from './HabitsStart';
import DrivingHabits from './DrivingHabits';
import EffectDrive from './EffectDrive';
import Obstacle from './Obstacle';
import DriveDanger from './DriveDanger';
import DriveSteps from './DriveSteps';
import SafetySystem from './SafetySystem';
import Directions from './Directions';
import { useData } from "../context/DataContext";

function Habits({changeToSection, startingPage}) {
  const { data } = useData();
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
      {page === 1 && <DrivingHabits changePage={handleChangePage} startPage={startPage}/>}
      {page === 2 && <EffectDrive changePage={handleChangePage}/>}
      {page === 3 && <Obstacle changePage={handleChangePage}/>}
      {page === 4 && <DriveDanger changePage={handleChangePage}/>}
      {page === 5 && <DriveSteps changePage={handleChangePage}/>}
      {page === 6 && <SafetySystem changePage={handleChangePage}/>}
     {page === 7 && <Directions onNext={() => handleChangeSection(2)}
          screenId={0}
          screenData={data.Directions[0].screen[0]}
          onBack={() => handleChangePage(6)}/>}
    </div>
  )
}

export default Habits
