import Toggle from "../toggle/Toggle";
import Stepper from "../stepper/Stepper";
import List from "../list/List";
import Timer from "../timer/Timer";
import TitleChanger from "../titleChanger/TitleChanger";
import Posts from "../posts/Posts";
import LocalStorage from "../localStorage/LocalStorage";
import Resize from "../resize/Resize";
import ProductList from "../productList/ProductList";
import Form from "../form/Form";
import { useState } from "react";
import ConditionalRendering from "../conditionalRendering/ConditionalRendering";

const Content = () => {
  const [items, setItems] = useState([]);

  return (
    <div className=" bg-gray-100 py-2 px-7">
      <ConditionalRendering />
      <TitleChanger />
      <Posts />
      <LocalStorage />
      <Resize />
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
