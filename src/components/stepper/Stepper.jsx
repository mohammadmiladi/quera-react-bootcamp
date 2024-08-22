import Button from "../common/Button";
import { useState } from "react";

const Stepper = () => {
  const [step, setStep] = useState(1);
  
  const changeStep = (payload) => {
    setStep(payload);
  };

  return (
    <div className="my-4 bg-white rounded-md p-7">
      <div className=" flex gap-10 items-center justify-center">
        <Button buttonClick={() => changeStep(1)} title="مرحله اول" />
        <Button buttonClick={() => changeStep(2)} title="مرحله دوم" />
        <Button buttonClick={() => changeStep(3)} title="مرحله سوم" />
      </div>
      <p>{step}</p>
    </div>
  );
};

export default Stepper;
