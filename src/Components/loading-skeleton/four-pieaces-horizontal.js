import {react} from 'react'
import { Container } from 'react-bootstrap';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const FourPieacesHorizontalSkeleton = () => {

    return (
        <>
        <Container>
            <div className="row">
                <div className="col-md-3"><Skeleton width="100%" height={200}/></div>
                <div className="col-md-3"><Skeleton width="100%" height={200}/></div>
                <div className="col-md-3"><Skeleton width="100%" height={200}/></div>
                <div className="col-md-3"><Skeleton width="100%" height={200}/></div>
            </div>
        </Container>
        </>
    );
}
export default FourPieacesHorizontalSkeleton;