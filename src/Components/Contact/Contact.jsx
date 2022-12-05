import React from 'react'
import Footer from '../Common/footer/Footer'
import Hero from '../Home/Hero/Hero'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Hero />
      <div className="contact-us">
        <div className="container">
          <div className="text">
            <h3> Have any enquiries? </h3>
            <p>Contact us on any of our social media platforms, or fill out the contact form.<br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptatibus laudantium reiciendis autem officia consequatur?<br/> Velit distinctio, quis quaerat veritatis, quibusdam modi repellat, <br/> assumenda aperiam facilis quia reprehenderit, impedit eligendi? Veritatis.</p>
          </div>
          <div className="contact-form">
            <form>
              {/* <input type="textarea" placeholder='Enter message here'/> */}
              <textarea placeholder = 'Enter message'/>
            </form>
            <button className="send">Send</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact