import React from 'react'
import insta from "../images/Instagram Icon.png"
import github from "../images/GitHub Icon.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-items">
        <img src={insta} alt="" className='footer-image'/>
        <a href="https://github.com/MohitGururani" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className='footer-image' />
        </a>
      </div>
    </div>
  )
}

export default Footer
