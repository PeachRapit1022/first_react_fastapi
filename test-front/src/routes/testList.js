import axios from "axios";
import React from "react";

//const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const baseURL = "http://localhost:8000/get"



function TestList() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPost(response.data);
    });
  }, []);

  function deletePost(id) {
    axios
      .delete(`${baseURL}/${id}`)
      .then(() => {
        setPost(null)
      });
  }


  if (!post) return null;

  return (
        <div>
          <h2>memo List</h2>
          <table>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
            {post.map(item => 
            <tr>
              <th>{item.id}</th>
              <th>{item.title}</th>
              <th>{item.body}</th>
              <th>
                <form onSubmit={()=>{deletePost(item.id)}}>
                  <input type="submit" value="削除"/>
                </form>
              </th>
            </tr>)}
          </table>
        </div>
        
  );
}

export default TestList;