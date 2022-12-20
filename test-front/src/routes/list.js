import axios from "axios";
import React from "react";
import MemoItem from "./item";

const baseURL = "http://localhost:8000/get"

const List = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
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
};

export default List;