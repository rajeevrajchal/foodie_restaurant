import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDs6iI3taFPX9SNKjMVDd-EC3M5jbMwQJA",
    authDomain: "restaurant-a08e3.firebaseapp.com",
    projectId: "restaurant-a08e3",
    storageBucket: "restaurant-a08e3.appspot.com",
    messagingSenderId: "352418759763",
    appId: "1:352418759763:web:7ee3bc4e76f5537bc072a6",
    measurementId: "G-LMMPWZCFWH"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.database()
const auth = firebase.auth()
export {firebase, db, auth};

