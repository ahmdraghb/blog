import "../pages/Side.css";
import React from "react";

const Side = () => {
  return (
    <>
      <div className="side">
        <div className="sidebar">
          <h2>About Me</h2>

          <img
            style={{ width: "150px", margin: "10px" }}
            src="https://max-themes.net/demos/akea/upload/about-image.png"
            alt=""
          />
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            voluptatibus, culpa temporibus soluta officia at veniam excepturi
            deleniti aliquam provident assumenda id maxime explicabo, inventore
            dolores quas minus, reprehenderit fuga?
          </p>
        </div>
        <div className="follow">
          <h3 className="followus">Follow Us</h3>
          <div className="icons">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <h3>News Letter</h3>
          <p>Fill your email below to subscribe to my newsletter</p>
          <input type="text" placeholder="Email" />
          <button> Subscribe</button>
        </div>
      </div>
    </>
  );
};
export default Side;
