import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function GovernmentFamous(props) {
  return (
    <div className="container-fluid col-11 mt-5 mb-2">
      <div className="d-flex mb-3 justify-content-center justify-content-md-start">
        <FontAwesomeIcon icon={faStar} className="titleIcon" />
        <p className="titles mb-1">مشاهير المحافظة</p>
      </div>
      <div className="d-flex flex-lg-row justify-content-lg-between">
        <div>
          <div className="outerPolygon">
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
        <div>
          <div className="outerPolygon">
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
        <div>
          <div className="outerPolygon">
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
        <div>
          <div className="outerPolygon">
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
        <div>
          <div className="outerPolygon">
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
      </div>
      <div className="line mx-auto my-5 w-100"></div>
    </div>
  );
}

export default GovernmentFamous;
