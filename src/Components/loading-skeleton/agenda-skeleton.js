import { React } from "react";
import { Container } from "react-bootstrap";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const AgendaSkeleton = () => {
  return (
    <>
      <Container>
        <Skeleton width="100%" height={170} className="my-3" />
        <Skeleton width="100%" height={170} />
        <Skeleton width="100%" height={170} className="my-3" />
      </Container>
    </>
  );
};
export default AgendaSkeleton;
