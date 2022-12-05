import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../data/Data'
// import Signup from '../Signup/Signup'
// import Signup from '../Signup/Signup'
import "./Header.css"

const Header = () => {

    const [navList, setNavList] = useState(false)

  return (
    <>
        <header>
            <div className='flex'>
                <div className='logo'>
                    <img src='./images/team.png' alt='' /><h2> UchumiPro </h2>
                </div>
                <div className='nav'>
                    <ul className={navList ? 'small' : 'flex'}>
                        {nav.map((list, index) => (
                            <li key={index}>
                                <Link to={list.path}> {list.text} </Link>
                            </li>
                            ))
                        }
                    </ul>
                </div>
                {/* <div className='button-flex'>
                    <button className = 'btn1'>
                        <i className = 'fa fa-sign-out'></i> <Link to = {Signup}> Sign up </Link>
                    </button>
                </div> */}
                <div className = "toggle">
                    <button onClick = {() => setNavList(!navList)}>
                        { navList ?  <i className ="fa fa-times"></i> : <i className = 'fa fa-bars'></i>}
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header