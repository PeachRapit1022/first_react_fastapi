import axios from "axios";
import React from "react";

//const baseURL = "https://jsonplaceholder.typicode.com/posts";
const baseURL = "http://localhost:8000"

function TestPut() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/get`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/put`, {
        userId:3,
        id:3,
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
        <h2>Putのページ</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={updatePost}>Update Post</button>
    </div>
  );
}

export default TestPut;
