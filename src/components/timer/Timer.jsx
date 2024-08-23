import { useEffect, useState } from "react";
import Card from "../common/Card";
const Timer = () => {
  const [time, setTime] = useState(0);

  // useEffect: Two part: 1: Setup / 2: dependencies
  useEffect(() => {
    console.log("Timer");
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty array dependencies runs once on mount
  return (
    <Card>
      <p>Timer: {time} </p>
    </Card>
  );
};

export default Timer;
