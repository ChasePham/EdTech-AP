import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCqKcJqzr0y5CNXl0YyVHoomQ4dAuWTwt8",
authDomain: "octomize-ee84c.firebaseapp.com",
projectId: "octomize-ee84c",
storageBucket: "octomize-ee84c.appspot.com",
messagingSenderId: "946438177458",
appId: "1:946438177458:web:bdbfd193e6c579d5df3fab",
measurementId: "G-1FH9X613GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Not really needed, just gives analytics of how many ppl visit app
// const analytics = getAnalytics(app); 

console.log(app)

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();


export {auth,db};


