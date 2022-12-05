// import { SearchOutlined } from '@mui/icons-material'

import React, { useEffect, useState } from 'react'
import "./Message.css"
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

const Message = ({id}) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // useEffect(() => {
  //   firebase.firestore().collection('messages').onSnapshot((snapshot) => {
  //     const messages = snapshot.docs.map((doc) => doc.data());
  //     setMessages(messages);
  //   });
  // }, []);

  
  const sendmessage = async(e)=>{
    e.preventDefault();
    const commentTosend = newMessage;
    setNewMessage("");
    await addDoc(collection(db,"posts",id,"messages"),{
      comment:commentTosend,
      // username:userName,
      timestamp:serverTimestamp(),
    })

    // setOpenComment(false);

  }
  // const [seed, setSeed] = useState('')

  // useEffect(()=>{
  //   setSeed(Math.floor(Math.random() * 5000))
  // }, [])

  return (
    <div className='body'>
      <h2> Chats </h2>
      <div className='chat'>
        <form >
          <input
            type="text"
            placeholder='Enter message'
            onChange={(e) => setNewMessage(e.target.value)}
            value = {newMessage}
          />
          <button type='submit' onClick={sendmessage}> Send </button>
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