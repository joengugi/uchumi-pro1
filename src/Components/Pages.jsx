import React from 'react'
import Header from './Common/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GetStarted from './Services/GetStarted'
import About from './About/About'
// import Contact from './Contact/Contact'
import Home from './Home/Home'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import Reset from './PasswordReset/Reset'
import { AuthProvider } from './Contexts/AuthContext'
import Dashboard from './Dashboard/Dashboard'
import AddPost from "../Components/Dashboard/Body/AddPost"
import Profile from '../Components/Dashboard/DashHeader/Profile/Profile'

import Homepage from './Dashboard/Body/Homepage'
// import Connect from './Dashboard/Body/Connect'
import Message from './Dashboard/Body/Message'
import PrivateRouter from './PrivateRouter'
import MyPosts from './Dashboard/Body/MyPosts'
import Fullcard from './Investors/Fullcard'
import Investors from './Investors/Investors'
import Allposts from './Investors/Allposts'


const Pages = () => {
  return (
   <>
      <AuthProvider> 
        <Router> 
        {/* <Header /> */}
          <Routes>
              <Route path='/' element = {<Home/>} />
              <Route path='/get-started' element = {<GetStarted/>}/> 
              <Route path='/about' element = {<About/>}/>
              {/* <Route path='/contact' element = {<Contact/>} /> */}
              <Route path='/sign-up' element = {<Signup/>} />
              <Route path='/log-in' element = {<Login/>} />
              <Route path='/dashboard/*' element = {<PrivateRouter> <Dashboard/> </PrivateRouter>} />
              <Route path='/reset' element = {<Reset/>} />
              <Route path='/addpost' element = {<AddPost/>} />
              <Route path='/profile' element = {<Profile/>} />
              <Route path='/homepage' element = {<Homepage />} />
              <Route path='/message' element = {<Message />} />
              {/* <Route path='/connect' element = {<Connect />} /> */}
              <Route path='/posts' element = {<MyPosts />} />
              <Route path='/fullcard' element = {<Fullcard/>} />
              <Route path='/investor-dash' element = {<Investors />} />
              <Route path='/allposts' element = {<Allposts/>} />
          </Routes>
        </Router>
      </AuthProvider>
   </>
  )
}

export default Pages