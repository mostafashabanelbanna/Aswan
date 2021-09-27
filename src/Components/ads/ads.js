import React, { useEffect, useState } from "react";
import { getAllAds } from '../../store/actions/advertisment-action'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./ads.css";
import { Link } from "react-router-dom";

const Ads = (props) => {

  useEffect(() => {
    props.getAllAds();
  },[])

  const [show, setShow] = useState(true);
  const openAds = () => {
    setShow(!show);
  };

  if(props?.ads?.result?.length > 0){
    return (
      <div className={`ads_container ${show ? "" : "ads_container_sink"}`}>
      <div>
        <span style={{cursor:'pointer'}} className="ads_toggle_btn" onClick={openAds}>
          <FontAwesomeIcon
            className={` ${show ? "" : "icon_chavron_rotate"}`}
            icon={faChevronDown}
            ></FontAwesomeIcon>
        </span>
      </div>

      <div className="ads_inner_content h-100">
        <div className="container h-100 pt-2">
          <div className="row h-100 ">
            <Link id='link' className='col-sm-4 px-2' to={`/advertisment-details/${props.ads.result[0].id}`}>
              <div
                style={{
                  backgroundColor: "rgb(255 220 110 / 80%)",
                  borderRadius: "10px",
                  padding:'10px',
                  textAlign:'justify'
                }}
                >
                <h3 className="m-0" style={{fontSize:'14px'}}>{props.ads.result[0].title}</h3>
            </div>
            </Link>

            <Link id='link' className='col-sm-4 px-2' to={`/advertisment-details/${props.ads.result[1].id}`}>
              <div
                style={{
                  backgroundColor: "#a4e1bf",
                  borderRadius: "10px",
                  padding:'10px',
                  textAlign:'justify'
                }}
                >
                <h3 className="m-0" style={{fontSize:'14px'}}>{props.ads.result[1].title}</h3>
            </div>
            </Link>

            <Link id='link' className='col-sm-4 px-2' to={`/advertisment-details/${props.ads.result[2].id}`}>
              <div
                style={{
                  backgroundColor: "rgb(34 168 155 / 50%) ",
                  borderRadius: "10px",
                  padding:'10px',
                  textAlign:'justify'
                }}
                >
                <h3 className="m-0" style={{fontSize:'14px'}}>{props.ads.result[2].title}</h3>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  } return null
};

export default connect(
  (state) => {
    return {
      ads: state.advertismentComponents.ads,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getAllAds }, dispatch);
  }
)(Ads);
