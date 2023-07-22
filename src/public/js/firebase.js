 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import {getAuth} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBisiCnb7emzJ1krXZcwzg2aggOJBtLlqY",
    authDomain: "antonio-volcan.firebaseapp.com",
    projectId: "antonio-volcan",
    storageBucket: "antonio-volcan.appspot.com",
    messagingSenderId: "902017372910",
    appId: "1:902017372910:web:7ad1de930602381a3ed9ff",
    measurementId: "G-K40BSEQJSH"
  };//GUARDAR EN ENV

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  