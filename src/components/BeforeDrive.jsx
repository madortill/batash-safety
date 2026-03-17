import React from "react";
import { useData } from "../context/DataContext";
import "../css/Summary.css";

import BackBtn from "./BackBtn";

function BeforeDrive({ changePage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const title = data.CarCheck[0].title;
  const previousPage = () => {
    changePage(0);
  };
  const nextPage = () => {
    changePage(1);
  };
  return <div></div>;
}

export default BeforeDrive;
