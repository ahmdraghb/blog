import "../pages/login.css";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// import { auth } from "../firebase";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [hasAccount, setHasAccount] = useState(false);

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(navigate("/login"))
      .catch((error) => console.log(error));
  };
  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(navigate("/addpost"))
      .catch((error) => console.log(error));
  };
  const { hasAccount, setHasAccount } = props;
  // const {
  //   email,

  //   setEmail,
  //   password,
  //   setPassword,
  //   handleLogin,
  //   handleSignup,
  //   hasAccount,
  //   setHasAccount,
  //   emailError,
  //   passwordError,
  // } = props;
  return (
    <>
      <form action="">
        <div className="login">
          <div className="input">
            <label htmlFor="mail">E-mail</label>
            <input
              type="text"
              id="mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <p className="errorMsg">{emailError}</p> */}
          </div>
          <div className="input">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <p className="errorMsg">{passwordError}</p> */}
          </div>
          <div className="button">
            {hasAccount ? (
              <>
                <button onClick={signin}>sign in</button>
                <p style={{ marginTop: "5px" }}>
                  Don't have an account ?{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    SignUp
                  </span>
                </p>
              </>
            ) : (
              <>
                <button onClick={register}>Sign Up</button>
                <p style={{ marginTop: "5px" }}>
                  Have an Account{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign in
                  </span>
                </p>
              </>
            )}
            {/* <button onClick={signin}>login</button>
            <button onClick={register}>register</button> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
