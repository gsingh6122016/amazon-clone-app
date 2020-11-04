import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBx4PeIMM499etvqAKXCxYLEISJ-EAoAro",
  authDomain: "online-shopping-5678a.firebaseapp.com",
  databaseURL: "https://online-shopping-5678a.firebaseio.com",
  projectId: "online-shopping-5678a",
  storageBucket: "online-shopping-5678a.appspot.com",
  messagingSenderId: "600036219638",
  appId: "1:600036219638:web:5fa554c4d444166eaaaad7",
  measurementId: "G-TRTMNSQ898"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};