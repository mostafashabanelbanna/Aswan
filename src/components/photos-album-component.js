import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllPhotos } from "../store/actions/photos-album-actions";
import { useEffect } from "react";
import { paths } from "../paths/paths";
import "../Styles/photo-album-style.css";

const PhotosAlbum = (props) => {
  useEffect(() => {
    props.getAllPhotos();
  }, []);

  // let photos = props.photos.result;

  const renderAlbum = () => {
    return (
      <div className="d-flex justify-content-around flex-wrap flex-column flex-sm-row">
        {props.photos.result.map((content, index) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-10 mb-4 mb-lg-0 mx-auto p-3"
              key={content.id}
            >
              <div className="holder mb-4">
                <div
                  style={{
                    backgroundImage: `url(${paths.PhotoLibraryAlbum}${content.id}/${content.photo})`,
                  }}
                  className="imageAlbum"
                  alt={content.titleA}
                ></div>
              </div>
              <p className="text-center titles mb-5">{content.titleA}</p>
            </div>
          );
        })}
      </div>
    );
  };

  if (props.photos) {
    return (
      <div>
      <div className="container mt-5">
        <div className="d-flex my-2">
          <img
            src="./images/icons/photoalbum_titel-0٢.png"
            alt=""
            width="80px"
          />
          <h3 className="mt-4 me-2 text-secondary">البوم الصور</h3>
        </div>
        {renderAlbum()}
        </div>
        <div className="line mt-5"></div>
      </div>
    );
  }
  return <div>Loading</div>;
};

export default connect(
  (state) => {
    return {
      photos: state.homeComponents.photosList,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getAllPhotos }, dispatch);
  }
)(PhotosAlbum);
