import styles from "./logo.module.css";
import LogoImage from "../../assets/images/react.svg";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src={LogoImage} alt="login" />
    </div>
  );
};

export default Logo;
