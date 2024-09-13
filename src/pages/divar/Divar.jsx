import { useEffect } from "react";
import store from "../../store/index";
// Selector
// import { useDispatch, useSelector } from "react-redux";

import { useDispatch, connect } from "react-redux";
import { createUser, fetchUsers } from "../../store/users/users";
import { createAds } from "../../store/ads/ads";

// store.dispatch({
//   type: "users/addUser",
//   payload: {
//     firstName: "Mohammad",
//     lastName: "Miladi",
//     email: "mohammad@gmail.com",
//     age: 31,
//     balance: 290000,
//   },
// });

// console.log(store.getState());

const Divar = ({ state }) => {
  const dispatch = useDispatch();

  // Selector
  // const userStore = useSelector((store) => store.users);
  // useEffect(() => {
  //   console.log("userStore:", userStore);
  // }, [userStore]);

  useEffect(() => {
    console.log("global state:", state);
  }, [state]);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  const handleClick = () => {
    dispatch(
      createUser({
        firstName: "Mohammad test",
        lastName: "Miladi 2",
        email: "mohammad2@gmail.com",
        age: 35,
        balance: 19000,
      })
    );
  };

  const handleAdsClick = () => {
    dispatch(
      createAds({
        title: "Test",
        description: "Test 2 ",
        price: 18000,
      })
    );
  };

  return (
    <div>
      <div className=" bg-white rounded p-7 my-4">
        <h2>Users List:</h2>
        {/* {state.users.userList.map((user, index) => (
          <div key={index}>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.age}</p>
          </div>
        ))} */}
        {state.users.userList?.map((user) => (
          <div key={user.id} className="p-5 rounded shadow-md bg-white">
            <img
              src={user.avatar}
              className=" w-30 h-30 rounded-full mx-auto "
              alt="avatar"
            />
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      <div className=" bg-white rounded p-7 my-4">
        <h2>Add User:</h2>
        <button className=" bg-blue-300" onClick={() => handleClick()}>
          Add User
        </button>
        <button className=" bg-blue-300" onClick={() => handleAdsClick()}>
          Add Ads
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Divar);
