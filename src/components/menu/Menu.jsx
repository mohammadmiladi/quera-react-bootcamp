import styles from "./menu.module.css";
import Dashboard from "../../assets/images/dashboard.png";
import Products from "../../assets/images/products.png";
import Favorites from "../../assets/images/favorites.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <aside className={styles.menu}>
      <ul>
        <li>
          <img src={Dashboard} alt="dashboard" />
          {/* <a href="/">Dashboard</a> */}
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <img src={Products} alt="products" />
          <Link to="/form">Form</Link>
        </li>
        <li>
          <img src={Favorites} alt="Favorites" />
          <Link to="/stepper">Stepper</Link>
        </li>
        <li>
          <img src={Favorites} alt="Components" />
          <Link to="/components">Components</Link>
        </li>
        <li>
          <Link to="/hooks">
            <img src={Favorites} alt="Hooks" />
            <p>Hooks</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
