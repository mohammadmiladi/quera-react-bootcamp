import Posts from "../../components/posts/Posts";
import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

const ProductsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log("error:", err));
  }, []);

  return (
    <ProductContext.Provider value={posts}>
      <div>
        <Posts />
      </div>
    </ProductContext.Provider>
  );
};

export default ProductsPage;
export { ProductContext };
