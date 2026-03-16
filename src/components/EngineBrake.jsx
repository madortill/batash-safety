import React from 'react'
import { useState } from "react";
import { useData } from "../context/DataContext";
import "../css/SpecialConditions.css";

import BackBtn from "./BackBtn";
import StepsList from "./StepsList";

function EngineBrake({ changePage, changeSection }) {
    const { data } = useData();
      const nextBtn = data.general[1].text;
      const title = data.EngineBrake[0].title;
      const text = data.EngineBrake[0].text;
      const steps = data.EngineBrake[0].steps;
      const note = data.EngineBrake[0].note;
      const [canContinue, setCanContinue] = useState(false);
      const previousPage = () => {
        changePage(7);
      };
      const nextPage = () => {
            changeSection(4);
      };
  return (
    <div className='EngineBrake'>
      <BackBtn previousPage={previousPage} />
      <button className={`nextBtn ${canContinue ? "" : "nextBtnDisable"}`} onClick={nextPage}>
        {nextBtn}
      </button>
      <p className="title title-PlanedPullOver">{title}</p>
      <p className="text-EngineBrake">{text}</p>
      <StepsList
         steps={steps}
         onComplete={(done) => setCanContinue(done)}
      />
      <p className="note-PlanedPullOver" >{note}</p>
    </div>
  )
}

export default EngineBrake
