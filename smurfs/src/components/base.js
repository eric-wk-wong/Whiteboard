import * as firebase from "firebase/app"
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBOqFZs1se6atNxZoOJmfvIjtllfWb5lhs",
    authDomain: "white-board-7806a.firebaseapp.com",
    databaseURL: "https://white-board-7806a.firebaseio.com",
    projectId: "white-board-7806a",
    storageBucket: "white-board-7806a.appspot.com",
    messagingSenderId: "603936414325",
    appId: "1:603936414325:web:2628dd76b1ac0c6ce9363c",
    measurementId: "G-TC4NFMY43D"
});

export default app;