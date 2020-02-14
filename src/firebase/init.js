import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAUzmFYjFip9BauQf8hvOpC5TVYQ5EuKD0",
    authDomain: "ninja-smoothie-6017c.firebaseapp.com",
    databaseURL: "https://ninja-smoothie-6017c.firebaseio.com",
    projectId: "ninja-smoothie-6017c",
    storageBucket: "ninja-smoothie-6017c.appspot.com",
    messagingSenderId: "540755331415",
    appId: "1:540755331415:web:ecc46517ee364adf4a9612"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore()