import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sliderVideo,getMainVideo } from "../../../store/actions/News_Action";
import {video,getMainVideoTourist} from "../../../store/actions/tourist-action/videos"
import OnePieaceSkeleton from "../../loading-skeleton/one-pieace";
const Video = (props) => {
  useEffect(() => {
    if(props.pagePath=='home'){
    props.sliderVideo() ;
    props.getMainVideo()}
    else{
    props.video();
    props.getMainVideoTourist()
  }
  }, []);

  // let vidCount;
  // let slidesToShow = {slidesToShow : 0}; 
  // if(vidCount >= 4){
  //   slidesToShow.slidesToShow = 4
  // } else {
  //   slidesToShow.slidesToShow = 2
  // }

  var settings = {
    dots: false,
    autoplay:true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let videos , mainVid ;
  props.homeVideos==undefined? videos=props.touristVideos: videos = props.homeVideos;
  props.homeMainVideo==undefined? mainVid=props.touristMainVideo: mainVid = props.homeMainVideo;
    
  if (videos&&mainVid){
    // vidCount = videos.result.length
    return (
      <div>
        <div className=" container  py-4">
          <div className="p-0 m-0 ">
            <div className="m-3 mb-5 d-flex">
              <img src="/images/icons/video_titel-0٢.png" width="80px" />
              <div className="underline">
                {" "}
                <h3 className="mt-4 me-2 text-secondary"> مكتبة الفيديو </h3>
              </div>
            </div>

            <div
              className="embed-responsive embed-responsive-16by9 me-3 ms-3 "
              style={{ borderRadius: "10px" }}
            >
              <iframe
                allowFullScreen
                className="embed-responsive-item rounded-3"
                style={{ outline: "none" }}
                loading="lazy"
                width="100%"
                height="450px"
                src={
                  "https://www.youtube.com/embed/" +
                  mainVid.youtubeId
                } /*src='videos/1. Welcome!.mp4'*/
              ></iframe>
            </div>

            <div className=" me-3 ms-3">
              <Slider {...settings}>
                {videos.result.map((item, index) => {
                  return (
                    <Link to={`videodetails/${item.id}`} className='text-muted'>
                    <div key={item.id} className="mt-4 text-center p-4 hoverTitle">
                      <div className='holder'>
                      <img
                        src={
                          "https://img.youtube.com/vi/" +
                          item.youtubeId +
                          "/" +
                          "hqdefault.jpg"
                        }
                        className="rounded-3 imageAlbum"
                        width="100%"
                      />
                      </div>
                      <div className="mt-4">{item.title}</div>
                    </div>
                    </Link>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <OnePieaceSkeleton/>;
};
const mapStateToProps = (state) => {
  return { 
    homeVideos: state.homeComponents.slidervideo,
    homeMainVideo: state.homeComponents.mainVideo,
    touristVideos: state.touristHome.slidervideo,
    touristMainVideo: state.touristHome.mainVideo,

   };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ sliderVideo,video,getMainVideo ,getMainVideoTourist}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Video);