import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB3mbPSknWsVM-AL2h58sqaqQoHvPwAFA",
  authDomain: "whatsap-web-c93d1.firebaseapp.com",
  projectId: "whatsap-web-c93d1",
  storageBucket: "whatsap-web-c93d1.appspot.com",
  messagingSenderId: "384576880236",
  appId: "1:384576880236:web:2be608850bb9451cc42249",
  measurementId: "G-YXY50XVTFF"
};
  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export{auth , provider}
export { db };
