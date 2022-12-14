import axios from "axios";
import React from "react";

//const baseURL = "https://jsonplaceholder.typicode.com/posts";
const baseURL = "http://localhost:8000/get"

function TestDelete() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function deletePost() {
    axios
      .delete(`${baseURL}`)
      .then(() => {
        alert("Post deleted!");
        setPost(null)
      });
  }

  if (!post) return "No post!"

  return (
    <div>
        <h2>Deleteのページ</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default TestDelete;