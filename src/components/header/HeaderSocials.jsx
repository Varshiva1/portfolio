import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { BsFillFileBinaryFill } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>   
        <a href='https://www.linkedin.com/in/shivamvarun75/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Varshiva1' target="_blank"><FaGithub/></a>
        <a href='https://www.scaler.com/academy/profile/154cc3f0af73/' target="_blank"><BsFillFileBinaryFill/></a>
        
    </div>
  )
}

export default HeaderSocials