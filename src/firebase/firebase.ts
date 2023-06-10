// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4iSbZu2Tg9Gw-uaZFca6HS_HgDc6QyJ0",
  authDomain: "my-book-of-shows-2.firebaseapp.com",
  projectId: "my-book-of-shows-2",
  storageBucket: "my-book-of-shows-2.appspot.com",
  messagingSenderId: "862728329910",
  appId: "1:862728329910:web:4ce580a30651c041176417",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

if (process.env.NODE_ENV == "development") {
  try {
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
    connectFirestoreEmulator(db, "localhost", 8080);
  } catch (err) {
    console.log(`There was an error ===> ${err}`);
  }
}

export default app;
