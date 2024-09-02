import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import styles from "../home/home.module.css";
import { useRef, useEffect, useState } from "react";

const UseRefPage = () => {
  // ------ DOM ------
  //   const inputRef = useRef(null);

  //   useEffect(() => {
  //     console.log(inputRef);
  //     inputRef.current?.focus();
  //   }, []);

  // ------ Persisting data ------
  //   const [count, setCount] = useState(0);

  //   let prevCount = 0;
  //   const prevCountRef = useRef(null);

  //   useEffect(() => {
  //     prevCount = count;
  //   }, [count]);

  //   const prevCount = prevCountRef.current;

  // ------ Timer ------

  const [isRunning, setIsRunning] = useState(false);
  const timeoutRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    timeoutRef.current = setTimeout(() => {
      alert("Timer Finished");
      setIsRunning(false);
    }, 3000);
  };

  const stopTimer = () => {
    clearTimeout(timeoutRef.current);
    setIsRunning(false);
  };

  return (
    <div>
      {/* <input
          ref={inputRef}
          className="p-4 border border-solid border-black"
          type="text"
        /> */}
      {/* <p>Current: {count}</p>
        <p>Prev: {prevCount}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="border border-solid"
        >
          Increment
        </button> */}
      <button className="border border-solid" onClick={startTimer}>
        Start Timer
      </button>
      <button className="border border-solid" onClick={stopTimer}>
        Stop Timer
      </button>
    </div>
  );
};

export default UseRefPage;
