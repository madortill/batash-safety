import React from 'react'
import About from './About'
import BackBtn from './BackBtn'

import safetyCard from "../assets/images/safetyCard.png";
import letsStartBtn from "../assets/images/letsStartBtn.png";

function StartPage({changePage}) {

    const nextPage = () => {
        changePage(1);
      }
  return (
    <div className='startPage'>
        <BackBtn previousPage={() => {
          window.location.href = "https://madortill.github.io/batash-package/";
        }}/>
      <About/>
      <div className="start-main-content">
        <p className="start-main-content-text">הוראות בטיחות</p>
        <img src={safetyCard} alt="safetyCard" className="safetyCard"/>
      </div>
      <img src={letsStartBtn} alt="startBtn" className="letsStartBtn" onClick={nextPage}/>
    </div>
  )
}

export default StartPage
