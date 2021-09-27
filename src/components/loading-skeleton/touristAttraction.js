import { react } from "react";
import { Container } from "react-bootstrap";

import Skeleton from "react-loading-skeleton";

const TouristAttractionSkeleton = () => {
  return (
    <>
      <Container fluid>
        <div className="row my-5">
          <div className="col-12">
            <Skeleton width="100%" height={300} />
          </div>
        </div>
      </Container>
      <Container>
        <div className="row my-5">
          <div className="col-12">
            <Skeleton width="100%" height={200} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Skeleton width="100%" height={300} />
          </div>
          <div className="col-md-4">
            <Skeleton width="100%" height={300} />
          </div>
          <div className="col-md-4">
            <Skeleton width="100%" height={300} />
          </div>
        </div>
      </Container>
    </>
  );
};
export default TouristAttractionSkeleton;
