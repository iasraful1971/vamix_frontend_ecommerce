
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCbVJTGHYLwU_UOrVAEfm_lhYQRSyxsDys",
  authDomain: "firstfirebaseauth-198a8.firebaseapp.com",
  projectId: "firstfirebaseauth-198a8",
  storageBucket: "firstfirebaseauth-198a8.appspot.com",
  messagingSenderId: "889279547480",
  appId: "1:889279547480:web:231a81687c18dbe0e0a22d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const firebaseDb = getFirestore(app)

export default firebaseDb;