import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/AddPost.css";
const AddPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      name,
      title,
      desc,
    };
    if (img) {
      const data = new FormData();
      // const filename = Date.now() + img.name;
      // data.append("name", filename);
      data.append("upload_preset", "boprzkme"); //new
      data.append("file", img);
      // newPost.img = filename;
      try {
        await axios
          .post("http://api.cloudinary.com/v1_1/dbvxnytv3/image/upload", data)
          .then((res) => {
            console.log(res, "response");
            setUrl({ ...url, imageUrl: res.data.url });
          });
        // await axios.post("http://localhost:3000/posts", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:3000/posts", newPost);
      console.log(res);
      // window.location.replace("http://localhost:3000/posts/" + res.data.id);
      navigate("/");
    } catch (err) {}
  };

  return (
    <>
      <div className="addPost">
        <form onSubmit={handleSubmit}>
          {img && (
            <img className="image" src={URL.createObjectURL(img)} alt="" />
          )}
          <div className="form">
            <div className="add">
              <label htmlFor="file">
                <i className="icon fa-solid fa-plus"></i>
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setImg(e.target.files[0])}
              />

              <br />
              <input
                type="text"
                placeholder="Title"
                className="title"
                autoFocus={true}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Name"
              className="title"
              autoFocus={true}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Description"
              id=""
              className="Description.."
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <button className="submit" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddPost;
