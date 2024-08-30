import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import Content from "../../components/content/Content";
import styles from "../home/home.module.css";

const NotFound = () => {
  return (
    <div className={styles.adminPanel}>
      <Logo />
      <Navbar />
      <Menu />
      <div>صفحه شما پیدا نشد :(</div>
    </div>
  );
};

export default NotFound;
