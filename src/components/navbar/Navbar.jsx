import styles from "./navbar.module.css";
import Icon from "../../assets/images/icon.svg";
import Search from "../../assets/images/search.png";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
        <button onClick={() => toggleTheme()}>
          {theme === "light" ? <IoMoon /> : <IoSunny />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
