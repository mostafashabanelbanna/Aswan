import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { complaints } from '../../store/actions/News_Action'
import { paths } from "../../paths/paths";
import OnePieaceSkeleton from "../loading-skeleton/one-pieace";

const Complaints = (props) => {
  useEffect(() => {
    props.complaints();
  }, []);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  if (props.complaint) {
    if (props.complaint.result.length) {
      return (
        <div>
          <div className=" container p-0 mb-4">
            <div className="my-3 d-flex">
              <img src="/images/icons/complaints_titel-0٢.png" width="80px" />
              <div className="underline">
                <h3 className="mt-4 me-2 text-secondary"> الشكاوى </h3>
              </div>
            </div>
          </div>
          <div className="container mt-4 p-0">
            <div className="row justify-content-center text-center p-0 m-0 ">
              {props.complaint.result.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      openInNewTab(item.url);
                    }}
                    style={{ cursor: "pointer" }}
                    key={item.id}
                    className="col-lg-3 justify-content-center flex-wrap col-6 mb-4  hvr-shrink"
                  >
                    <div className="text-center">
                      <img
                        className=" mt-2 mb-3"
                        style={{ borderRadius: "50%", width: 150, height: 150 }}
                        src={`${paths.WebLink}${item.id}/${item.photo}`}
                        // src={
                        //   "/Upload/WebLink/Photo/" + item.id + "/" + item.photo
                        // }
                      />
                    </div>
                    <div> {item.name} </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="line my-5 mx-auto"></div>
        </div>
      );
    }
  }
  return <OnePieaceSkeleton/>;
};

const mapStateToProps = (state) => {
  return { complaint: state.homeComponents.complaint };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ complaints }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Complaints);
