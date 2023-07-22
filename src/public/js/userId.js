
const LINK_EDIT = document.getElementById("LINK_EDIT")

import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
const auth = getAuth();

    onAuthStateChanged (auth, (user) => {
        if (user) {
            const uid = user.uid;
            LINK_EDIT.href = `/edit/${uid}`
        } 
    })
    





