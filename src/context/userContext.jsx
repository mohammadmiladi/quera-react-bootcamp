import { createContext } from "react";

const UserContext = createContext({
  name: "",
  age: 0,
  email: "",
  setUserData: (userDetails) => {},
});

export default UserContext;
