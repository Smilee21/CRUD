import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
const auth = getAuth();
import { showM } from "./showM.js";

const form = document.getElementById("formData");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let serviceName = document.getElementById("serviceName").value;
  let serviceType = document.getElementById("serviceType").value;
  let serviceDescripcion = document.getElementById("serviceDescripcion").value;
  let serviceOtherContact = document.getElementById(
    "serviceOtherContact"
  ).value;
  let serviceId = document.getElementById(
    "serviceId"
  ).value;
  let serviceTel = document.getElementById("serviceTel").value;

  let elementosForm = {
    serviceOtherContact,
    serviceTel,
    serviceName,
    serviceType,
    serviceDescripcion,
    serviceId
  };
  let elementosFormJSON = JSON.stringify(elementosForm);

  await onAuthStateChanged(auth, (user) => {
    if (user) {
      let userData = {
        elementosFormJSON,
      };
      let userJSON = JSON.stringify(userData);
      form.reset();

      showM("Tu servicio de a publicado!!", "bien");
      fetch(`/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: userJSON,
      });
    } else {
      showM("Debes iniciar sesion", "er");
    }
  });
});
