import { useState, useEffect } from "react";
import axios from "axios";

const PostsComments = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getPosts = axios.get("https://jsonplaceholder.typicode.com/posts");
    const getComments = axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    // getPosts.then((res) => {
    //   setPosts(res.data);
    // });

    // getComments.then((res) => {
    //   setComments(res.data);
    // });

    axios.all([getPosts, getComments]).then(
      axios.spread((postsResponse, commentsResponse) => {
        // console.log(postsResponse, commentsResponse);
        setPosts(postsResponse.data);
        setComments(commentsResponse.data);
      })
    );
  }, []);

  return (
    <div>
      <h2>Posts:</h2>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      <h2>Comments:</h2>
      {comments.map((comment) => (
        <p key={comment.id}>{comment.name}</p>
      ))}
    </div>
  );
};

export default PostsComments;
