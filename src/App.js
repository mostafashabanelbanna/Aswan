import React from "react";
import "./App.css";
import GovernmentProjects from "./components/government-projects-component";
import PhotosAlbum from "./components/photos-album-component";

function App() {
  return (
    <React.Fragment>
      <GovernmentProjects />
      <PhotosAlbum />
    </React.Fragment>
  );
}

export default App;
