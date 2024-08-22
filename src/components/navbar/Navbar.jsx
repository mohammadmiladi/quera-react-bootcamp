import styles from "./navbar.module.css";
import Icon from "../../assets/images/icon.svg";
import Search from "../../assets/images/search.png";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
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
        <button onClick={() => darkModeHandler()}>
          {dark && <IoSunny />}
          {!dark && <IoMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
