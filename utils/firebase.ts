import { initializeApp } from 'firebase/app'

export const firebaseConfig = {
 apiKey: process.env.FB_apiKey,
 authDomain: process.env.FB_authDomain,
 projectId: process.env.FB_projectId,
 storageBucket: process.env.FB_storageBucket,
 messagingSenderId: process.env.FB_messagingSenderId,
 appId: process.env.FB_appId,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
