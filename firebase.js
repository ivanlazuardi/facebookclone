import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBX8tTcQT-4_pDavE7eTCdnvC9H6fDgcV8",
    authDomain: "facebookclone-e0f45.firebaseapp.com",
    projectId: "facebookclone-e0f45",
    storageBucket: "facebookclone-e0f45.appspot.com",
    messagingSenderId: "1002118066914",
    appId: "1:1002118066914:web:36603c48ca205ed99e24bb"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };