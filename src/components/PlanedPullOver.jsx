import React from 'react'
import "../css/PullOver.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";
import StepsList from "./StepsList";

function PlanedPullOver({ changePage }) {
    const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.PlanedPullOver[0].title;
  const steps = data.PlanedPullOver[0].steps;
  const note = data.PlanedPullOver[0].note;
  const [canContinue, setCanContinue] = useState(false);
  const previousPage = () => {
    changePage(0);
  };
  const nextPage = () => {
    if (canContinue) {
        changePage(2);
    }
  };
  return (
    <div className='PlanedPullOver'>
       <BackBtn previousPage={previousPage} />
      <button className={`nextBtn ${canContinue ? "" : "nextBtnDisable"}`} onClick={nextPage}>
        {nextBtn}
      </button>
      <p className="title title-PlanedPullOver">{title}</p>
      <StepsList
         steps={steps}
         onComplete={(done) => setCanContinue(done)}
      />
      <p className="note-PlanedPullOver" >{note}</p>
    </div>
  )
}

export default PlanedPullOver
