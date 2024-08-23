import styles from "./navbar.module.css";
import Icon from "../../assets/images/icon.svg";
import Search from "../../assets/images/search.png";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [dark, setDark] = useState("");

  // useEffect(() => {
  //   const d = localStorage.getItem("darkMode");
  //   if (d !== null) {
  //     setDark(d === "true");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (dark !== null) {
  //     localStorage.setItem("darkMode", dark);
  //     if (dark) {
  //       document.body.classList.add("dark");
  //     } else {
  //       document.body.classList.remove("dark");
  //     }
  //   }
  // }, [dark]);

  // const darkModeHandler = () => {
  //   setDark(!dark);
  //   document.body.classList.toggle("dark");
  // };

  return (
    <div className={styles.navbar}>
      <div>
        <div>
          <img src={Icon} alt="hamburger-menu" />
        </div>
        <div className={styles.search}>
          <img src={Search} alt="search" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div>
        <button onClick={() => setDark(!dark)}>
          {dark && <IoSunny />}
          {!dark && <IoMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
