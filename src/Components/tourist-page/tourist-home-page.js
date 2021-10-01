import React from 'react'
import '../../Styles/tourist-home.css'
import Contact from '../home-page/contact_us';
import PhotosAlbum from '../home-page/photo-album/photos-album-component';
import TrainingAgenda from '../agenda/training-agenda';
import Video from '../home-page/videos/videoScreen';
import TourStart from './tour-start';
import TouristAttraction from './tourist-attractions';
const TouristHome = () => {
    
    return (
        <div>
            <div className='touristcontainer mt-4 d-flex p-0'>
                <div className='col-1'>
                    <img className='w-75 brightness' src='/images/icons/Tourist-0٢.png' />
                </div>
                <div style={{fontSize:'22px'}} className='d-flex  align-items-center text-decoration-underline'>السائح</div>
            </div>
            <TourStart pagePath={'tourist'}/>
            <TouristAttraction/>
            <TrainingAgenda title={'اجندة الاحداث السياحية'} pagePath={'tourist'}/>
            <Video pagePath={'tourist'}/>
            <PhotosAlbum pagePath={'tourist'} title={'البوم الصور'}/>
            <Contact />
        </div>
    );
}

export default TouristHome;