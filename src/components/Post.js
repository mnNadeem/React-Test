import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const location = useLocation();
  const {title, body} = location.state;
  console.log(this.title);

  const checkWindow = () =>{
     console.log(this)
  };
  checkWindow();
  return (
    <div>
      <h1>Post {id}</h1>
      <h3>{title}</h3>
      <h5>{body}</h5>
    </div>
  );
}

export default Post;
