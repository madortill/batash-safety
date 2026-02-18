import React from "react";
import "../css/Fire.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";
import carSide from "../assets/images/car-side.png";
import road from "../assets/images/road.svg";
import gasStation from "../assets/images/gas-station.png";

function FirePreventDrive({ changePage, startPage }) {
    const [page, setPage] = useState(startPage);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.FirePreventDrive[0].title;
  const previousPage = () => {
    if (page === 0) {  
        changePage(1);
    } else {
        setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page === 2) {
        changePage(3)
    } else {
        setPage(page + 1);
    }
  };
  return (
    <div className="FirePreventDrive">
      <BackBtn previousPage={previousPage} />
     {page < 2 && <img src={road} alt="road" className="FirePreventDrive-road" />}
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
      <p className="title title-FirePreventDrive">{title}</p>
      <div className="FirePreventDrive-text">
      <p className="boldText">{data.FirePreventDrive[page].semiTitle}</p>
      <p>{data.FirePreventDrive[page].text}</p>
      </div>
     {page < 2 && <img src={carSide} alt="carSide" className={`FirePreventDrive-carSide ${page === 1 ? "driveAnimation" : ""}`} />}
     {page === 2 && <img src={gasStation} alt="cargasStationSide" className="FirePreventDrive-gasStation" />}
    </div>
  );
}

export default FirePreventDrive;
