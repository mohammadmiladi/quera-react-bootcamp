import Toggle from "../toggle/Toggle";
import Stepper from "../stepper/Stepper";
import List from "../list/List";
import Timer from "../timer/Timer";
import ProductList from "../productList/ProductList";
import Form from "../form/Form";
import { useState } from "react";

const Content = () => {
  const [items, setItems] = useState([]);

  return (
    <div className=" bg-gray-100 py-2 px-7">
      <Timer />
      <Toggle />
      <Stepper />
      <List />
      <Form items={items} setItems={(items) => setItems(items)} />
      <ProductList items={items} />
    </div>
  );
};

export default Content;
