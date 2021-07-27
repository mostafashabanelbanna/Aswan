import React, { Component } from "react";
import GovernmentFamous from "./government-famous-component"
import GovernmentProjects from "./government-projects-component";
import PhotosAlbum from "./photos-album-component";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <GovernmentProjects />
        <PhotosAlbum />
        <GovernmentFamous />
      </React.Fragment>
    );
  }
}

export default HomeComponent;
