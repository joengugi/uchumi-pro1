import React from 'react'
import { Link } from 'react-router-dom';
import './Homepage.css'

function PostDetails ({Bname,background,goal,image,city}) {
  


    return (
        <div className='rows'>    
            <div className='single-post'>
                <div className='card'>
                    <div className='post-thumbnail'>
                        <img src={image} alt=''/>
                    </div>

                    <div className='post-content'>
                        <div className='titles'> 
                            <h3> <strong>{Bname}</strong></h3>
                            <h4> <i class='fa-solid fa-location-dot'></i> {city} </h4> 
                        </div>

                        <div className='mark'>
                            <span><strong>{background}</strong></span>
                        </div>
                                
                        <div className='post-footer'>
                            <span className='amount'>Goal: {goal}</span>
                            <button> <Link to='/fullcard'> View More </Link> </button>
                        </div>
                    </div>       
                </div>
            </div>
        </div>

   
    
  )
}

export default PostDetails;