import axios from "axios";
import React from "react";

//const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const baseURL = "http://localhost:8000/get"

function TestGet() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response)
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
        <h2>Getのページ - memo一覧</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  );
}

export default TestGet;