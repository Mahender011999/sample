import React from 'react'
import { MdEmail } from "react-icons/md";
import {BsTelephone} from "react-icons/bs"

const Navebar = () => {
  return (
    <nav>
        <div className='nav-log-container'> 
            <logo className="logo">Panauto</logo>
        </div>
        <div className='navbar-links-container'>
            <a className='phone' href ="#@"> <BsTelephone/> +1720813142</a>
            <a className='service' href ="#@"> <MdEmail/> service@pabauto.in</a>
            <button className="primay-button">download the mobile app</button>

        </div>
    </nav>
  )
}

export default Navebar