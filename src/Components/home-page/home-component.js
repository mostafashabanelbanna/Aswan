import React, { Component } from "react";
import GovernmentFamous from "./government-famous-component";
import GovernmentProjects from "./government-projects/government-projects-component";
import PhotosAlbum from "./photo-album/photos-album-component";
import News from "./news/newsScreen";
import Video from "./videos/videoScreen";
import Complaints from "./complaints-screen";
import Contact from "./contact_us";
import Footer from "../footer";
import MainSlider from "./main-slider";
import InfoNews from "./info_and_news";
import CitizenServices from "./citizen-services/citizen_services";
import LocalLeaders from "./local-leaders/local-leaders";
import ImportantPortals from "./important-portals";
import TrainingAgenda from "../agenda/training-agenda";
import BgAttachment from "../bg-attachment";
import HayahKarima from "./good-life/haya-carima";
import Advertising from "./advertisment/advertising";
class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <MainSlider {...this.props} />
        <News {...this.props} />
        <InfoNews {...this.props} />
        {/* <BgAttachment /> */}
        <GovernmentProjects {...this.props} />
        <Advertising {...this.props} />
        <HayahKarima />
        <CitizenServices {...this.props} />
        <LocalLeaders {...this.props} />
        <TrainingAgenda {...this.props}  title={'اجندة التدريب'} type={4}/>
        <Video {...this.props}  pagePath={'home'}/>
        <GovernmentFamous {...this.props} />
        <PhotosAlbum {...this.props} pagePath={'home'} title={'البوم الصور'}/>
        <Complaints {...this.props} />
        <ImportantPortals {...this.props} />
        <Contact {...this.props} />
      </React.Fragment>
    );
  }
}

export default HomeComponent;
