import { useState } from "react";
import Button from "../common/Button";

const List = () => {
  const [item, setItem] = useState({ name: "mohammad" });
  const [count, setCount] = useState(1);
  const [items, setItems] = useState([]);

  const handleClick = () => {
    // BAD PRACTICE
    item.name = "Ali";
    // Good
    setItem({ name: "Ali" });
  };

  const handleClickList = () => {
    setCount((c) => c + 1);
    setItems([...items, count]);
    // console.log(items);
  };
  return (
    <div className="my-4 bg-white dark:bg-gray-800  rounded-md p-7">
      <Button
        buttonClick={() => handleClick()}
        title="Click"
        buttonStyle="p-3 border-solid text-white bg-blue-700"
      />
      <Button
        buttonClick={() => handleClickList()}
        title="Update List"
        buttonStyle="p-3 border-solid text-white bg-blue-700"
      />

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* {item.name} */}
    </div>
  );
};

export default List;
