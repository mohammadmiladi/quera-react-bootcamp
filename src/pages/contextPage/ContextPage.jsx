import Child1 from "./Child1";
import { useState } from "react";
import UserContext from "../../context/userContext";
import ThemeColorContext, { themes } from "../../context/themeContext";

const ContextPage = () => {
  const [user, setUser] = useState("Mohammad");

  return (
    <ThemeColorContext.Provider value={themes.dark}>
      <div>
        <Child1 />
      </div>
    </ThemeColorContext.Provider>
  );
};

export default ContextPage;
export { UserContext };
