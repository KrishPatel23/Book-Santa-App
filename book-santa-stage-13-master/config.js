import firebase from 'firebase';
require('@firebase/firestore')


   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJUbnpFswGyiY99BVtgNuh2lNfn7S05Yw",
  authDomain: "book-santa-app-bb158.firebaseapp.com",
  projectId: "book-santa-app-bb158",
  storageBucket: "book-santa-app-bb158.appspot.com",
  messagingSenderId: "526697207478",
  appId: "1:526697207478:web:991b056a5e3806b50ef817",
  measurementId: "G-N8F40X8V2Z"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
