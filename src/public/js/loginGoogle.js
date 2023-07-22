import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showM } from "./showM.js";
const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);

    const modal = bootstrap.Modal.getInstance(
      document.querySelector("#loginModal")
    );
    modal.hide();
    showM("Bienvenido "+ credentials.user.displayName)
  } catch (error) {
    showM('Ha Ocurrido Un Error Al Iniciar Con Google ', 'Er')
  }
});
