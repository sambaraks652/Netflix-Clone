// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmBvXMxfcTu2nhE7jgTTuWcf9OPA29Td8",
  authDomain: "netflix-clone-86930.firebaseapp.com",
  projectId: "netflix-clone-86930",
  storageBucket: "netflix-clone-86930.firebasestorage.app",
  messagingSenderId: "982795928758",
  appId: "1:982795928758:web:e0f7b4d209f6cb02d3d217",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
