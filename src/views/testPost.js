import axios from "axios";
import React from "react";

//const baseURL = "https://jsonplaceholder.typicode.com/posts";
const baseURL = "http://localhost:8000"
function TestPost() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/get`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(`${baseURL}/post`, {
        userId:2,
        id:2,
        title: "Hello World!",
        body: "aiueo"
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
        <h2>Postのページ</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default TestPost;