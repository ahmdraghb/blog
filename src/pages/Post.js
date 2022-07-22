import "../pages/Post.css";
import { Link } from "react-router-dom";
// import Posts from "./Posts";

const Post = ({ post }) => {
  // const Pf = "localhost:5000/imgs/";
  return (
    <>
      <div className="post">
        <img src={post.img} alt="" />
        {/* <Link></Link> */}
        <span>{post.time} </span>
        <h2>{post.name}</h2>
        <Link className="title" to={`/posts/${post.id}`}>
          <h4>{post.title}</h4>
        </Link>
        <p>{post.desc}</p>
        {/* <div className="icons">
          <i className="fa-solid fa-trash"></i>
          <i className="fa-solid fa-pen-to-square"></i>
        </div> */}
      </div>
    </>
  );
};
export default Post;
