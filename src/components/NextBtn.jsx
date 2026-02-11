import React from 'react'
import { useData } from "../context/DataContext";

function NextBtn({nextPage}) {
  const { data } = useData();
const nextBtn = data.general[1].text;
  return (
    <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
  )
}

export default NextBtn
