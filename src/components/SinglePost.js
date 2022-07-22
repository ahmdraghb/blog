import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Side from "../pages/Side";
import "./SinglePost.css";

const SinglePost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [update, setUpdate] = useState(false);

  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:3000/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const del = async () => {
    try {
      await axios.delete("http://localhost:3000/posts/" + path);
      navigate("/");
    } catch (error) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:3000/posts/" + path, {
        title,
        desc,
      });
      // window.location.reload();
      navigate("/");
    } catch (error) {}
  };

  return (
    <>
      <div className="parent">
        <div className="side">
          <Side />
        </div>
        <div className="singlePost">
          {post.img && <img className="image" src={post.img} alt="" />}

          <span>{post.time} </span>
          {update ? (
            <>
              {" "}
              <label style={{ marginBottom: "8px" }} htmlFor="name">
                {" "}
                update Name
              </label>
              <input
                style={{
                  width: "500px",
                  height: "40px",
                  border: "none",
                  borderBottom: "1px #eee solid",
                  borderRadius: "5px",
                  outlineColor: "#ec6a2a",
                }}
                type="text"
                value={name}
                id={"name"}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          ) : (
            <>
              <h2>{post.name}</h2>
            </>
          )}
          {update ? (
            <>
              <label style={{ marginBottom: "8px" }} htmlFor="title">
                {" "}
                update title
              </label>

              <input
                style={{
                  width: "500px",
                  height: "40px",
                  border: "none",
                  borderBottom: "1px #eee solid",
                  borderRadius: "5px",
                  outlineColor: "#ec6a2a",
                }}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id={"title"}
              />
            </>
          ) : (
            <>
              <h4>{post.title}</h4>
            </>
          )}
          {update ? (
            <>
              <label style={{ marginBottom: "8px" }} htmlFor="desc">
                {" "}
                update description
              </label>

              <input
                style={{
                  width: "500px",
                  height: "60px",
                  border: "none",
                  borderBottom: "1px #eee solid",
                  borderRadius: "5px",
                  outlineColor: "#ec6a2a",
                }}
                type="text"
                id="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              <button onClick={handleUpdate}>update</button>
            </>
          ) : (
            <>
              <p>{post.desc}</p>
            </>
          )}
          <div className="icons">
            <i onClick={() => del()} className="fa-solid fa-trash"></i>
            <i
              onClick={() => setUpdate(true)}
              className="fa-solid fa-pen-to-square"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePost;
