import { useState, useEffect } from "react";
import Card from "../common/Card";

const Posts = () => {
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
    <Card>
      <h2>Posts:</h2>
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
