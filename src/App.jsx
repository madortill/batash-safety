import React from "react";
import { useData } from "./context/DataContext";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/App.css";
import Start from "./components/Start";

import til from "./assets/images/til.svg";
import bahad6 from "./assets/images/bahad6.png";


function App() {
  return (
    <>
      <div className="symbols">
        <img src={bahad6} alt="bahad6" className="bahad6" />
        <img src={til} alt="til" className="til" />
      </div>
      <Routes>
        <Route path="/" element={<Start/>} />
      </Routes>
    </>
  );
}

export default App;
