import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCwTrebmchWMmimcgmvvdFlez3OaJbYT1w",
  authDomain: "getitout-bc201.firebaseapp.com",
  projectId: "getitout-bc201",
  storageBucket: "getitout-bc201.appspot.com",
  messagingSenderId: "22523788439",
  appId: "1:22523788439:web:669c877cf53f40d888bdd2",
  measurementId: "G-479QQKY9VT",
});


export const db = firebase.firestore();
