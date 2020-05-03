import firebase from 'firebase';
import "firebase/auth";
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBKDjEOIF0fqJa_lsqwgU6h5bRQ6mjir0c",
    authDomain: "wb-2020.firebaseapp.com",
    databaseURL: "https://wb-2020.firebaseio.com",
    projectId: "wb-2020",
    storageBucket: "wb-2020.appspot.com",
    messagingSenderId: "564817487071",
    appId: "1:564817487071:web:9768872cc48a816bb6f56a"
};

firebase.initializeApp(config);

export default firebase;