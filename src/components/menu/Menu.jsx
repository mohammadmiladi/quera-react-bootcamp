import styles from "./menu.module.css";
import Dashboard from "../../assets/images/dashboard.png";
import Products from "../../assets/images/products.png";
import Favorites from "../../assets/images/favorites.png";

const Menu = () => {
  return (
    <aside className={styles.menu}>
      <ul>
        <li>
          <img src={Dashboard} alt="dashboard" />
          <a href="/">Dashboard</a>
        </li>
        <li>
          <img src={Products} alt="products" />
          <a href="/">Products</a>
        </li>
        <li>
          <img src={Favorites} alt="Favorites" />
          <a href="/">Favorites</a>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
