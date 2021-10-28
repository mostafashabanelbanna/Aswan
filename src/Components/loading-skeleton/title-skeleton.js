import { react } from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const TitleSkeleton = () => {
  return (
    <>
      <Row>
        <Skeleton width="100%" />
      </Row>
      <Container>
        <div className="row mt-3">
          <Skeleton width="30%" height={80} />
        </div>
      </Container>
    </>
  );
};
export default TitleSkeleton;
