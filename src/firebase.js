import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCodlKGpQIbS0CkUENt6UiTvPooeC99hZI",
  authDomain: "gmaiil-clone-v1.firebaseapp.com",
  projectId: "gmaiil-clone-v1",
  storageBucket: "gmaiil-clone-v1.appspot.com",
  messagingSenderId: "1083004158308",
  appId: "1:1083004158308:web:c20527bd67bea90497ba71",
  measurementId: "G-SB24KMVB5J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
