import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, GoogleAuthProvider } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCn2L_mOhKRsJY1QYCx_iZymj_uUm2yTZs",
    authDomain: "hopeful-nova-399405.firebaseapp.com",
    databaseURL: "https://hopeful-nova-399405-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hopeful-nova-399405",
    storageBucket: "hopeful-nova-399405.appspot.com",
    messagingSenderId: "425820017237",
    appId: "1:425820017237:web:5572d84a18593927ddfadc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);
export { auth, provider, firestore };