import React from 'react'
import '../../Styles/tourist-home.css'
import Contact from '../home-page/contact_us';
import PhotosAlbum from '../home-page/photo-album/photos-album-component';
import TrainingAgenda from '../home-page/training-agenda';
import Video from '../home-page/videos/videoScreen';
import TourStart from './investor-start';
import TouristAttraction from './investor-attractions';
const InvestorHome = () => {
    
    return (
        <div>
            <div className='touristcontainer mt-4 d-flex p-0'>
                <div className='col-1'>
                    <img className='w-75' src='/images/icons/Investor-0١.png' />
                </div>
                <div className='d-flex text-muted align-items-center text-decoration-underline'>المستثمر</div>
            </div>
            <TourStart/>
            <TrainingAgenda title={'إطروحات إستثمارية'} type={18}/>
            <TouristAttraction/>
            <Video pagePath={'investor'}/>
            <PhotosAlbum pagePath={'investor'} title={'مجالات الإستثمار'}/>
            <Contact />
        </div>
    );
}

export default InvestorHome;