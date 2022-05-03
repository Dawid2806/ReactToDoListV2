import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzjvp5JeA_fULbXIpAXKQNAYKy4uh6nzk",
  authDomain: "todolistv2-e91b5.firebaseapp.com",
  projectId: "todolistv2-e91b5",
  storageBucket: "todolistv2-e91b5.appspot.com",
  messagingSenderId: "1082456600172",
  appId: "1:1082456600172:web:5390ae64c70ee1f0e4f249",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
