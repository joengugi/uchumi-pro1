import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import PostDetails from '../Dashboard/Body/PostDetails'

const Fullcard = ({Bname,background,goal,image,city,cashFlow,sales,profit,aqCost}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        onSnapshot( collection(db, "posts"),
        (snapshot) => {setPosts(snapshot.docs)})
    })
  return (
    <div>

      <div className='e-profile'>
        
      </div>
        {/* {posts.map((post)=>(
        <PostDetails
          id={post.id}
          image={post.data().image}
          goal={post.data().goal}
          background ={post.data().background}
          Bname={post.data().Bname}
          city={post.data().city}
          cashflow = {post.data().cashFlow}
          sales = {post.data().sales}
          profit = {post.data().profit}
          aq_cost = {post.data().aqCost}
          
        />
      ))} */}
    </div>
  )
}

export default Fullcard