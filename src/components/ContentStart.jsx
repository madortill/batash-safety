import React from 'react'
import "../css/Content.css";
import { useData } from "../context/DataContext";
import TiresNavbar from "./TiresNavbar";

function ContentStart({changeToSection}) {
    const { data } = useData();
    const contentStartTitle = data.contentStart[0].text;
    const nextPage = () => {
        changeToSection(1);
    }   
    return (
      <div className="ContentStart">
        <p className="content-start-title">{contentStartTitle}</p>
        <div className="svg-wrapper">
        <TiresNavbar className="navbar-start" contentStart={true} changeToSection={changeToSection}/>
      </div>
      </div>
    );
}

export default ContentStart
