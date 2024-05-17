import React from 'react'
import './NewsLetter.css'


const NewsLetter = ()=>{
    return(
        <div className="newsletter">
            <h1>Get Exclusion Offers On Your Email</h1>
            <p>Subscrible to our newletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email Id'/>
                <button>Subscrible</button>
            </div>
        </div>
    )
}

export default NewsLetter