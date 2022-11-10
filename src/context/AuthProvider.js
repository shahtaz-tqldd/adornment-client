import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    },[])
    const authInfo = {
        user,
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider