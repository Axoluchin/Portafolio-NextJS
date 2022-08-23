import { initializeApp } from 'firebase/app'
import {
 getFirestore,
 getDocs,
 collection,
 query,
 orderBy,
 doc,
 getDoc,
 limit,
} from 'firebase/firestore'

import { project, codeLenguaje, blog, blogFirebase } from './types'

const firebaseConfig = {
 apiKey: process.env.API_KEY,
 authDomain: process.env.AUTH_DOMAIN,
 projectId: process.env.PROJECT_ID,
 storageBucket: process.env.STORAGE_BUCKET,
 messagingSenderId: process.env.MESSAGING_SENDER_ID,
 appId: process.env.APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const CollectionProjects = 'projects'
const CollectionCode = 'codeLenguaje'
const CollectionTools = 'tools'
const CollectionBlog = 'blog'

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
 const querySnapshot = await getDocs(
  query(collection(db, CollectionCode), orderBy('rating', 'desc'))
 )
 const codeList: codeLenguaje[] = []
 querySnapshot.forEach(doc => {
  const code = {
   ...doc.data(),
   id: doc.id,
  } as codeLenguaje
  codeList.push(code)
 })

 return codeList
}

export const getTools = async () => {
 const querySnapshot = await getDocs(
  query(collection(db, CollectionTools), orderBy('rating', 'desc'))
 )
 const projectList: codeLenguaje[] = []
 querySnapshot.forEach(doc => {
  const tool = {
   ...doc.data(),
   id: doc.id,
  } as codeLenguaje
  projectList.push(tool)
 })

 return projectList
}

export const getBlogs = async () => {
 const querySnapshot = await getDocs(query(collection(db, CollectionBlog)))
 const blogList: blog[] = []
 querySnapshot.forEach(doc => {
  const blogFB = doc.data() as blogFirebase
  const blog = { ...blogFB, date: blogFB.date.toJSON(), id: doc.id } as blog
  blogList.push(blog)
 })
 return blogList
}

export const getBlog = async (id: string) => {
 const docRef = doc(db, CollectionBlog, id)
 const docSnap = await getDoc(docRef)

 if (docSnap.exists()) {
  const blogFB = docSnap.data() as blogFirebase
  const blog = { ...blogFB, date: blogFB.date.toJSON(), id: docSnap.id } as blog

  return blog
 } else {
  return null
 }
}

export const getLastBlogs = async () => {
 const querySnapshot = await getDocs(
  query(collection(db, CollectionBlog), limit(5))
 )
 const blogList: blog[] = []
 querySnapshot.forEach(doc => {
  const blogFB = doc.data() as blogFirebase
  const blog = { ...blogFB, date: blogFB.date.toJSON(), id: doc.id } as blog
  blogList.push(blog)
 })
 return blogList
}
