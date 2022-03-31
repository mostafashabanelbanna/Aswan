import React from "react";
import { getFocusedAd } from "../store/actions/advertisment-action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";
import { paths } from "../paths/paths";
import SliderDetailsModalComponent from "./slider-details-modal-component";
import MainSliderSkeleton from "./loading-skeleton/mainSlider";

const OnLoadModal = (props) => {
  const [show, setShow] = useState(true);
  const [flag, setFlag] = useState(0);
  useEffect(() => {
      if(flag == 0){
          props.getFocusedAd();
        }
        setFlag(1)
  }, []);
  

  const onShow = () => {
    setShow(true);
  };

  const renderModal = (content) => {
    return (
      <SliderDetailsModalComponent
        content={content}
        show={show}
        onHide={() => setShow(false)}
        pathName={paths.ads}
        details={`/advertisment-details/${props.focusedAd.result.id}`}
      />
    );
  };

  if (props?.focusedAd?.result) {
    
    return (
        <div>
            {renderModal(props.focusedAd.result)}
        </div>
    );
  } else {
    return null;
  }
}

export default connect(
  (state) => {
    return {
      focusedAd: state.advertismentComponents.focusedAd,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getFocusedAd }, dispatch);
  }
)(OnLoadModal);
