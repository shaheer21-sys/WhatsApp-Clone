import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ6oYvuRBJCvEyj-bkdEP1joOLKFbvP4M",
  authDomain: "whatsapp-clone-468bb.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-468bb.firebaseio.com",
  projectId: "whatsapp-clone-468bb",
  storageBucket: "whatsapp-clone-468bb.appspot.com",
  messagingSenderId: "957776417647",
  appId: "1:957776417647:web:1f5a7c8b8eb9c953618e9a",
  measurementId: "G-F1BQBW5ST1"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;