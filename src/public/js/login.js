import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showM } from "./showM.js";

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const pass = loginForm["login-pass"].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, pass);
    const modal = bootstrap.Modal.getInstance(
      document.querySelector("#loginModal")
    );
    modal.hide();
    showM("Bienvenido/a " + credentials.user.email);
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      showM("Contraseña incorrecta", "error");
    } else if (error.code === "auth/user-not-found") {
      showM("Este Email No Esta Registrado", "error");
    } else {
      showM("Error Inesperado Comprueba tus datos e intenta denuevo", "error");
    }
  }
});
