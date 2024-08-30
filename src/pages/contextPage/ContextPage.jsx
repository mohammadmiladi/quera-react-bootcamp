import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import styles from "../home/home.module.css";
import Child1 from "./Child1";
import { useState } from "react";
import UserContext from "../../context/userContext";
import ThemeColorContext, { themes } from "../../context/themeContext";

const ContextPage = () => {
  const [user, setUser] = useState("Mohammad");

  return (
    <ThemeColorContext.Provider value={themes.dark}>
      <div className={styles.adminPanel}>
        <Logo />
        <Navbar />
        <Menu />
        <div>
          <Child1 />
        </div>
      </div>
    </ThemeColorContext.Provider>
  );
};

export default ContextPage;
export { UserContext };
