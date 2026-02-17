import React from "react";
import "../css/Content.css";
import { useState } from "react";
import ContentStart from "./ContentStart";
import Flip from "./Flip";
import Fire from "./Fire";

function Content() {
  const [section, setSection] = useState(2);
  const [sectionStartPages, setSectionStartPages] = useState({});
  const [navSection, setNavSection] = useState(0);
  const SECTION_RETURN_PAGE_MAP = {
    1: 3, 
    2: 11, 
    3: 6, 
    4: 1,
  };
  const handleChangeSection = (targetSection, returnToLast = false) => {
    // חזרה לתפריט הראשי
    if (targetSection === 6) {
      setSection(0);
      return;
    }
    
    setSection(targetSection);
    
    setSectionStartPages((prev) => ({
      ...prev,
      [targetSection]: returnToLast
        ? SECTION_RETURN_PAGE_MAP[targetSection] ?? 0
        : 0,
    }));

    setNavSection((prev) => (targetSection > prev ? targetSection : prev));
  };
  return (
    <div className="content">
      {section == 0 && <ContentStart changeToSection={handleChangeSection} />}
      {section == 1 && <Flip changeToSection={handleChangeSection} startingPage={sectionStartPages[1] ?? 0} />}
      {section == 2 && <Fire changeToSection={handleChangeSection} />}
    </div>
  );
}

export default Content;
