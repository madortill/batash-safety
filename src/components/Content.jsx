import React from "react";
import "../css/Content.css";
import { useState } from "react";
import ContentStart from "./ContentStart";
import Flip from "./Flip";

function Content() {
  const [section, setSection] = useState(0);
  const [sectionStartPages, setSectionStartPages] = useState({});
  const [navSection, setNavSection] = useState(0);
  const SECTION_RETURN_PAGE_MAP = {
    1: 1, // KnowCar – עמוד אחרון
    2: 11, // Defender – עמוד סיום
    3: 6, // Highlix – לדוגמה
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
      {section == 1 && <Flip/>}
    </div>
  );
}

export default Content;
