import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD7FGvewRxIFpLe8e_kj8Gexn1iSX6NHx8",
  authDomain: "yoga-otp-ec237.firebaseapp.com",
  projectId: "yoga-otp-ec237",
  storageBucket: "yoga-otp-ec237.appspot.com",
  messagingSenderId: "1095676942381",
  appId: "1:1095676942381:web:ffb47573360ec3811300a4",
  measurementId: "G-87J9DSNZ91"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
