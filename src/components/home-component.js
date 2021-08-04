import React, { Component } from "react";
import GovernmentFamous from "./government-famous-component"
import GovernmentProjects from "./government-projects-component";
import PhotosAlbum from "./photos-album-component";
import News  from './newsScreen'
import Video from './videoScreen'
import NewsList from './news_list'
import Complaints from './complaints-screen'
import Contact from './contact_us'
import Footer from './footer'
import Navbar from './navbar'
import LoaclLeaders from './local_leaders'
import InfoNews from './info_and_news'
import CitizenServices from './citizen_services'
class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <News/>
        <InfoNews/>
        <GovernmentProjects />
        <CitizenServices/>
        <LoaclLeaders/>
        <Video/>
        <GovernmentFamous />
        <PhotosAlbum />
        <Complaints/>
        <Contact/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
