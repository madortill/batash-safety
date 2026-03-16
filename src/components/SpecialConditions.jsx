import React from "react";
import { useState } from "react";
import SpecialConditionsStart from "./SpecialConditionsStart";
import Urban from "./Urban";
import UrbanDrive from "./UrbanDrive";
import Rotation from "./Rotation";
import GripLoss from "./GripLoss";
import RotationRight from "./RotationRight";
import GearSpeed from "./GearSpeed";
import Strength from "./Strength";
import EngineBrake from "./EngineBrake";

function SpecialConditions({ changeToSection, startingPage }) {
  const [page, setPage] = useState(startingPage);
  const [startPage, setStartPage] = useState(0);
  const pagesMap = {
    0: 0,
    1: 1,
    2: 1,
    6: 1
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
  return <div className="SpecialConditions">
   {page === 0 && <SpecialConditionsStart changePage={handleChangePage} changeSection={handleChangeSection} />}
   {page === 1 && <Urban changePage={handleChangePage} startPage={startPage}/>}
   {page === 2 && <UrbanDrive changePage={handleChangePage} startPage={startPage}/>}
   {page === 3 && <Rotation changePage={handleChangePage} />}
   {page === 4 && <GripLoss changePage={handleChangePage} />}
   {page === 5 && <RotationRight changePage={handleChangePage}/>}
   {page === 6 && <GearSpeed changePage={handleChangePage} startPage={startPage}/>}
   {page === 7 && <Strength changePage={handleChangePage}/>}
   {page === 8 && <EngineBrake changePage={handleChangePage} changeSection={handleChangeSection}/>}
  </div>;
}

export default SpecialConditions;
