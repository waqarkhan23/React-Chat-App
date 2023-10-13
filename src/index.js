import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBE7lggj11Qj8ZHTX396kB4J2t4PzPNOog",
  authDomain: "react-chat-app-91e7b.firebaseapp.com",
  databaseURL: "https://react-chat-app-91e7b-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-91e7b",
  storageBucket: "react-chat-app-91e7b.appspot.com",
  messagingSenderId: "422880386119",
  appId: "1:422880386119:web:4b47e0694bb6aa53c02562",
  measurementId: "G-Z0VJMQ80XS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
