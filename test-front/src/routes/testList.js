import axios from "axios";
import React from "react";
import Lesson from './memoItem';
import MemoItem from "./memoItem2";

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




  if (!post) return null;

  return (
        <div>
          <h2>memo List</h2>
            {post.map(item => {
              return (
                <>
                  <MemoItem
                    id={item.id}
                    title={item.title}
                    body={item.body}
                  />
                  <br/>
                </>
              );
         })}
        </div>
        
  );
}

export default TestList;