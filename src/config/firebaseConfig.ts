import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_af1csyPS7D77Tdmug7Zgv0GZ-uLYb8k",
  authDomain: "projeto-psi-abe0b.firebaseapp.com",
  projectId: "projeto-psi-abe0b",
  storageBucket: "projeto-psi-abe0b.appspot.com",
  messagingSenderId: "247918262643",
  appId: "1:247918262643:web:638ee2909c4cd6145a2d06"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;