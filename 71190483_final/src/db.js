// Conveniently import this file anywhere to use db

// import firebase from 'firebase/app'
import 'firebase/firestore'

// export const db = firebase
//     .initializeApp({ projectId: 'taspwl' })
//     .firestore()
import { firestore, initializeApp } from 'firebase/app';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvCjBamlnUHdrZBtQMwaF1f1Nj6jAci4Q",
    authDomain: "taspwl.firebaseapp.com",
    projectId: "taspwl",
    storageBucket: "taspwl.appspot.com",
    messagingSenderId: "773686895880",
    appId: "1:773686895880:web:b98792fd3502cc73a678bd",
    measurementId: "G-85KFJ8340Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = firestore(app)
// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
