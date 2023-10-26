import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCn2L_mOhKRsJY1QYCx_iZymj_uUm2yTZs",
    authDomain: "hopeful-nova-399405.firebaseapp.com",
    projectId: "hopeful-nova-399405",
    storageBucket: "hopeful-nova-399405.appspot.com",
    messagingSenderId: "425820017237",
    appId: "1:425820017237:web:ed339def888bd050ddfadc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);