import React from 'react'
import { Link } from 'react-router-dom'
import { elastic as Menu} from 'react-burger-menu'

function Header() {
  return (
    <div className='navbar'>
      <div className='logo'> Uchumipro </div>
      
      <div className='links'>

        <div className='sidebar'> 
          <Menu>
            {/* <Link to="/dashboard"> Home </Link> */}
            <Link to="/posts"> My Posts </Link>
            <Link to="/message"> Message </Link>
            <Link to="/connect"> Connect </Link>
          </Menu> 
        </div>

          <ul className='nav-links'>
            <Link to="/allposts"> View Posts </Link>
            <Link to="/cart"> Cart </Link>
          </ul>

        </div>
    </div>
  )
}

export default Header