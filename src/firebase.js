import {initializeApp} from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
        apiKey: "AIzaSyCn8NrYqCPvrlJQvLRiFuyQka1Y5ofIcs4",
        authDomain: "my-closet-react.firebaseapp.com",
        projectId: "my-closet-react",
        storageBucket: "my-closet-react.appspot.com",
        messagingSenderId: "890220822043",
        appId: "1:890220822043:web:bf1a4c03ccd145ea5802be",
        measurementId: "G-6S2D8N6BKG"    
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };