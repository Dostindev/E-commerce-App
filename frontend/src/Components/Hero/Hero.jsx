import React from 'react'
import './Hero.css'

import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/herods1.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
       <h2>Only new clothes</h2>
       <div>
         <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
         </div>
         <p>clothes</p>
         <p>for everyone</p>
       </div>
       <div className="hero-latest-btn">
          <div>Welcome</div>
       </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
