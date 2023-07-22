// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "mern-f5c0f.firebaseapp.com",
  projectId: "mern-f5c0f",
  storageBucket: "mern-f5c0f.appspot.com",
  messagingSenderId: "584003513343",
  appId: "1:584003513343:web:2b13df9fa0d0aea86c15ca",
  measurementId: "G-RMWW340X3S"
};

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);
// export default storage;
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;