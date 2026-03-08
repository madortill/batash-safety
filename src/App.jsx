import React from "react";
import { Routes, Route} from "react-router-dom";

import "./css/App.css";
import Start from "./components/Start";

import til from "./assets/images/til.svg";
import bahad6 from "./assets/images/bahad6.png";
import Content from "./components/Content";


function App() {
  return (
    <>
      <div className="symbols">
        <img src={bahad6} alt="bahad6" className="bahad6" />
        <img src={til} alt="til" className="til" />
      </div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/content" element={<Content/>} />
      </Routes>
    </>
  );
}

export default App;
