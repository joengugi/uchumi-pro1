import React from 'react'
import "./Featured.css";
import account from '../../Common/images/account.png'
import addition from '../../Common/images/addition.png'
import connection from '../../Common/images/connection.png'

const Featured = () => {
  return (
    <>
        <section className='featured-background'>
            <div className="featured-container">
                <div className="info">
                    <h2> UchumiPro is the ideal website for investors and entrepreneurs to interact and share ideas </h2>
                </div>
            </div>

            <div className="guide">
                <h3> Get started on UchumiPro in 3 steps </h3>
                <div className="steps">
                    <div className="step1">
                        <h4> Step 1 </h4>
                        <img src={addition} alt=''/>
                        <p> Create an account </p>
                    </div>

                    <div className="step2">
                        <h4> Step 2 </h4>
                        <img src= {account} alt=''/>
                        <p> Create a post about your business </p>
                    </div>

                    <div className="step3">
                        <h4> Step 3 </h4>
                        <img src={connection} alt=''/>
                        <p> Connect with investors and fellow entrepreneurs! </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Featured