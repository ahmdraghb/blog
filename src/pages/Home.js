import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import "../pages/Home.css";
import AddPost from "./AddPost";
import Posts from "./Posts";
import Side from "./Side";
import Single from "./Single";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3000/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <header />
      <div className="home">
        <Side />
        {/* <Single /> */}
        <Posts posts={posts} />
      </div>
    </>
  );
};
export default Home;
