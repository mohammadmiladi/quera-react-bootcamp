// React Router
import { createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from "../pages/home/Home";
import NotFound from "../pages/404/NotFound";
import FormPage from "../pages/form/Form";
import StepperPage from "../pages/stepper/Stepper";
import Components from "../pages/components/Components";
import TogglePage from "../pages/toggle/Toggle";
import TimerPage from "../pages/timer/Timer";
import HooksPage from "../pages/hooks/Hooks";
import UseReducerPage from "../pages/hooks/useReducer/UseReducer";
import PostsPage from "../pages/posts/Posts";
import UseRefPage from "../pages/useRef/UseRef";
import UseMemoPage from "../pages/useMemo/UseMemo";
import UseLayoutEffectPage from "../pages/useLayoutEffect/UseLayoutEffect";
import ContextPage from "../pages/contextPage/ContextPage";
import ProductsPage from "../pages/products/Products";
import Dashboard from "../pages/dashboard/Dashboard";
import UsersPage from "../pages/users/Users";
import AddUser from "../pages/addUser/AddUser";
import User from "../pages/user/User";
import PostsComments from "../pages/postsComments/PostsComments";
import Divar from "../pages/divar/Divar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
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
            path: "",
            element: <UseReducerPage />,
          },
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
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/users/:userId",
        element: <User />,
      },
      {
        path: "/posts-comments",
        element: <PostsComments />,
      },
      {
        path: "/divar",
        element: <Divar />,
      },
    ],
  },
]);

export default router;
