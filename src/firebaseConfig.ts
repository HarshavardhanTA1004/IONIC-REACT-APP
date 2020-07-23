import * as firebase from 'firebase'
import { toast } from './toast'

const config = {
    apiKey: "AIzaSyBB75460RhIwltQZS0uNP5XiG8Re3TIaR8",
    authDomain: "libraryapp-65378.firebaseapp.com",
    databaseURL: "https://libraryapp-65378.firebaseio.com",
    projectId: "libraryapp-65378",
    storageBucket: "libraryapp-65378.appspot.com",
    messagingSenderId: "514979451863",
    appId: "1:514979451863:web:bbee3a4aa63ac1af9cf192",
    measurementId: "G-TRY1SNEMP6"
}

firebase.initializeApp(config)


export async function loginUser(username: string, password: string){
    const email = `${username}@gmail.com`
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email,
            password)
            console.log(res)
            return true 
    }catch(error){
      toast(error.message, 4000)
      return false
    }
    
}

export async function registerUser(username: string, password: string){
    const email = `${username}@gmail.com`
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(email,
            password)
            console.log(res)
            return true 
    }catch(error){
      toast(error.message, 4000)
      return false
    }
    
}


