import React from "react";
import "../css/PullOver.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";
import road from "../assets/images/road-black.svg";
import galGalgal from "../assets/images/galGalgal.png";

function ForcedPullOver({ changePage, startPage }) {
  const [page, setPage] = useState(startPage);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.ForcedPullOver[page].title;
  const danger = data.ForcedPullOver[1].danger;
  const reasons = data.ForcedPullOver[0].reasons;
  const galSrc = data.ForcedPullOver[2].galSrc;

  const getBoxClass = (index) => {
    switch (index) {
      case 0:
        return "box-yellow";
      case 1:
        return "box-blue";
      case 2:
        return "box-red";
      case 3:
        return "box-blue-dark";
      default:
        return "box-blue";
    }
  };

  const previousPage = () => {
    if (page === 0) {
      changePage(1);
    } else {
      setPage((prev) => prev - 1);
    }
  };
  const nextPage = () => {
    if (page === 2) {
      changePage(3);
    } else {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <div className="ForcedPullOver">
      <BackBtn previousPage={previousPage} />
      <button className="nextBtn nextBtn-overBackground" onClick={nextPage}>
        {nextBtn}
      </button>
      <p className={`title title-ForcedPullOver ${page > 0 ? "title-ForcedPullOver1" : ""}`}>{title}</p>
      <img src={road} alt="road" className="road-ForcedPullOver" />
      {page === 0 &&
        reasons.map((item, index) => (
          <div
            key={index}
            className={`ForcedPullOver-box ${getBoxClass(index)} ${
              item.length > 10 ? "ForcedPullOver-box-large" : ""
            }`}
          >
            {item}
          </div>
        ))}
      {page > 0 && (
        <div className="ForcedPullOver-danger-container">
          {danger.map((item, index) => (
            <img
              src={item}
              alt="warning"
              key={index}
              className={`ForcedPullOver-danger ForcedPullOver-danger-${index}`}
            />
          ))}
        </div>
      )}
      {page === 2 && <div className="blur-background"></div>}
      {page == 2 && (
        <div className="gal-FirePractice galBubble">
          <img src={galSrc} className="galBubble-big" alt="galBubble" />
          <img className="galImg-big" src={galGalgal} alt="galGalgal" />
        </div>
      )}
    </div>
  );
}

export default ForcedPullOver;
