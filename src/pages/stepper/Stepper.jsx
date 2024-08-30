import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import Content from "../../components/content/Content";
import styles from "../home/home.module.css";
import Stepper from "../../components/stepper/Stepper";

const StepperPage = () => {
  return (
    <div className={styles.adminPanel}>
      <Logo />
      <Navbar />
      <Menu />
      <div>
        <Stepper></Stepper>
      </div>
    </div>
  );
};

export default StepperPage;
