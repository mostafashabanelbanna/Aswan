import React, { Component } from "react";
import GovernmentFamous from "./government-famous-component";
import GovernmentProjects from "./government-projects/government-projects-component";
import PhotosAlbum from "./photos-album-component";
import News from "./news/newsScreen";
import Video from "./videoScreen";
import Complaints from "./complaints-screen";
import Contact from "./contact_us";
import Footer from "../footer";
import MainSlider from "./main-slider";
import InfoNews from "./info_and_news";
import CitizenServices from "./citizen_services";
import LocalLeaders from "./local-leaders";
import ImportantPortals from "./important-portals";
import TrainingAgenda from "./training-agenda";
import BgAttachment from "../bg-attachment";
import HayahKarima from "./haya-carima";
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
        <HayahKarima />
        <CitizenServices {...this.props} />
        <LocalLeaders {...this.props} />
        <TrainingAgenda {...this.props} />
        <Video {...this.props} />
        <GovernmentFamous {...this.props} />
        <PhotosAlbum {...this.props} />
        <Complaints {...this.props} />
        <ImportantPortals {...this.props} />
        <Contact {...this.props} />
        <Footer {...this.props} />
      </React.Fragment>
    );
  }
}

export default HomeComponent;
