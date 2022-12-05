import React, { Fragment, useState,useEffect } from 'react'
import easy from "../../Common/images/snap.png"
import free from "../../Common/images/tax-free.png"
import extend from "../../Common/images/expand.png"
// import PostDetails from './PostDetails'
import { db } from '../../../firebase/firebase'
import "./Homepage.css"
import { collection, onSnapshot } from 'firebase/firestore'

const Homepage = () => {

  const[posts ,setPosts] =useState([])
  
  useEffect (()=>{
    onSnapshot(collection(db,"posts"),
    (snapshot)=>{setPosts(snapshot.docs); 
    }
    )

},[])
  // const [details, setDetails] = useState(PostDetails);

  return (
    <div className='Home'>
      <div className='banner'>
        <h3> Powerful, Business Fundraising</h3>
        <p> Fast, easy and convenient to grow your business.</p>
        <button> Get Started</button>
      </div>

      <div className='Home-info'>
        <div className='info-1'>
          <h3> UchumiPro Gives you more.</h3>
          <p> Boost your crowdfunding effort with our<br/> enhanced tools and features.<br/>We'll help you get funding for your business faster. !!!</p>
        </div>
        <div className='info-2'>
          <div className='tools'>
            <img src={easy} alt=''></img>
            <h4> Easy </h4>
            <p> Create your post in minutes, <br/> and it will be shared instantly to investors.</p>
          </div>
          <div className='tools'>
            <img src={free} alt=''></img>
              <h4> Free </h4>
              <p> Create your post for free, <br/> tell investors more about  your business or ideas.</p>
          </div>
          <div className='tools'>
            <img src={extend} alt=''></img>
              <h4> Extend your reach </h4>
              <p> Your post will be read by investors <br/> all over the country giving you wide outreach.</p>
          </div>
        </div>
      </div>

      {/* <div className='posts'>
        <Fragment>
          <section className='e-posts'>
            <div className='centre'> <h3> Latest Posts </h3></div>
            <div className='zz'>
                    <div className='singlepost'>

                      {posts.map((post)=>(

                        <PostDetails
                          id={post.id}
                          image={post.data().image}
                          goal={post.data().goal}
                          background ={post.data().background}
                          Bname={post.data().Bname}
                          city={post.data().city}
                       
                        /> ))

                      }
                    </div>
            </div>
          </section>
        </Fragment>
      </div> */}
    </div>
  )
}

export default Homepage