import Loader from "../components/Loader";
import "../pages/Posts.css";
import Post from "./Post";
// import React from "react";

const Posts = ({ posts }) => {
  return (
    <>
      <div className="posts">
        {posts.map((p) => (
          <Post post={p} key={posts.id} />
        ))}
        <div className="loader">{posts.length === 0 && <Loader />}</div>
      </div>
    </>
  );
};
export default Posts;
