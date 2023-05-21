import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmofMmnsKKjVmxzz4gCVi9rGqJPN35VZ8",
  authDomain: "regform-f501f.firebaseapp.com",
  projectId: "regform-f501f",
  storageBucket: "regform-f501f.appspot.com",
  messagingSenderId: "957714988877",
  appId: "1:957714988877:web:177ed5fe2444d1baeb8104"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, "formData");

const form = document.querySelector(".input-fields");
const name = document.querySelector("#name");
const dob = document.querySelector("#dob");
const email = document.querySelector("#email");
const curKnowledge = document.querySelector("#curKnowledge");
const aim = document.querySelector("#aim");
const dreamProject = document.querySelector("#dreamProject");

function checkCount(str) {
  var count = 0;
  var splitString = str.split(" ");
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i] != "") {
      count++;
    }
  }

  if (count <= 50) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!checkCount(dreamProject.value)) {
    return alert("Project description can't be greater than 50 words");
  }

  addDoc(colRef, {
    name: name.value,
    dob: dob.value,
    email: email.value,
    curKnowledge: curKnowledge.value,
    aim: aim.value,
    dreamProject: dreamProject.value,
  })
    .then((result) => {
      form.reset();
      alert("Form data submitted!");
    })
    .catch((err) => {
      alert(err);
    });
});