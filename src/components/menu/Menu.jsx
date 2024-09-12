import styles from "./menu.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsBarChartSteps } from "react-icons/bs";
import { FaFileWaveform } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { LuComponent } from "react-icons/lu";
import { MdWebhook } from "react-icons/md";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { GiFireflake } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { PiMemory } from "react-icons/pi";
import { BsLayoutWtf } from "react-icons/bs";
import { FaWindowRestore } from "react-icons/fa";

const Menu = () => {
  const [menus] = useState([
    {
      name: "dashboard",
      route: "/dashboard",
      image: <MdSpaceDashboard />,
      id: 1,
    },
    {
      name: "form",
      route: "/form",
      image: <FaFileWaveform />,
      id: 2,
    },
    {
      name: "stepper",
      route: "/stepper",
      image: <BsBarChartSteps />,
      id: 3,
    },
    {
      name: "components",
      route: "/components",
      image: <LuComponent />,
      id: 4,
    },
    {
      name: "hooks",
      route: "/hooks",
      image: <MdWebhook />,
      id: 5,
    },
    {
      name: "posts",
      route: "/posts",
      image: <BsFillPostcardHeartFill />,
      id: 6,
    },
    {
      name: "use ref",
      route: "/useRef",
      image: <GiFireflake />,
      id: 7,
    },
    {
      name: "use memo",
      route: "/useMemo",
      image: <PiMemory />,
      id: 8,
    },
    {
      name: "use layout effect",
      route: "/useLayoutEffect",
      image: <BsLayoutWtf />,
      id: 9,
    },
    {
      name: "context",
      route: "/contextPage",
      image: <FaWindowRestore />,
      id: 10,
    },
    {
      name: "products",
      route: "/products",
      image: <MdOutlineProductionQuantityLimits />,
      id: 11,
    },
    {
      name: "Users",
      route: "/users",
      image: <MdOutlineProductionQuantityLimits />,
      id: 12,
    },
    {
      name: "Add User",
      route: "/add-user",
      image: <MdOutlineProductionQuantityLimits />,
      id: 15,
    },
    {
      name: "Posts Comments",
      route: "/posts-comments",
      image: <MdOutlineProductionQuantityLimits />,
      id: 17,
    },
  ]);

  return (
    <aside className={styles.menu}>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id}>
            {menu.image}
            <Link to={menu.route}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
