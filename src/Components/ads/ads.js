import React, { useEffect, useState } from "react";
import { getAllAds } from "../../store/actions/advertisment-action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./ads.css";
import { Link } from "react-router-dom";
import { Slider } from "@material-ui/core";
import { paths } from "../../paths/paths";


const Ads = (props) => {
  useEffect(() => {
    props.getAllAds();
    const timer = setTimeout(() => {
      setShow(true)
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const [show, setShow] = useState(false);
  const openAds = () => {
    setShow(!show);
  };

  if (props?.ads?.result?.length > 0) {
    // let pName;
    // let newPath;
    // if (item.photo != null) {
    //   pName = item.photo;
    //   newPath = pName.replaceAll(" ", "%20");
    // }
    return (
      <div className={`ads_container ${show ? "" : "ads_container_sink"}`}>
        <div>
          <span
            style={{ cursor: "pointer" }}
            className="ads_toggle_btn"
            onClick={openAds}
          >
            <FontAwesomeIcon
              className={` ${show ? "" : "icon_chavron_rotate"}`}
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </span>
        </div>

        <div className="ads_inner_content h-100">
          <div className="container h-100 pt-2">
            <div className="row h-100 ">
              {/* <Slider>

              </Slider> */}
              {props.ads.result.length >= 1?<Link
                id="link"
                className="col-sm-4 px-2"
                to={`/advertisment-details/${props.ads.result[0].id}`}
              >
                <div
                  style={{
                    background: `url(${paths.ads}${props.ads.result[0].id}/${props.ads.result[0].photo})`,
                    borderRadius: "10px",
                    height:'200px',
                    width: '100%',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    padding: "10px",
                    textAlign: "justify",
                  }}
                >
                  {/* <h3 className="m-0" style={{ fontSize: "14px" }}>
                    {props.ads.result[0].title}
                  </h3> */}
                </div>
              </Link>:null}

              {props.ads.result.length >= 2?<Link
                id="link"
                className="col-sm-4 px-2"
                to={`/advertisment-details/${props.ads.result[1].id}`}
              >
                <div
                  style={{
                    background: `url(${paths.ads}${props.ads.result[1].id}/${props.ads.result[1].photo})`,
                    borderRadius: "10px",
                    height:'200px',
                    width: '100%',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    padding: "10px",
                    textAlign: "justify",
                  }}
                >
                  {/* <h3 className="m-0" style={{ fontSize: "14px" }}>
                    {props.ads.result[1].title}
                  </h3> */}
                </div>
              </Link>:null}

              {props.ads.result.length >= 3?<Link
                id="link"
                className="col-sm-4 px-2"
                to={`/advertisment-details/${props.ads.result[2].id}`}
              >
                <div
                  style={{
                    background: `url(${paths.ads}${props.ads.result[2].id}/${props.ads.result[2].photo})`,
                    borderRadius: "10px",
                    height:'200px',
                    width: '100%',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    padding: "10px",
                    textAlign: "justify",
                  }}
                >
                  {/* <h3 className="m-0" style={{ fontSize: "14px" }}>
                    {props.ads.result[2].title}
                  </h3> */}
                </div>
              </Link>:null}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
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
