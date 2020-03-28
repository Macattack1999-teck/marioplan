import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC-OSN40btwzpXCuxW31NVY453Uw3l7h-g",
  authDomain: "react-redux-firebase-pra-49a25.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-pra-49a25.firebaseio.com",
  projectId: "react-redux-firebase-pra-49a25",
  storageBucket: "react-redux-firebase-pra-49a25.appspot.com",
  messagingSenderId: "144110325154",
  appId: "1:144110325154:web:6a3880678fe2b18ba876fb",
  measurementId: "G-GZT6N910R4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;