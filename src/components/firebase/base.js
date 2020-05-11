import firebase from 'firebase';
import "firebase/auth";
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAEYGk8mPtvphxsWzJVwfuOiMIEG3dZ7KQ",
  authDomain: "sample-5284b.firebaseapp.com",
  databaseURL: "https://sample-5284b.firebaseio.com/",
  projectId: "sample-5284b",
  storageBucket: "sample-5284b.appspot.com",
  messagingSenderId: "495188636690",
  appId: "1:495188636690:web:6704678dc789682e7ad4cb",
  measurementId: "G-R9C0PWP44D"
}
  firebase.initializeApp(config);

export default firebase;
