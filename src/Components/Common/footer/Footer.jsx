import React from 'react'
import { footer } from '../../data/Data'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <section className="footerContact">
            <div className="footer-container">
                <div className="send-flex">
                    <div className="text">
                        <h1> Have any questions? </h1>
                        <p>We'll help you grow your business exponentially.</p> 
                    </div>
                    <button className='btn5'> Contact us today </button>
                </div>
            </div>
        </section>

        <footer>
            <div className="f-container">
                <div className="f-box">
                    <div className="f-logo">
                        <img src='' alt='' />
                        <h2>Do you need anything? We'll help.</h2>
                        <p>Receive updates, hot deals, tutorials, direct in your inbox.</p>
                    </div>
                    <div className="f-input">
                        <input type="text" placeholder='Email Address' name='' id='' />
                        <button> Subscribe </button>
                    </div>
                </div>

                {footer.map((val) => (
                    <div className="sanduku">
                        <h3>{val.title}</h3>
                        <ul>
                            {val.text.map((items) => (
                                <li>{items.list}</li>
                            ))}
                        </ul>
                    </div>
                )
                )}
            </div>
        </footer>
        <div className="legal">
            <span> C 2022 UchumiPro.</span>
        </div>
    </>
  )
}

export default Footer