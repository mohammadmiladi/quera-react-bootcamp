import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
  });

  const [error, setError] = useState();

  const navigate = useNavigate();

  const controller = new AbortController();
  const signal = controller.signal;

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/register", formData, {
        signal,
      })
      .then((res) => {
        //   console.log(res);
        navigate("/users");
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Request was Aborted");
        } else {
          setError(err);
        }
      });

    setTimeout(() => {
      controller.abort();
    }, 500);
  };
  // const submitForm = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("https://reqres.in/api/users", formData, {
  //       signal,
  //     })
  //     .then((res) => {
  //       //   console.log(res);
  //       navigate("/users");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setError(err);
  //     });
  // };

  return (
    <div>
      <form onSubmit={submitForm}>
        <Input
          placeholder="name"
          label="name"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
          inputStyle=" bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border border-gray-400"
        />
        <Input
          placeholder="job"
          label="job"
          value={formData.job}
          onChange={(event) =>
            setFormData({ ...formData, job: event.target.value })
          }
          inputStyle=" bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border border-gray-400"
        />

        <Button
          buttonStyle="rounded bg-blue-500 py-1 px-7 text-white"
          title="Add User"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddUser;
