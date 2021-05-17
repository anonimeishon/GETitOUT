import firebase from "firebase/app";
import "firebase/firestore";
import config from "../config/config";

firebase.initializeApp({
  apiKey: config?.API_KEY,
  projectId: config?.PROJECT_ID,
  storageBucket: config?.STORAGE_BUCKET,
  appId: config?.APP_ID,
});

export const db = firebase.firestore();
