import React from "react";
import { useData } from "../context/DataContext";
import galGalgal from "../assets/images/galGalgal.png";
import road from "../assets/images/end-road.svg";
import "../css/End.css";

function End() {
  const { data } = useData();
  const btnText = data.End[0].btnText;
  return (
    <div className="end">
      <img className="end-road" src={road} alt="road" />
      <div className="galEnd galBubble">
        <img
          src={data.End[0].galSrc}
          className="galBubble-big galHighlixRedBubble"
          alt="galBubble"
        />
        <img
          className="galImg-big galEndImg"
          src={galGalgal}
          alt="galGalgal"
        />
      </div>
      <button
        className="nextBtn nextBtnEnd"
        onClick={() => {
          window.location.href = "https://madortill.github.io/batash-package/";
        }}
      >
        {btnText}
      </button>
    </div>
  );
}

export default End;
