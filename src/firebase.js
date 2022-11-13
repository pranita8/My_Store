import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuXh9fDQEW6Rbw9sM-6JR9b2GWuMGrfWw",
  authDomain: "mystore-13fa3.firebaseapp.com",
  databaseURL: "https://mystore-13fa3-default-rtdb.firebaseio.com/",
  projectId: "mystore-13fa3",
  storageBucket: "mystore-13fa3.appspot.com",
  messagingSenderId: "182997175061",
  appId: "1:182997175061:web:091fc6385635b1582af71c",
  measurementId: "G-1JFC15XK77"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();    //auth is authentication

export { db, auth };
//https://mystore-13fa3-default-rtdb.firebaseio.com/
