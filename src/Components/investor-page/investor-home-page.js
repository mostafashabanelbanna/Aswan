import React from 'react'
import '../../Styles/tourist-home.css'
import Contact from '../home-page/contact_us';
import TrainingAgenda from '../agenda/training-agenda';
import InvestorStart from './investor-start';
import InvestorMap from './investor-map';
import InvestmentOpportunities from './investment-opportunities';
import InvestorAlbum from './static-investor-album';
import InvestorGuide from './investment-guide';
const InvestorHome = () => {
    
    return (
        <div>
            <div className='touristcontainer mt-4 d-flex p-0'>
                <div className='col-1'>
                    <img className='brightness w-75' src='/images/icons/Investor-0١.png' />
                </div>
                <div style={{fontSize:'22px'}} className='d-flex text_blue align-items-center text-decoration-underline'>المستثمر</div>
            </div>
            <InvestorStart/>
            <TrainingAgenda title={'إطروحات إستثمارية'} pagePath={'investor'} photo={'/images/investor-photos/اطروحات-01.png'}/>
            <InvestmentOpportunities/>
            <InvestorMap/>
            <InvestorGuide/>
            <InvestorAlbum/>
            <Contact />
        </div>
    );
}

export default InvestorHome;