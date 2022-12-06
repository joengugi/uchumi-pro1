import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { elastic as Menu} from 'react-burger-menu'
import './Investors.css'
import { collection, onSnapshot } from 'firebase/firestore'
import Footer from "../Common/footer/Footer"
import { db } from '../../firebase/firebase'
function Investors() {
  const[posts ,setPosts] =useState([])

  useEffect(() => {
        onSnapshot( collection(db, "posts"),
        (snapshot) => {setPosts(snapshot.docs)})
  })

  return (
    <div className='investors'>
      
        <Footer/>
    </div>
  )
}

export default Investors