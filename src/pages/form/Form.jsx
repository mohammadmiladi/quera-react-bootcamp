import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import Content from "../../components/content/Content";
import styles from "../home/home.module.css";
import Form from "../../components/form/Form";

const FormPage = () => {
  return (
    <div className={styles.adminPanel}>
      <Logo />
      <Navbar />
      <Menu />
      <div>
        <Form></Form>
      </div>
    </div>
  );
};

export default FormPage;
