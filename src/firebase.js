// import { initializeApp, firebase } from "firebase/app";
// import firebase from "firebase/app";
// import { initializeApp, firebase } from "firebase/app";
// import "firebase/database";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAeVTyyBMNStVdgLSD3bUpnBaG_3wIpOk4",
//   authDomain: "blog-reactjs-d155a.firebaseapp.com",
//   projectId: "blog-reactjs-d155a",
//   storageBucket: "blog-reactjs-d155a.appspot.com",
//   messagingSenderId: "250387815869",
//   appId: "1:250387815869:web:45295d999c60c89eaf06d4",
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export default firebase;
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC82SPt_Rw22JRvu1kxlGs9LZki_WPPRJA",
  authDomain: "blogg-5b0bb.firebaseapp.com",
  projectId: "blogg-5b0bb",
  storageBucket: "blogg-5b0bb.appspot.com",
  messagingSenderId: "316984610541",
  appId: "1:316984610541:web:f6536cc77756217d2f46e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
