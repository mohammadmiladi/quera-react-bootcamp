import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import Content from "../../components/content/Content";
import styles from "../home/home.module.css";
import Form from "../../components/form/Form";
import { Outlet } from 'react-router-dom'

const ComponentsPage = () => {
  return (
    <div className={styles.adminPanel}>
      <Logo />
      <Navbar />
      <Menu />
      <div>
        <h3>Components:</h3>
        <Outlet />
      </div>
    </div>
  );
};

export default ComponentsPage;
