import { auth, googleProvider } from "config/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const handleUserSignup = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential?.user;
      return user;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const handleUserLogin = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential?.user;
      return user;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const handleGoogleOauth = async () => {
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      return token;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const authServices = { handleUserSignup, handleUserLogin, handleGoogleOauth };
