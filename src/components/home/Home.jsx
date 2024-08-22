import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";
import Content from "../content/Content";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.adminPanel}>
      <Logo />
      <Navbar />
      <Menu />
      <Content />
    </div>
  );
};

export default Home;
