import Toggle from "../toggle/Toggle";
import Stepper from "../stepper/Stepper";
import List from "../list/List";
import Form from "../form/Form";

const Content = () => {
  return (
    <div className=" bg-gray-100 py-2 px-7">
      <Toggle />
      <Stepper />
      <List />
      <Form />
    </div>
  );
};

export default Content;
