import firebase from 'firebase';
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDNsCX3Zs7oHxK_phgt5V1YDXf4KF6ApR8",
    authDomain: "powerindex-cf70b.firebaseapp.com",
    projectId: "powerindex-cf70b",
    storageBucket: "powerindex-cf70b.appspot.com",
    messagingSenderId: "584100610375",
    appId: "1:584100610375:web:ccf0a0f9da1154abf0cc62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export var storage = firebase.storage();

  

  export default firebase;
  