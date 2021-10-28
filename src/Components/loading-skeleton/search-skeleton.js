import { react } from "react";
import { Container } from "react-bootstrap";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SearchSkeleton = () => {
  return (
    <>
      <Skeleton className="my-3" width="100%" height={400} />
    </>
  );
};
export default SearchSkeleton;
