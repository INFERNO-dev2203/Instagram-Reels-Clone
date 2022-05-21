import React, { useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from "../firebase";

export const AuthContext = React.createContext()

function AuthWrapper({children}) {


    const[user,setUser] = React.useState(null)
    const[loading,setLoading] = React.useState(true)

    useEffect(() => {
       onAuthStateChanged(auth, (user) =>{
           if(user){
               setUser(user)
           }
           else{
               setUser("")
           }
       })
        setLoading(false);
    },[])

   

    async function Login(email,password){
       return await signInWithEmailAndPassword(auth, email, password)
   }

   async function logout() {
       await signOut(auth);
   }

    async function  forgot(email) {
     return await sendPasswordResetEmail(auth,email)  
   }

    async function signup(email,password) {
       return await createUserWithEmailAndPassword(auth,email,password)   
   }

const store = {
    Login,
    user,
    logout,
    forgot,
    signup,
    
    
}   

 return(
   <AuthContext.Provider value={store}>
    {!loading && children}
    </AuthContext.Provider>
)
}

export default AuthWrapper