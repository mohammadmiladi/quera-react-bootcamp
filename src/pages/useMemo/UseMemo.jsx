import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import styles from "../home/home.module.css";
import { useEffect, useState, useMemo } from "react";

const UseMemoPage = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  function largeComputed() {
    let findItem = data.filter((item) => item.userId == 1);
    findItem.push(7);
    findItem.push(8);
    findItem.push(9);
    findItem.push(10);
    findItem.push("10");
    findItem.push("test");
    findItem.push("Mohammad");
    findItem.push("quera");

    console.log(findItem);

    return findItem[12];
  }

  const performanceData = useMemo(() => largeComputed(), [data]);

  return (
    <div className={styles.adminPanel}>
      <Logo />
      <Navbar />
      <Menu />
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <div>{performanceData}</div>
      </div>
    </div>
  );
};

export default UseMemoPage;
