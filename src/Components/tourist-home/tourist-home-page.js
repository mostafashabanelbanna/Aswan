import React from 'react'
import '../../Styles/tourist-home.css'
import TourStart from './tour-start';
import TouristAttraction from './tourist-attractions';
const TouristHome = () => {
    
    return (
        <div>
            <div className='touristcontainer mt-4 d-flex p-0'>
                <div className='col-1'>
                    <img className='w-75' src='/images/icons/Tourist-0٢.png' />
                </div>
                <div className='d-flex align-items-center'>السائح</div>
            </div>
            <TourStart/>
            <TouristAttraction/>
            
        </div>
    );
}

export default TouristHome;