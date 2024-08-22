import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./design/main.css";
import Home from "./components/home/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <footer className="copyRight">
      © Quera |React Bootcamp 2024 | Mohammad Miladi
    </footer>
  </StrictMode>
);
