import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import Content from "../../components/content/Content";
import styles from "./home.module.css";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.adminPanel}>
      <Logo />
      <Navbar />
      <Menu />
      <Content>
        <Outlet></Outlet>
      </Content>
    </div>
  );
};

export default Home;
