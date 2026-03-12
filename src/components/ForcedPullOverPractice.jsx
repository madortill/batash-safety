import React from "react";
import "../css/PullOver.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";
import StepsList from "./StepsList";

function ForcedPullOverPractice({ changePage, changeToBigSection }) {
  const [page, setPage] = useState(0);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.ForcedPullOverPractice[page].title;
  const steps = data.ForcedPullOverPractice[page].steps;
  const note = data.ForcedPullOverPractice[0].note;
  const [canContinue, setCanContinue] = useState(false);
  const previousPage = () => {
    if (page === 0) {
      changePage(2, true);
    } else {
      setPage(0);
    }
  };
  const nextPage = () => {
    if (canContinue) {
      if (page === 1) {
        changeToBigSection(3);
      } else {
        setPage(1);
        setCanContinue(false);
      }
    }
  };
  return (
    <div className="ForcedPullOverPractice">
      <BackBtn previousPage={previousPage} />
      <button
        className={`nextBtn ${canContinue ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      <p className="title title-ForcedPullOverPractice">{title}</p>
      <StepsList
        key={page}
        steps={steps}
        onComplete={(done) => setCanContinue(done)}
      />
      <p className="note-ForcedPullOverPractice">{note}</p>
    </div>
  );
}

export default ForcedPullOverPractice;
