import { useState, useEffect, useContext } from "react";
import Card from "../common/Card";
import { ProductContext } from "../../pages/products/Products";

const Posts = () => {
  const posts = useContext(ProductContext);
  return (
    <Card>
      <h2>Products:</h2>
      <ul>
        {posts.map((post) => (
          <li className="border border-solid border-gray-300 p-1" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Posts;
