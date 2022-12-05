import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import PostDetails from '../Dashboard/Body/PostDetails'
import "./Investors.css"


const Allposts = () => {

  const[posts ,setPosts] =useState([])

  useEffect(() => {
        onSnapshot( collection(db, "posts"),
        (snapshot) => {setPosts(snapshot.docs)})
  })
  
  return (
    
    <div className='allposts'>
      <div className='allposts__header'>
        <h3> Latest Posts</h3>
        <div className='sort'>
          <h4> Sort By: </h4>
          <select>
            <option></option>
            <option> City </option>
            <option> Business category </option>
            <option> Funds Required </option>
          </select>
        </div>
      </div>

      <div className='allposts__posts'>
        {posts.map((post)=>(
          <PostDetails
            id={post.id}
            image={post.data().image}
            goal={post.data().goal}
            background ={post.data().background}
            Bname={post.data().Bname}
            city={post.data().city}
          />
        ))}
      </div>
     
    </div>
  )
}

export default Allposts