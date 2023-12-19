// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMBpWJSOFesdbVL6rt6f3QizD50OdYiEY",
  authDomain: "netflix-1f272.firebaseapp.com",
  projectId: "netflix-1f272",
  storageBucket: "netflix-1f272.appspot.com",
  messagingSenderId: "997862789508",
  appId: "1:997862789508:web:5d28465162282348b18dd1",
  measurementId: "G-8WT6R9SE4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();