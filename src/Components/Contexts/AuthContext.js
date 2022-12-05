import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../../firebase/firebase'
import { onAuthStateChanged } from "firebase/auth"

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth, (user => {
            // console.log(user.email);
            setCurrentUser(user)
            setLoading(false)
            
        }))
        return unsubscribe()
    }, [])
    
    console.log(currentUser)

   const value = {currentUser}

  return (
    <AuthContext.Provider value = {value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

