import { react } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const NewsSkeleton = () => {
  return (
    <>
      <Container>
        <div className="row my-3">
          <div className="d-flex flex-lg-row-reverse justify-content-lg-between flex-column">
            <div className="row col-lg-6 col-12">
              <Skeleton width="100%" height={400} />
            </div>
            <div className="row col-lg-6 col-12 my-3 my-lg-0">
              <Skeleton width="100%" className="my-2" height={50} />
              <Skeleton width="100%" />
              <Skeleton width="100%" />
              <Skeleton width="100%" />
              <Skeleton width="100%" />
              <Skeleton width="100%" />
              <Skeleton width="100%" />
              <Skeleton width="100%" />
              <Skeleton width="100%" />
              <Skeleton width="100%" />
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-lg-4">
            <Skeleton width="100%" height={250} />
          </div>
          <div className="col-lg-4 d-lg-block d-none">
            <Skeleton width="100%" height={250} />
          </div>
          <div className="col-lg-4 d-lg-block d-none">
            <Skeleton width="100%" height={250} />
          </div>
        </div>
      </Container>
    </>
  );
};
export default NewsSkeleton;
