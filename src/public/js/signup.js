import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showM } from "./showM.js";
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signupForm["email-modal"].value;
  const pass = signupForm["pass"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      pass
    );
    //cerrar modal
    const signupModal = document.querySelector("#signinModal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
    //Bien
    showM(`Te has registrado con exito ${userCredential.user.email}`);

    //
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      showM("El Email Esta En Uso", "er");
    } else if (error.code === "auth/invalid/email") {
      showM("El Email Es Invalido", "er");
    } else if (error.code === "auth/weak-password") {
      showM("Contraseña insegura", "er");
    } else if (error.code) {
      showM("Oops! ha ocurrido un error inesperado, intentalo de nuevo", "er");
    }
  }
});
