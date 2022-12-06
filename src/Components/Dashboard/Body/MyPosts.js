import { collection, onSnapshot, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../../firebase/firebase'
import PostDetails from './PostDetails'
import "./MyPosts.css"
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserUid, setActiveUser } from '../../../Redux/reducers/userSlice'

const MyPosts = () => {

  const[posts ,setPosts] = useState([])
  const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const uid=useSelector(selectUserUid);


    useEffect(()=>
    onSnapshot(query(collection(db, "users"), where("uid", "==", uid)), (snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data());
        dispatch(setActiveUser({
          uid:doc.data().uid,
          userEmail:doc.data().email,
          userName:doc.data().username,
          profilePic:doc.data().profilepic,
    
        }))
      });
    }),[uid,dispatch]);
    

  useEffect (() => {
    // eslint-disable-next-line no-unused-expressions
    onSnapshot(collection(db, "posts"), where("email", "==", currentUser.email),
    ( snapshot) => {setPosts(snapshot.docs);
    
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