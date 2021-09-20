import React, { useEffect, useState } from "react";
import { getAllAds } from '../../store/actions/ads'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./ads.css";

const Ads = (props) => {

  useEffect(() => {
    props.getAllAds();
  },[])

  const [show, setShow] = useState(false);
  const openAds = () => {
    setShow(!show);
  };

  if(props.ads){
    return (
      <div className={`ads_container ${show ? "" : "ads_container_sink"}`}>
      <div>
        <span className="ads_toggle_btn" onClick={openAds}>
          <FontAwesomeIcon
            className={` ${show ? "" : "icon_chavron_rotate"}`}
            icon={faChevronDown}
            ></FontAwesomeIcon>
        </span>
      </div>

      <div className="ads_inner_content h-100">
        <div className="container h-100 pt-2">
          <div className="row h-100 ">
            <div className="col-sm-4">
              <div
                style={{
                  backgroundColor: "rgb(255 220 110 / 80%)",
                  borderRadius: "10px",
                  padding:'10px',
                  textAlign:'justify'
                }}
                >
                <h3 className="m-0" style={{fontSize:'22px'}}>{props.ads.result[0].title}</h3>
              </div>
            </div>

            <div className="col-sm-4">
              <div
                style={{
                  backgroundColor: "#a4e1bf",
                  borderRadius: "10px",
                  padding:'10px',
                  textAlign:'justify'
                }}
                >
                <h3 className="m-0" style={{fontSize:'22px'}}>{props.ads.result[1].title}</h3>
              </div>
            </div>

            <div className="col-sm-4">
              <div
                style={{
                  backgroundColor: "rgb(34 168 155 / 50%) ",
                  borderRadius: "10px",
                  padding:'10px',
                  textAlign:'justify'
                }}
                >
                <h3 className="m-0" style={{fontSize:'22px'}}>{props.ads.result[2].title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  } return <div className='text-center fa-1x'>جاري التحميل</div>
};

export default connect(
  (state) => {
    return {
      ads: state.adsComponents.ads,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getAllAds }, dispatch);
  }
)(Ads);
