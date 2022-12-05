import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase/firebase'
import PostDetails from './PostDetails'
import "./MyPosts.css"

const MyPosts = () => {

  const[posts ,setPosts] = useState([])

  useEffect (() => {
    // eslint-disable-next-line no-unused-expressions
    onSnapshot(collection(db, "posts"),
    (snapshot) => {setPosts(snapshot.docs);
    })
  })

  return (
    <div className='myposts'>
      <h2> My Posts</h2>

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
  )
}

export default MyPosts