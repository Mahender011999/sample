import React from 'react'
import './foot.css'
import { MdEmail } from "react-icons/md";
import {BsTelephone} from "react-icons/bs"
import {FiFacebook} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
import {CiYoutube} from "react-icons/ci"
import {CiLinkedin} from "react-icons/ci"
import {FaInstagram} from "react-icons/fa"


const foot = () => {
  return (
    
   
    
    <nav>
        
    <div className='nav-log-container'> 
        <logo className="logo">Panauto</logo>
        <p className='para'>open auto @ allrights reserved</p>
    </div>
    <div className='navbar-links-container'>
        <a href ="#@"> <BsTelephone/> +1720813142</a>
        <a href ="#@"> <MdEmail/> service@pabauto.in</a>
        <div className='icons'>
        <FiFacebook className='facebook'/>
         <FiTwitter className='twitter'/>
         <CiYoutube className='youtube'/>
         <CiLinkedin className='linkedin'/>
         <FaInstagram className='instagram'/>
        </div>

    </div>
</nav>

  )
}

export default foot