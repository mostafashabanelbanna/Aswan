import { react } from "react";
import { Container } from "react-bootstrap";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const DetailsSkeleton = () => {
  return (
    <>
      <Container>
        <div className="row my-3">
          <div className="col-12">
            <Skeleton width="100%" height={50} />
          </div>
          <div className="col-md-2">
            <Skeleton width="100%" height={30} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Skeleton width="100%" height={400} />
          </div>
          <div className="col-md-4">
            <Skeleton width="100%" height={400} />
          </div>
        </div>
      </Container>
    </>
  );
};
export default DetailsSkeleton;
