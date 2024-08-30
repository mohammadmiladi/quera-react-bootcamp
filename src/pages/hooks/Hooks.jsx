import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import Content from "../../components/content/Content";
import styles from "../home/home.module.css";
import { Outlet } from "react-router-dom";

const HooksPage = () => {
  return (
    <div className={styles.adminPanel}>
      <Logo />
      <Navbar />
      <Menu />
      <div>
        <h3>Hooks:</h3>
        <Outlet />
      </div>
    </div>
  );
};

export default HooksPage;
