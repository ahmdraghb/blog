import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { UserAuth } from "../context/authContext";
import "../pages/Register.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { createUser } = UserAuth();
  // const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // try {
    // await createUser(email, password);
    // } catch (e) {
    // setError(e.message);
    // console.log(e.message);
    // }
  };

  // const navigate = useNavigate();

  // const submit = (e) => {
  //   e.preventDefault();

  //   navigate("/login");
  // };
  return (
    <>
      <div className="register">
        <h1>Register </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="fName">First Name</label>
            <input type="text" id="fname" />
          </div>
          <div className="input">
            <label htmlFor="lName">Last Name</label>
            <input type="text" id="lname" />
          </div>
          <div className="input">
            <label htmlFor="mail">E-mail</label>
            <input
              type="text"
              id="mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="input">
            <label htmlFor="rpass">rePassword</label>
            <input type="password" id="rpass" />
          </div> */}
          <div className="button">
            <button>register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
