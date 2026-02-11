import React from 'react'
import "../css/Content.css";
import { useData } from "../context/DataContext";
import navbar from "../assets/images/navbar.svg";

function ContentStart() {
    const { data } = useData();
    const contentStartTitle = data.contentStart[0].text;
    return (
      <div className="ContentStart">
        <p className="content-start-title">{contentStartTitle}</p>
        <img src={navbar} alt="navbar" className="navbar-start" />
      </div>
    );
}

export default ContentStart
