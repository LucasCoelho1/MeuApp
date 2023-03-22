import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDUwg33JjSyhPWqB2-E_GD8RvSvPsnew1Y",
  authDomain: "aulafirebase-880d2.firebaseapp.com",
  projectId: "aulafirebase-880d2",
  storageBucket: "aulafirebase-880d2.appspot.com",
  messagingSenderId: "590517954023",
  appId: "1:590517954023:web:16daf621d61dfe9cad4942",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth }