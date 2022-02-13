import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
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

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };