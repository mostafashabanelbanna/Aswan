import {react} from 'react'
import { Container } from 'react-bootstrap';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ThreePieacesHorizontalSkeleton = () => {

    return (
        <>
        <Container>
            <div className="row my-5">
                <div className="col-md-4"><Skeleton width="100%" height={200}/></div>
                <div className="col-md-4"><Skeleton width="100%" height={200}/></div>
                <div className="col-md-4"><Skeleton width="100%" height={200}/></div>
            </div>
        </Container>
        </>
    );
}
export default ThreePieacesHorizontalSkeleton;