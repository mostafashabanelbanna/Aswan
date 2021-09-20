import React from 'react'
import '../../Styles/tourist-home.css'
import Contact from '../home-page/contact_us';
import PhotosAlbum from '../home-page/photo-album/photos-album-component';
import TrainingAgenda from '../home-page/training-agenda';
import Video from '../home-page/videos/videoScreen';
import TourStart from './tour-start';
import TouristAttraction from './tourist-attractions';
const TouristHome = () => {
    
    return (
        <div>
            <div className='touristcontainer mt-4 d-flex p-0'>
                <div className='col-1'>
                    <img className='w-75' src='/images/icons/Tourist-0٢.png' />
                </div>
                <div className='d-flex text-muted align-items-center text-decoration-underline'>السائح</div>
            </div>
            <TourStart pagePath={'tourist'}/>
            <TouristAttraction/>
            <TrainingAgenda title={'اجندة الاحداث'} type={18}/>
            <Video pagePath={'tourist'}/>
            <PhotosAlbum pagePath={'tourist'} title={'البوم الصور'}/>
            <Contact />
        </div>
    );
}

export default TouristHome;