import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApk7Z98W8jD_H3OvVK9CYm-IWd68epXvc",
    authDomain: "whatapp-clone-f7458.firebaseapp.com",
    projectId: "whatapp-clone-f7458",
    storageBucket: "whatapp-clone-f7458.appspot.com",
    messagingSenderId: "332550870426",
    appId: "1:332550870426:web:332099c2a2049e19a39623",
    measurementId: "G-0WKGT74QSZ"
  };
  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export{auth , provider}
export { db };
