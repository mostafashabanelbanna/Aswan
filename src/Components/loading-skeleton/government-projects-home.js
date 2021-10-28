import { react } from "react";
import { Container, Row } from "react-bootstrap";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const GovernmentProjectsSkeleton = () => {
  return (
    <>
      <Container>
        <div className="d-flex flex-lg-row flex-column justify-content-between">
          <div className="row col-lg-6 col-12">
            <Skeleton className="my-5" width="100%" height={500} />
          </div>

          <div className="row col-lg-6 col-12">
            <Skeleton className="my-5" width="100%" height={500} />
          </div>
        </div>
      </Container>
    </>
  );
};
export default GovernmentProjectsSkeleton;
