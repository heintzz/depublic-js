import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: "depublic-v1.firebaseapp.com",
  projectId: "depublic-v1",
  storageBucket: "depublic-v1.appspot.com",
  messagingSenderId: "649201283036",
  appId: "1:649201283036:web:c0a5a271e59bf388caa919",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
