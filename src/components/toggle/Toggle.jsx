import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const onHandleToggle = () => setIsOn((prevState) => !prevState);

  const light = "bg-blue-200 p-2 text-black rounded";
  const dark = "bg-blue-600 p-2 text-white rounded";

  return (
    <div className="bg-white rounded-lg p-4">
      <button onClick={onHandleToggle} className={isOn ? light : dark}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
      <p>{isOn ? "True" : "False"}</p>
    </div>
  );
};

export default Toggle;
