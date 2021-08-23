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
            <div className='position-absolute d-flex flex-column' style={{ left: '3%', top: '15%' }}>

                <div className=' text-center p-1 py-2 rounded-3 mb-3 bg-light'> <FontAwesomeIcon color={'#3b51a3'} size='3x' icon={faFacebookF}></FontAwesomeIcon></div>
                <div className=' text-center p-1 py-2 rounded-3 mb-3 bg-light'> <FontAwesomeIcon color={'#5da9dd'} size='3x' icon={faTwitter}></FontAwesomeIcon></div>
                <div className=' text-center p-1 py-2 rounded-3 mb-3 bg-light'> <FontAwesomeIcon color={'#ca5080'} size='3x' icon={faInstagram}></FontAwesomeIcon></div>
                <div className=' text-center p-1 py-2  rounded-3 mb-3 bg-light'> <FontAwesomeIcon color={'#e61e24'} size='3x' icon={faYoutube}></FontAwesomeIcon></div>

                {/* <img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
                <img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
                <img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
                <img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/> */}

            </div>
        </div>
    </div>);

}

export default Navbar;