import React from "react";
import "../css/Habits.css";
import { useData } from "../context/DataContext";

import galGalgal from "../assets/images/galGalgal.png";

function HabitsStart({ changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.HabitsStart[0].title;
  const text = data.HabitsStart[0].text;
  const nextPage = () => {
    changePage(1);
  };
  return (
    <div className="HabitsStart">
      <p className="title title-DrivingHabits">{title}</p>
      <p className="text-HabitsStart">{text}</p>
      <div className="galBubble gal-HabitsStart">
        <img
          src={data.HabitsStart[0].galSrc}
          className="galBubble-small"
          alt="galBubble"
        />
        <img className="galImg-small" src={galGalgal} alt="galGalgal" />
      </div>
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
    </div>
  );
}

export default HabitsStart;
