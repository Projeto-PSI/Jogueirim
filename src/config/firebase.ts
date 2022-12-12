import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_af1csyPS7D77Tdmug7Zgv0GZ-uLYb8k",
  authDomain: "projeto-psi-abe0b.firebaseapp.com",
  projectId: "projeto-psi-abe0b",
  storageBucket: "projeto-psi-abe0b.appspot.com",
  messagingSenderId: "247918262643",
  appId: "1:247918262643:web:638ee2909c4cd6145a2d06",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
