import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./design/main.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/stepper" element={<StepperPage />}></Route>
        <Route path="/form" element={<FormPage />}></Route>
        <Route path="components" element={<Components />}>
          <Route index element={<TogglePage />}></Route>
          <Route path="toggle" element={<TogglePage />}></Route>
          <Route path="timer" element={<TimerPage />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> */}
    <footer className="copyRight">
      © Quera |React Bootcamp 2024 | Mohammad Miladi
    </footer>
  </StrictMode>
);
