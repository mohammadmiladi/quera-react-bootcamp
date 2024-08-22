import styles from "./navbar.module.css";
import Icon from "../../assets/images/icon.svg";
import Search from "../../assets/images/search.png";
const Navbar = () => {
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
        <button>Dark/Light</button>
      </div>
    </div>
  );
};

export default Navbar;
