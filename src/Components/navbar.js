import React from 'react'
import '../Styles/navbar.css'
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
    return (<div>
     
     
        <div className='bgimg position-relative'>
            <div className=' borderside position-absolute text-light' style={{ right: '6%', bottom: '12%' }}>
                <div style={{ fontWeight: 'bold' }} className='bgnavbar'>
                    معبد الفيله 
                </div>
            </div>
           
        </div>
    </div>);

}

export default Navbar;