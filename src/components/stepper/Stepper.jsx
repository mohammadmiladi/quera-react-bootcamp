import Button from "../common/Button";
import { useState } from "react";
import Card from "../common/Card";

const Stepper = () => {
  const [step, setStep] = useState(1);

  const changeStep = (payload) => {
    setStep(payload);
  };
  const prev = () => {
    step > 1 && setStep(step - 1);
  };
  const next = () => {
    step < 3 && setStep(step + 1);
  };

  const buttonStyle =
    "border-solid text-black py-1 px-7 rounded bg-blue-200 border";

  const buttonActiveStyle =
    "border-solid text-white py-1 px-7 rounded bg-blue-600 border";
  return (
    <Card>
      <div className=" flex gap-10 items-center justify-center">
        <Button
          buttonStyle={step >= 1 ? buttonActiveStyle : buttonStyle}
          buttonClick={() => changeStep(1)}
          title="مرحله اول"
        />
        <Button
          buttonStyle={step >= 2 ? buttonActiveStyle : buttonStyle}
          buttonClick={() => changeStep(2)}
          title="مرحله دوم"
        />
        <Button
          buttonStyle={step >= 3 ? buttonActiveStyle : buttonStyle}
          buttonClick={() => changeStep(3)}
          title="مرحله سوم"
        />
      </div>
      <div>
        <p>{step}</p>
      </div>
      <div className="flex gap-10">
        <Button
          title="Prev"
          buttonClick={() => prev()}
          buttonStyle=" p-4 bg-violet-700 rounded text-white"
        />
        <Button
          title="Next"
          buttonClick={() => next()}
          buttonStyle=" p-4 bg-violet-700 rounded text-white"
        />
      </div>
    </Card>
  );
};

export default Stepper;
