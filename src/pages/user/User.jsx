import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const User = () => {
  const [user, setUser] = useState();
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData(retryCount = 3) {
    await axios
      .get(`https://reqres.in/api/users/${userId}`, {
        headers: {
          Accept: "application/json",
          client_type: "Admin"
        },
        // cancelToken
      })
      .then((res) => {
        setUser(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (retryCount === 0) {
          setLoading(false);
          setError("خطایی رخ داده است");
        } else {
          setTimeout(() => {
            fetchUserData(retryCount - 1);
          }, 1000);
        }
      });

    // Put Example
    //   axios
    //   .put("https://reqres.in/api/users/${userId}", formData)
    //   .then((res) => {
    //     //   console.log(res);
    //     navigate("/users");
    //   })
    //   .catch((err) => {
    //     setError(err);
    //   });

    // Delete Example
    //   axios
    //   .delete("https://reqres.in/api/users/${userId}")
    //   .then((res) => {
    //     //   console.log(res);
    //     navigate("/users");
    //   })
    //   .catch((err) => {
    //     setError(err);
    //   });
  }

  if (!loading) {
    if (!error) {
      return (
        <div>
          <Link to="/users">
            <IoArrowBackOutline></IoArrowBackOutline>
          </Link>
          <div className="p-5 rounded shadow-md bg-white">
            <img
              src={user.avatar}
              className=" w-30 h-30 rounded-full mx-auto "
              alt="avatar"
            />
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
          </div>
        </div>
      );
    } else {
      return <p className=" text-red-600">{error}</p>;
    }
  } else {
    return <p>Loading</p>;
  }
};

export default User;
