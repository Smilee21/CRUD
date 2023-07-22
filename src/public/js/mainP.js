import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { loginCheck } from "./loginCheck.js";
import "./signup.js";
import "./login.js";
import "./logOut.js";
import "./loginGoogle.js";

onAuthStateChanged(auth, async (user) => {
  loginCheck(user);
});
