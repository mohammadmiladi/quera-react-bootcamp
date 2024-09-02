import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import Content from "../../components/content/Content";
import styles from "../home/home.module.css";
import Stepper from "../../components/stepper/Stepper";
import { useEffect, useRef, useLayoutEffect } from "react";

const UseLayoutEffectPage = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "Miladi";
  }, []);
  useLayoutEffect(() => {
    inputRef.current.value = "Miladi";
  }, []);

  return (
    <div>
      <input
        className="border border-solid"
        type="text"
        value="Mohammad"
        ref={inputRef}
      />
    </div>
  );
};

export default UseLayoutEffectPage;
