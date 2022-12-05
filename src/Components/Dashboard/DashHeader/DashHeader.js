import React, { useState } from 'react'  
import { Link } from 'react-router-dom'
import { elastic as Menu} from 'react-burger-menu'
import Data from "./mockData.json"
import "./DashHeader.css"
import profileicon from "../../Common/images/profile-user.png"
import posticon from "../../Common/images/social-media.png"


const DashHeader = () => {

  const [query, setQuery] = useState("");
 
  if (query.length > 0) {
    Data.filter((post) => {
    return post.name.match(query);
    });
  }  

  return (
    <div className='navbar'>
      <Menu>
        {/* <Link to="/dashboard"> Home </Link> */}
        <Link to="/posts"> My Posts </Link>
        <Link to="/message"> Message </Link>
        <Link to="/connect"> Connect </Link>
      </Menu>
      <div className='logo'> Uchumipro </div>
      <div className='search'>
        <input
         placeholder='search'
         type="text"
         onchange = {(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </div>
      <ul className='nav-links'>
        <Link to="/addpost"> <img src={posticon} alt="post" /> </Link>
        <Link to="/profile"> <img src={profileicon} alt="profile" /> </Link>
        <Link to="/investor-dash">Investors</Link>
      </ul>
    </div>
  )
}

export default DashHeader