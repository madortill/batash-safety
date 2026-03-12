import React from "react";
import { useState } from "react";
import SpecialConditionsStart from "./SpecialConditionsStart";
import Urban from "./Urban";

function SpecialConditions({ changeToSection, startingPage }) {
  const [page, setPage] = useState(startingPage);
  const [startPage, setStartPage] = useState(0);
  const pagesMap = {
    0: 0,
    1: 1,
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
  return <div className="SpecialConditions">
   {page === 0 && <SpecialConditionsStart changePage={handleChangePage} changeSection={handleChangeSection} />}
   {page === 1 && <Urban changePage={handleChangePage} startPage={startPage}/>}
  </div>;
}

export default SpecialConditions;
