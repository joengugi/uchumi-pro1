import React from 'react'
import { AuthProvider } from '../Contexts/AuthContext'
import Signup from '../Signup/Signup'

const Services = () => {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  )
}

export default Services