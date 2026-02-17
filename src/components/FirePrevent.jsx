import React from "react";
import "../css/Fire.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import BackBtn from "./BackBtn";
import img1 from "../assets/images/firePrevent1.png";
import img2 from "../assets/images/firePrevent2.png";
import img3 from "../assets/images/firePrevent3.png";
import img4 from "../assets/images/firePrevent4.png";

function FirePrevent({ changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.FirePrevent[0].title;
  const text1 = data.FirePrevent[0].text1;
  const text2 = data.FirePrevent[0].text2;
  const text3 = data.FirePrevent[0].text3;
  const text4 = data.FirePrevent[0].text4;
  const note = data.FirePrevent[0].note;
  const previousPage = () => {
    changePage(0);
  };
  const nextPage = () => {
    if (allOpened) { 
        changePage(2);
    }
  };

  const cards = [
    { color:  "#214D9B", text: text1, img: img1 },
    { color: "#D13A32", text: text2, img: img2 },
    { color:  "#E69907", text: text3, img: img3 },
    { color: "#F4E6A6", text: text4, img: img4 },
  ];
  const [openCards, setOpenCards] = useState([]);
  const allOpened = openCards.length === cards.length;


  return (
    <div className="FirePrevent">
      <BackBtn previousPage={previousPage} />
      <button className={`nextBtn nextBtn-overBackground ${
            !allOpened ? "nextBtnDisable" : ""
        }`} onClick={nextPage}>
        {nextBtn}
      </button>
      <div className="FirePrevent-content">
        <h2 className="FirePrevent-title">{title}</h2>

        <div className="cardsPrevent-wrapper">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`cardPrevent ${openCards.includes(index) ? "active" : ""} ${index === 3 ? "darkText" : ""}`}
              style={{ backgroundColor: card.color }}
              onClick={() =>
                setOpenCards((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                )
              }
            >
              <div className="cardPrevent-content">
                <img src={card.img} alt="card" className="cardPrevent-img" />

                <div className="cardPrevent-text">{card.text}</div>
              </div>
            </div>
          ))}
        </div>
          <p className="FirePrevent-note">{note}</p>
      </div>
    </div>
  );
}

export default FirePrevent;
