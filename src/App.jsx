import { useState } from "react";
import StepOne from "./components/StepOne";
import StepThree from "./components/StepThree";
import StepTwo from "./components/StepTwo";
import StepFour from "./components/StepFour";

const App = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="bg-[#fff] min-h-screen text-[#111112]">
      <div className="bg-[#fff] p-[60px] shadow-lg max-w-[890px] mx-auto my-auto">
        <h2 className="text-center font-semibold text-5xl mb-[60px]">Fill out the box</h2>
        
        {step === 1 ? (
          <StepOne
            setStep={setStep} />
        ) : step === 2 ? (
            <StepTwo 
            setStep={setStep} />
        ): step === 3 ? (
            <StepThree setStep={setStep} />
        ) : (
            <StepFour />
        )}
        
      </div>
    </div>
  );
};

export default App;
