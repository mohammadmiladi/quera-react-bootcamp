import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./design/main.css";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";
import FormPage from "./pages/form/Form";
import StepperPage from "./pages/stepper/Stepper";
import Components from "./pages/components/Components";
import TogglePage from "./pages/toggle/Toggle";
import TimerPage from "./pages/timer/Timer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HooksPage from "./pages/hooks/Hooks";
import UseReducerPage from "./pages/hooks/useReducer/UseReducer";
import PostsPage from "./pages/posts/Posts";
import UseRefPage from "./pages/useRef/UseRef";
import UseMemoPage from "./pages/useMemo/UseMemo";
import UseLayoutEffectPage from "./pages/useLayoutEffect/UseLayoutEffect";
import ContextPage from "./pages/contextPage/ContextPage";
import ProductsPage from "./pages/products/Products";
import Dashboard from "./pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/stepper",
        element: <StepperPage />,
      },
      {
        path: "/form",
        element: <FormPage />,
      },
      {
        path: "/components",
        element: <Components />,
        children: [
          {
            path: "",
            element: <Components />,
          },
          {
            path: "toggle",
            element: <TogglePage />,
          },
          {
            path: "timer",
            element: <TimerPage />,
          },
        ],
      },
      {
        path: "hooks",
        element: <HooksPage />,
        children: [
          {
            path: "useReducer",
            element: <UseReducerPage />,
          },
        ],
      },
      {
        path: "/posts",
        element: <PostsPage />,
      },
      {
        path: "/useRef",
        element: <UseRefPage />,
      },
      {
        path: "/UseMemo",
        element: <UseMemoPage />,
      },
      {
        path: "/UseLayoutEffect",
        element: <UseLayoutEffectPage />,
      },
      {
        path: "/contextPage",
        element: <ContextPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
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
