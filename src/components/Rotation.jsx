import React from "react";
import { useState } from "react";
import { useData } from "../context/DataContext";
import "../css/SpecialConditions.css";

import BackBtn from "./BackBtn";
import arrow from "../assets/images/arrow.svg";

function Rotation({ changePage }) {
  const [page, setPage] = useState(0);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.Rotation[0].title;
  const note = data.Rotation[0].note;
  const semiTitle = data.Rotation[page].semiTitle;
  const text = data.Rotation[page].text;

  const previousPage = () => {
    changePage(2, true);
  };
  const nextPage = () => {
    changePage(4);
  };
  return (
    <div>
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${page === 3 ? "" : "nextBtnDisable"}`}
        disabled={page < 3}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-SpecialConditions">{title}</p>
      <p className="note-UrbanDrive">{note}</p>
      <div className="Rotation-explantion">
        <p className="boldText">{semiTitle}</p>
        <p>{text}</p>
        {page !== 0 && (
          <img
            className="Rotation-arrow Rotation-arrow-right"
            src={arrow}
            alt="arrow-right"
            onClick={() => setPage((prev) => prev - 1)}
          />
        )}
        {page !== 3 && (
          <img
            className="Rotation-arrow Rotation-arrow-left"
            src={arrow}
            alt="arrow-left"
            onClick={() => setPage((prev) => prev + 1)}
          />
        )}
      </div>
      <div className={`Rotation-road Rotation-road${page}`}>
        <p
          className={`Rotation-road-text Rotation-road-text3 ${page < 3 ? "Rotation-road-text-disabled" : ""}`}
        >
          {data.Rotation[3].semiTitle}
        </p>
        <p
          className={`Rotation-road-text Rotation-road-text2 ${page < 2 ? "Rotation-road-text-disabled" : ""}`}
        >
          {data.Rotation[2].semiTitle}
        </p>
        <p
          className={`Rotation-road-text Rotation-road-text1 ${page < 1 ? "Rotation-road-text-disabled" : ""}`}
        >
          {data.Rotation[1].semiTitle}
        </p>
        <p className={`Rotation-road-text Rotation-road-text0`}>
          {data.Rotation[0].semiTitle}
        </p>
      </div>
    </div>
  );
}

export default Rotation;
