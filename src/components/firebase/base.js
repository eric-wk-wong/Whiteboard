import firebase from 'firebase';
import "firebase/auth";
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyByUtuM7nCJMZK4PWlztaCPXrAXRIytCoo",
    authDomain: "whiteboard-8047a.firebaseapp.com",
    databaseURL: "https://whiteboard-8047a.firebaseio.com/",
    projectId: "whiteboard-8047a",
    storageBucket: "whiteboard-8047a.appspot.com",
    messagingSenderId: "1026487661768",
    appId: "1:1026487661768:web:93ea7de652d4a11b1ee1fd",
    measurementId: "G-4XC50CFZZ1"
};

firebase.initializeApp(config);

export default firebase;