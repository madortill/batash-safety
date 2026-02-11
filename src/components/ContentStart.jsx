import React from 'react'
import "../css/Content.css";
import { useData } from "../context/DataContext";
import navbar from "../assets/images/navbar.svg";

function ContentStart({changeToSection}) {
    const { data } = useData();
    const contentStartTitle = data.contentStart[0].text;
    const nextPage = () => {
        changeToSection(1);
    }   
    return (
      <div className="ContentStart">
        <p className="content-start-title">{contentStartTitle}</p>
        <img src={navbar} alt="navbar" className="navbar-start svg-wrapper" onClick={nextPage} />
      </div>
    );
}

export default ContentStart
