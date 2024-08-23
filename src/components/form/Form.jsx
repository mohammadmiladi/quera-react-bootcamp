import Input from "../common/Input";
import Button from "../common/Button";
import Textarea from "../common/Textarea";
import { useState } from "react";

const Form = () => {
  // const [productName, setProductName] = useState("");
  const [formData, setFormData] = useState({
    productName: "",
    discount: "",
    tags: "",
    price: "",
    description: "",
    id: new Date().getTime(),
    // id: (Math.random() * 100).toFixed(0),
  });

  const [productNameError, setProductNameError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (formData.price < 100000) {
      alert("باید مبلغ بیشتر از ۱۰۰۰۰ باشد");
      return;
    }
    if (!formData.productName.length) {
      setProductNameError("نام محصول اجباری است");
      return;
    }
    console.log(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      productName: "",
      discount: "",
      tags: "",
      price: "",
      description: "",
      id: new Date().getTime(),
    });

    setProductNameError("");
  };

  return (
    <form
      onSubmit={submitForm}
      className="mt-4 mb-20 bg-white dark:bg-gray-800 rounded-md p-7"
    >
      <div className="grid grid-cols-2 gap-7 grid-rows-1">
        <div>
          <Input
            placeholder="Product Name"
            label="Product Name"
            value={formData.productName}
            inputError={productNameError}
            onChange={(event) =>
              setFormData({ ...formData, productName: event.target.value })
            }
            inputStyle={`bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border ${
              productNameError ? "border-red-400" : "border-gray-400"
            }`}
          />
          <Input
            placeholder="Discount"
            label="Discount"
            value={formData.discount}
            onChange={(event) =>
              setFormData({ ...formData, discount: event.target.value })
            }
            inputStyle=" bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border border-gray-400"
          />
          <Input
            placeholder="Tags"
            label="Tags"
            value={formData.tags}
            onChange={(event) =>
              setFormData({ ...formData, tags: event.target.value })
            }
            inputStyle=" bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border border-gray-400"
          />
        </div>
        <div>
          <Input
            placeholder="Price"
            label="Price"
            value={formData.price}
            onChange={(event) =>
              setFormData({ ...formData, price: event.target.value })
            }
            inputStyle=" bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border border-gray-400"
          />
          <Textarea
            placeholder="Description"
            label="Description"
            value={formData.description}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
            textareaStyle=" bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border border-gray-400"
          />
        </div>
        <div>
          <Button
            buttonStyle="rounded bg-blue-500 py-1 px-7 text-white"
            title="Save"
            type="submit"
            // buttonClick={(e) => submitForm(e)}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
