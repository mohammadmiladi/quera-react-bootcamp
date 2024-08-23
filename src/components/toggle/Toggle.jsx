import { useState } from "react";
import Card from "../common/Card";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const onHandleToggle = () => setIsOn((prevState) => !prevState);

  const light = "bg-blue-200 p-2 text-black rounded";
  const dark = "bg-blue-600 p-2 text-white rounded";

  return (
    <Card>
      <button onClick={onHandleToggle} className={isOn ? light : dark}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
      <p>{isOn ? "True" : "False"}</p>
    </Card>
  );
};

export default Toggle;
