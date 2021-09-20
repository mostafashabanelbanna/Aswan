import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllPhotos } from "../../../store/actions/photos-album-actions";
import {photoAlbum} from '../../../store/actions/tourist-action/photos'
import { useEffect } from "react";
import { paths } from "../../../paths/paths";
import "../../../Styles/photo-album-style.css";
import ListSkeleton from "../../loading-skeleton/list-skiliton";
import { Link } from "react-router-dom";

const PhotosAlbum = (props) => {
  let photos 
  useEffect(() => {
    props.pagePath=='home'? props.getAllPhotos(): props.photoAlbum();
  }, []);
  props.homePhotos==undefined? photos=props.touristPhotos: photos = props.homePhotos;

  const renderAlbum = () => {
    return (
      <div className="d-flex justify-content-around flex-wrap flex-column flex-sm-row">
        {photos.result.map((item, index) => {
          return (
            <Link to={`photodetails/${item.id}`} className='text-muted col-lg-4 col-md-6 col-10 mb-4 mb-lg-0 mx-auto p-3'>
            <div
              className="hoverTitle "
              key={item.id}
            >
              <div className="holder mb-4">
                <div
                  style={{
                    backgroundImage: `url(${paths.PhotoLibraryAlbum}${item.id}/${item.photo})`,
                  }}
                  className="imageAlbum"
                  alt={item.titleA}
                ></div>
              </div>
              <p className="text-center mb-5" style={{fontSize:'22px'}}>{item.titleA}</p>
            </div>
            </Link>
          );
        })}
      </div>
    );
  };

  if (photos) {
    
    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex my-2">
            <img
              src="./images/icons/photoalbum_titel-0٢.png"
              alt=""
              width="80px"
            />
            <div className="underline">
              {" "}
              <h3 className="mt-4 me-2 text-secondary">{props.title}</h3>
            </div>
          </div>
          {renderAlbum()}
        </div>
      </div>
    );
  }
  return <ListSkeleton/>;
};

export default connect(
  (state) => {
    return {
      homePhotos: state.homeComponents.photosAlbum,
      touristPhotos: state.touristHome.photosAlbum,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getAllPhotos, photoAlbum }, dispatch);
  }
)(PhotosAlbum);
