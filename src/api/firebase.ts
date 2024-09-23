import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4UBVvwcFpybcZg9yWwpOB6LF8akAFK0s",
  authDomain: "adamresume-d6d18.firebaseapp.com",
  projectId: "adamresume-d6d18",
  storageBucket: "adamresume-d6d18.appspot.com",
  messagingSenderId: "651401076959",
  appId: "1:651401076959:web:e06191db2ff256e386c96a",
  measurementId: "G-GSFN36074T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);