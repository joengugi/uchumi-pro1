import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './Contexts/AuthContext'

const PrivateRouter = ({children}) => {
    const {user} = useAuth();

    if (user) {
        return <Navigate to='/dashboard'/>
    }
  return children
}

export default PrivateRouter