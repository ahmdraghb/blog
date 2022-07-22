import "../pages/Single.css";
import Header from "../components/Header";
import Side from "./Side";
import SinglePost from "../components/SinglePost";

const Single = (post) => {
  return (
    <>
      <div className="single">
        <Side />
        <SinglePost />
      </div>
    </>
  );
};
export default Single;
