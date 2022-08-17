import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs, collection,query, orderBy } from 'firebase/firestore'

import { project, codeLenguaje } from './types'

const firebaseConfig = {
 apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
 authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
 projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
 storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
 appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const CollectionProjects = 'projects'
const CollectionCode = 'codeLenguaje'

export const getProjects = async () => {
 const querySnapshot = await getDocs(query(collection(db, CollectionProjects)))
 const projectList: project[] = []
 querySnapshot.forEach(doc => {
  const project = {
   ...doc.data(),
   id: doc.id,
  } as project
  projectList.push(project)
 })

 return projectList
}

export const getCodeLenguajes = async () => {
 const querySnapshot = await getDocs(query(collection(db, CollectionCode),orderBy('rating','desc')))
 const projectList: codeLenguaje[] = []
 querySnapshot.forEach(doc => {
  const project = {
   ...doc.data(),
   id: doc.id,
  } as codeLenguaje
  projectList.push(project)
 })

 return projectList
}
