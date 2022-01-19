// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBlMpdjmm_HrQxy1oBN1v3Q6SbZoYnzjzk",
    authDomain: "sportario.firebaseapp.com",
    projectId: "sportario",
    storageBucket: "sportario.appspot.com",
    messagingSenderId: "1086230232910",
    appId: "1:1086230232910:web:9fa98a5321b2b1f321281f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let storage = firebase.storage();

  export  {
      firebase, db, storage
};