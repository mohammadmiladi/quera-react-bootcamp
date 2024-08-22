import Toggle from "../toggle/Toggle";
import Stepper from "../stepper/Stepper";
import List from "../list/List";

const Content = () => {
  return (
    <div className=" bg-gray-100 py-2 px-7">
      <Toggle />
      <Stepper />
      <List />
    </div>
  );
};

export default Content;
