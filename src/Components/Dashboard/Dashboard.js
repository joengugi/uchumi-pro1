import React from 'react'
import Footer from '../Common/footer/Footer'
import Homepage from './Body/Homepage'
import DashHeader from './DashHeader/DashHeader'
// import Dash from './DashHeader/Profile/Profile'

const Dashboard = () => {
  return (
    <div>
        {/* <Dash/> */}
        <DashHeader/>
        <Homepage/>
        <Footer/>
    </div>
  )
}

export default Dashboard