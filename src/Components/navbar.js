import  React from 'react'
import '../Styles/navbar.css'
const Navbar = ()=>{
    return (<div>
        <div className='row p-0 m-0 mt-2'>
            <div className="col-3 p-0">
                <div className='position-relative'>
                    <img className='position-absolute ' style={{right:25,zIndex:1}} width='140px' height='200px' src='./images/shrimp-zone-seafood_menu_2.jpg'/>
                </div>
            </div>
            <div className='col-6 p-0'></div>
            <div className="col-3 d-flex justify-content-center align-items-center p-0 py-3">
                <div className='col-5 fsiz'>
                    خريطة الموقع
                </div>
                <div className='col-2'>|</div>
                <div className='col-5 fsiz'>
                    تواصل معانا 
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center p-0 py-2 bg-secondary' >
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
            <div className='position-absolute' style={{right:'6%' , bottom:'10%'}}>
                <img  height='50' width='180' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
            </div>
            <div className='position-absolute d-flex flex-column' style={{left:'3%' , top:'25%'}}>
                <img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
                <img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
                <img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
                <img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
          
            </div>
        </div>
    </div>);

}

export default Navbar ; 