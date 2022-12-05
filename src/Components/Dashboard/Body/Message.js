// import { SearchOutlined } from '@mui/icons-material'
// import { Avatar, IconButton } from '@mui/material'
import  {db} from "../../../firebase/firebase"
import { 
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,

} from "firebase/firestore"
import React, { useEffect, useState } from 'react'
import "./Message.css"

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // useEffect(() => {
  //   addDoc(collection(db, 'messages').onSnapshot((snapshot) => {
  //     const messages = snapshot.docs.map((doc) => doc.data());
  //     setMessages(messages);
  //   }));
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(collection('messages').add({
      message: newMessage,
      timestamp: getFirestore.serverTimestamp()
    }))
    .then(() => {setNewMessage('');})
    .catch((error) => {console.error(error);})
  }
  // const [seed, setSeed] = useState('')

  // useEffect(()=>{
  //   setSeed(Math.floor(Math.random() * 5000))
  // }, [])

  return (
    <div className='body'>
      <h2> Chats </h2>
      <div className='chat'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Enter message'
            onChange={(e) => setNewMessage(e.target.value)}
            value = {newMessage}
          />
          <button type='submit'> Send </button>
        </form>
      </div>



      {/* Ssssanga tutorial */}
      {/* <div className='sidebar__content'>
        <div className='body_area'>
          <div className='sidebar'>
            <div className='sidebar_header'>
              <Avatar/>
            </div>

            <div className='sidebar_search'>
              <input placeholder='Search chats' type='text'/>
              <IconButton><SearchOutlined/></IconButton>
            </div>
          </div>

          <div className='sidebar_chats'>
            <div className='chats__chats'>
              <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
              <div className='chats__info'>
                <h2> username </h2>
                <p> this is my message to you</p>
            </div>
            </div>
          </div>

        </div>
      </div>   */}
    </div>
  )
}

export default Message;