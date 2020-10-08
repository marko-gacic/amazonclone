// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDEGCAVyaohdQAYzRI538gUhEqentso1zE",
    authDomain: "clone-f3102.firebaseapp.com",
    databaseURL: "https://clone-f3102.firebaseio.com",
    projectId: "clone-f3102",
    storageBucket: "clone-f3102.appspot.com",
    messagingSenderId: "677143777405",
    appId: "1:677143777405:web:57cf3c16dd04b5dc80a114",
    measurementId: "G-55B3XQZ3HT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }