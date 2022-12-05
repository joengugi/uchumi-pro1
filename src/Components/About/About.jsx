import React from 'react'
import Hero from '../Home/Hero/Hero'
import './About.css'
import Footer from '../Common/footer/Footer'
import banner from '../Common/images/banner2.jpg'

const About = () => {
  return (
    <>
      <Hero/>
      <div className="kuhusu">
        <section className="info">
          <div className="more">
            <h3>About UchumiPro </h3>
            <p>UchumiPro is a platform built specifically to bring entrepreneurs and investors together.<br/>
              Join your fellow entrepreneurs on this platform on a journey to find funding for your startup.<br/>
              Looking to scale? No worries. Find investors to fund your business, chat with them and conduct meetings.<br/>
              UchumiPro is here to bring your business to the next level!.
            </p>
          </div>
          <img src={banner} alt=''/>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default About