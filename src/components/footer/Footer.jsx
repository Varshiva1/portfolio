import React from 'react'
import './footer.css'
import {TbBrandGmail} from 'react-icons/tb'
import {BsTwitter} from 'react-icons/bs'
import {TbBrandLinkedin}from 'react-icons/tb'


const Footer = () => {
  return (
    <footer>

      <a href='' className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href='#' >Home</a></li>
        <li><a href='#about' >About</a></li>
        <li><a href='#experience' >Expertise</a></li>
        <li><a href='#services' >Skills</a></li>
        <li><a href='#portfolio' >Portfolio</a></li>
        <li><a href='#testimonials' >Profiles</a></li>
        <li><a href='#contact' >Contact</a></li>

      </ul>


      <div className='footer__socials'>

        <a href='https://twitter.com/Varshiva1'target="_blank"><BsTwitter/></a>
        <a href='https://www.linkedin.com/in/shivamvarun75/'target="_blank"><TbBrandLinkedin/></a>



      </div>


      <div className='footer__copyright'>
        <small>Shivam Varun</small>
      </div>


    </footer>
  )
}

export default Footer