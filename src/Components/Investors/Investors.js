import React from 'react'
import { Link } from 'react-router-dom'
import { elastic as Menu} from 'react-burger-menu'
import './Investors.css'
import Footer from "../Common/footer/Footer"
function Investors() {
  return (
    <div className='investors'>
      <div className='navbar'>
        <div className='logo'> Uchumipro </div>

        <div className='links'>

          <div className='sidebar'> 
            <Menu>
              {/* <Link to="/dashboard"> Home </Link> */}
              <Link to="/allposts"> View Posts </Link>
              <Link to="/message"> Message </Link>
              <Link to="/connect"> Connect </Link>
            </Menu> 
          </div>

          <div className='navbar__links'>
          <Link to="/investor__profile"> My profile </Link>
          </div>
        </div>
    </div>

    <div className='body'>
      <div className='banner'>
          <h3> Welcome to UchumiPro</h3>
          <p> Find businesses and startups that interest you and fund them.</p>
          {/* <button> Get Started</button> */}
        </div>
      </div>

      <div className='body-info'>
          <div className='info-1'>
            <h3> UchumiPro for investors.</h3>
            <p>Find your suitable business of choice begin the funding process<br/><br/> Kick off your investment journey with Uchumipro.!!!</p>
          </div>

          <div className='info-2'>
            <div className='tools'>
              {/* <img src={} alt=''></img> */}
              <h4> step 1 </h4>
              <p> Sneak a preview of available posts.</p>
            </div>

            <div className='tools'>
              {/* <img src={} alt=''></img> */}
                <h4> step 2 </h4>
                <p> Engage with entrepreneur posts.<br/> You can contact entrepreneurs by sending them a message.</p>
            </div>

            <div className='tools'>
              {/* <img src={} alt=''></img> */}
                <h4> Step 3 </h4>
                <p> Schedule virtual meetings and begin the funding process.</p>
            </div>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Investors