import "./Header.css";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";
const Header = (props) => {
  const navigate = useNavigate();
  const { hasAccount, setHasAccount } = useState(false);

  const [user, loading, error] = useAuthState(auth);
  const signoutClick = () => {
    auth.signOut();
    Navigate("/");
    setHasAccount(!hasAccount);
  };

  const register = () => {
    navigate("/login");
    setHasAccount(!hasAccount);
  };
  return (
    <div className="nav">
      <div className="left">
        <a
          href="https://www.linkedin.com/in/ahmed-ragheb-76b881198/"
          target={"_blank"}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/" target={"_blank"}>
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://ar-ar.facebook.com/" target={"_blank"}>
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.pinterest.com/" target={"_blank"}>
          <i className="fa-brands fa-pinterest"></i>
        </a>
        <a href="https://twitter.com/home" target={"_blank"}>
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
      <div className="center">
        <ul className="navigation">
          <li>
            <Link
              className="link"
              to="/
            "
            >
              Home{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link className="link" to="/posts/:postid">
              Posts
            </Link>
          </li>
          <li className="blog">
            BL<span>OG.</span>
          </li>
          <li>
            {" "}
            <Link className="link" to="/login">
              Login
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="link" to="/register">
              Register
            </Link>
          </li>
          <li>
            {" "}
            <Link className="link" to="/addpost">
              add
            </Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <i className="fa-solid fa-magnifying-glass"></i>
        <h3>welcome {user?.email}</h3>
        {/* {hasAccount ? (
          <>
          </>
        ) : (
          <>""</>
        )} */}

        {hasAccount ? (
          <>
            <button className="login" onClick={() => register()}>
              Log In
            </button>
          </>
        ) : (
          <>
            <button className="signout" onClick={() => signoutClick()}>
              Signout
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
