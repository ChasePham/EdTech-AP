import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    // Config goes here
}

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();


export {auth,db};


// In your main file, (usually App.js) import the db and auth
import {db,auth} from "./firebase.config"