import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, GoogleAuthProvider } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCVPvnxd6qFTwcaFuf3-GXhUE7p4c6lcr8",
    authDomain: "helth-care-app-trincomalee.firebaseapp.com",
    projectId: "helth-care-app-trincomalee",
    storageBucket: "helth-care-app-trincomalee.appspot.com",
    messagingSenderId: "1073535643607",
    appId: "1:1073535643607:web:ddf778aa1dbc753e0ce592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);
export { auth, provider, firestore };