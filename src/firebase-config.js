import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDFjtDKzOO16bri3ZO7k7UMEhln6Y1Ecyc",
    authDomain: "cart-946c1.firebaseapp.com",
    projectId: "cart-946c1",
    storageBucket: "cart-946c1.appspot.com",
    messagingSenderId: "197829096447",
    appId: "1:197829096447:web:2161d859b05b001ed6edca"
};


firebase.initializeApp(config);

export const firestore = firebase.firestore();


export default firebase;
