import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import styles from "../home/home.module.css";
import { useReducer, useEffect } from "react";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "fetchStart":
      return { ...state, loading: true, error: null };
    case "fetchSuccess":
      return { ...state, loading: false, data: action.data };
    case "fetchError":
      return { ...state, loading: false, error: action.error };
  }
}

const PostsPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "fetchStart" });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "fetchSuccess", data }))
      .catch((error) => dispatch({ type: "fetchError", error }));
  }, []);

  if (state.loading) return <p>Loading ...</p>;
  if (state.error) return <p>Error: {state.error.message}</p>;
  return (
    <div className={styles.adminPanel}>
      <Logo />
      <Navbar />
      <Menu />
      <div>{state.data?.title}</div>
    </div>
  );
};

export default PostsPage;
