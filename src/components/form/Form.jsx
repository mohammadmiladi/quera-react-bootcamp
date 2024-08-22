import Input from "../common/Input";

const Form = () => {
  return (
    <div className="mt-4 mb-20 bg-white dark:bg-gray-800 rounded-md p-7">
      <Input
        placeholder="Product Name"
        label="Product Name"
        inputStyle="border-solid border border-gray-400"
      />
    </div>
  );
};

export default Form;
