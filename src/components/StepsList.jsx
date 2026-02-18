import { useState, useEffect } from "react";
import "../css/StepsList.css";

function StepsList({ steps, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep === steps.length - 1) {
      onComplete?.(true); // אם עברו על כולם
    }
  }, [currentStep, steps.length, onComplete]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="StepsList">
      <div className="StepsList-items">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`
              StepsList-item
              ${index === currentStep ? "StepsList-item-active" : ""}
            `}
          >
            <span className="StepsList-number">
              {index + 1}.
            </span>
            <span className="StepsList-text">
              {step}
            </span>
          </div>
        ))}
      </div>

      <div className="StepsList-arrows">
        <button
          className="StepsList-arrow"
          onClick={prevStep}
        >
          ↑
        </button>

        <button
          className="StepsList-arrow"
          onClick={nextStep}
        >
          ↓
        </button>
      </div>
    </div>
  );
}

export default StepsList;
