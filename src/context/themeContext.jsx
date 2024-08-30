import { createContext } from "react";

export const themes = {
  dark: {
    color: "white",
    background: "black",
  },
  light: {
    color: "black",
    background: "white",
  },
};

const ThemeColorContext = createContext(themes.light);

export default ThemeColorContext;
