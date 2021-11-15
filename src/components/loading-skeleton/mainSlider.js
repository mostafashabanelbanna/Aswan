import { react } from "react";
import { Container } from "react-bootstrap";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MainSliderSkeleton = () => {
  return (
    <>
      <Container fluid>
        <div className="row">
          <div className="col-12 px-0">
            <Skeleton width="100%" height="65vh" />
          </div>
        </div>
      </Container>
    </>
  );
};
export default MainSliderSkeleton;
