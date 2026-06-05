 import { initializeApp } from 'firebase/app'
 import { getFirestore } from 'firebase/firestore'
 import { getAuth } from 'firebase/auth'
 import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDxb8Pwb_6sYmJEZKesLw3_GVZHcfs3lqU",
  authDomain: "my-react-app-bb205.firebaseapp.com",
  projectId: "my-react-app-bb205",
  storageBucket: "my-react-app-bb205.firebasestorage.app",
  messagingSenderId: "917984360295",
  appId: "1:917984360295:web:2e29f16a10523b66d9e1c2",
  measurementId: "G-QY5ND7R22K"
 }

 const app = initializeApp(firebaseConfig)
 const db = getFirestore(app)
 const auth = getAuth(app)
 const analytics = getAnalytics(app);
 export { db, auth }








