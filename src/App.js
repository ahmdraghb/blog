import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import SinglePost from "./components/SinglePost";
import AddPost from "./pages/AddPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import Side from "./pages/Side";
import Single from "./pages/Single";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { AuthContextProvider } from "./context/authContext";

function App() {
  // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  // const clearInputs = () => {
  //   setEmail("");
  //   setPassword("");
  // };
  // const clearErrors = () => {
  //   setEmailError("");
  //   setPasswordError("");
  // };

  // const handleLogin = () => {
  //   clearErrors();

  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //       switch (err.code) {
  //         case "auth/invalid-email":
  //         case "auth/user-disabled":
  //         case "auth/user-not-found":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/wrong-password":
  //           setPasswordError(err.message);
  //           break;
  //         // default:
  //       }
  //     });
  // };

  // const handleSignup = () => {
  //   clearErrors();
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //       switch (err.code) {
  //         case "auth/email-arleady-in-use":
  //         case "auth/invalid-email":
  //           // case "auth/user-not-found":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/weak-password":
  //           setPasswordError(err.message);
  //           break;
  //         default:
  //       }
  //     });
  // };

  // const handleLogout = () => {
  //   firebase.auth().signOut();
  // };
  // const authListener = () => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       clearInputs();
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   authListener();
  // }, []);

  return (
    <>
      <Router>
        <Header />
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={
                <Login
                  // email={email}
                  // setEmail={setEmail}
                  // password={password}
                  // setPassword={setPassword}
                  // handleLogin={handleLogin}
                  // handleSignup={handleSignup}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  // emailError={emailError}
                  // passwordError={passwordError}
                />
              }
            />
            <Route path="/posts" element={<Posts />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/posts/:postid" element={<SinglePost />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
