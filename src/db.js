// Conveniently import this file anywhere to use db


import 'firebase/firestore'

import { firestore, initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDHkYsYHPoDf5uU-RKEfB-Z_dCnKRhxrDg",
    authDomain: "ta-pwl.firebaseapp.com",
    projectId: "ta-pwl",
    storageBucket: "ta-pwl.appspot.com",
    messagingSenderId: "644351605003",
    appId: "1:644351605003:web:8115f9616065078b368a0e",
    measurementId: "G-PX04JZKEGX"
  };
  const app = initializeApp(firebaseConfig);
  export const db = firestore(app)
// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
