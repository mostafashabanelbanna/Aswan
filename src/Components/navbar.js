import  React from 'react'
import '../Styles/navbar.css'
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = ()=>{
    return (<div>
        <div className='row p-0 m-0 mt-2'>
            <div className="col-3 p-0">
                <div className='position-relative'>
                    <img className='position-absolute ' style={{right:25,zIndex:1}} width='140px' height='200px' src='./images/icons/logo_banner-0١.png'/>
                </div>
            </div>
            <div style={{color:'#7f807f'}} className='col-6 text-center d-flex justify-content-center align-items-center p-0'>
                    <div className='col-1'>
                        <img className='w-75' src='./images/icons/home-0١.png'/>
                    </div>

                    <div className='col-1'>|</div>

                    <div className='col-1 text-center'>
                    <img className='w-100' src='./images/icons/citizen-0١.png'/>
                        </div>

                    <div className='col-1'>|</div>

                    <div className='col-1'>
                    <img className='w-75' src='./images/icons/Investor-0١.png'/>

                    </div>

                    <div className='col-1'>|</div>

                    <div className='col-1'>
                    <img className='w-75' src='./images/icons/Tourist-0٢.png'/>

                    </div>
                    
            </div>
            <div style={{color:'#7f807f'}} className="col-3 d-flex justify-content-center align-items-center p-0 py-3">
                <div className='col-5 fsiz'>
                    خريطة الموقع
                </div>
                <div className='col-2'>|</div>
                <div className='col-5 fsiz'>
                    تواصل معانا 
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center p-0 py-2' style={{backgroundColor:'#7f807f' , color:'white'}} >
            <div className='fsiz'>عن المحافظة</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>قيادات المحافظة</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>المحافظون السابقون</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>لقاءات و قرارات السيد المحافظ</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>الديوان العام</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>مدن المحافظة</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>مجلس النواب</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>مجلس الشيوخ</div>
        </div>
        <div className='bgimg position-relative'>
            <div className='position-absolute' style={{right:'6%' , bottom:'22%'}}>
                <img  height='50' width='180' src={'./images/cover.jpg'}/>
            </div>
            <div className='position-absolute d-flex flex-column' style={{left:'3%' , top:'15%'}}>
                
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

export default Navbar ; 