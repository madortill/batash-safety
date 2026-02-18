import React from "react";
import "../css/Fire.css";
import { useState } from "react";
import { useData } from "../context/DataContext";
import BackBtn from "./BackBtn";
import StepsList from "./StepsList";

function FirePracticeVideo({ changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.FirePracticeVideo[0].title;
  const steps = data.FirePracticeVideo[0].steps;
  const note = data.FirePracticeVideo[0].note;
  const [canContinue, setCanContinue] = useState(false);
  const previousPage = () => {
    changePage(3, true);
  };
  const nextPage = () => {
    changePage(5);
  };
  return (
    <div className="FirePracticeVideo">
      <BackBtn previousPage={previousPage} />
      <button className={`nextBtn ${canContinue ? "" : "nextBtnDisable"}`} onClick={nextPage}>
        {nextBtn}
      </button>
      <p className="title title-FirePracticeVideo">{title}</p>
      <StepsList
         steps={steps}
         onComplete={(done) => setCanContinue(done)}
      />
      <p className="note-FirePracticeVideo" >{note}</p>
    </div>
  );
}

export default FirePracticeVideo;
