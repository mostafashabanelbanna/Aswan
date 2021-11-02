import React from "react";
import "../../Styles/tourist-home.css";
import ContactHome from "../home-page/contactus-home";
import PhotosAlbum from "../home-page/photo-album/photos-album-component";
import TrainingAgenda from "../agenda/training-agenda";
import Video from "../home-page/videos/videoScreen";
import TourStart from "./tour-start";
import TouristAttraction from "./tourist-attractions";
const TouristHome = () => {
  return (
    <div>
      <div className="touristcontainer mt-4 d-flex p-0">
        <div className="col-1">
          <img className="w-75 brightness" src="/images/icons/Tourist-0٢.png" />
        </div>
        <div
          style={{ fontSize: "22px" }}
          className="d-flex text_blue align-items-center text-decoration-underline"
        >
          السائح
        </div>
      </div>
      <TourStart pagePath={"tourist"} />
      <TouristAttraction />
      <TrainingAgenda
        title={"اجندة الاحداث السياحية"}
        pagePath={"tourist"}
        photo="/images/icons/calender_titel-0١.png"
      />
      <Video pagePath={"tourist"} />
      <PhotosAlbum pagePath={"tourist"} title={"البوم الصور"} />
      <ContactHome />
    </div>
  );
};

export default TouristHome;
