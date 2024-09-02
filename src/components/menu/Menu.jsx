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
          {/* <a href="/">Dashboard</a>  BAD EXPERIENCE*/}
          <Link to="/dashboard">Dashboard</Link>
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
        <li>
          <img src={Favorites} alt="Posts" />
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <img src={Favorites} alt="useRef" />
          <Link to="/useRef">useRef</Link>
        </li>
        <li>
          <img src={Favorites} alt="UseMemoPage" />
          <Link to="/UseMemo">UseMemo</Link>
        </li>
        <li>
          <img src={Favorites} alt="UseLayoutEffectPage" />
          <Link to="/UseLayoutEffect">UseLayoutEffectPage</Link>
        </li>
        <li>
          <img src={Favorites} alt="ContextPage" />
          <Link to="/contextPage">ContextPage</Link>
        </li>
        <li>
          <img src={Favorites} alt="products" />
          <Link to="/products">products</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
