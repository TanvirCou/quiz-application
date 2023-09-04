/* eslint-disable no-undef */

import { initializeApp } from "firebase/app";

console.log(process.env.REACT_APP_API_KEY);
const app = initializeApp({
    apiKey: "AIzaSyAql-DS2f3139wuWXtI6BwiEBgXBz8CL0U",
    authDomain: "quiz-webapplication.firebaseapp.com",
    projectId: "quiz-webapplication",
    storageBucket: "quiz-webapplication.appspot.com",
    messagingSenderId: "1033165664355",
    appId: "1:1033165664355:web:e23a6b9f72e0c015c94856",
    databaseURL: "https://quiz-webapplication-default-rtdb.asia-southeast1.firebasedatabase.app"
  });

  export default app;

    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_DATABASE_URL