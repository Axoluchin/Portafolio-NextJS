import { Timestamp } from "firebase/firestore"
export interface project {
 name: string
 image: string
 resume: string
 tech: string[]
 date: string
 githubRepo?: string
 webPage?: string
 id: string
 desc: string
}

export interface codeLenguaje {
    image: string,
    name: string,
    rating: number,
    id: string
}

export interface video {
 image: string
 title: string
 url: string
 desc: string
}

export interface blog {
    title: string,
    image: string,
    desc: string,
    startText: string,
    finalText: string
    blog: string[]
    id: string
    date: Timestamp
}