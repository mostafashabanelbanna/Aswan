import {react} from 'react'
import { Container, Tab, Tabs } from "react-bootstrap";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const FocusedGeneralIndicatorSkeleton = () => {

    return (
        <>
        <Container>
            <div className="d-flex justify-content-between my-3">
                <div className="col-md-3"><Skeleton width="100%" height={200}/></div>
                <div className="col-md-3"><Skeleton width="100%" height={200}/></div>
                <div className="col-md-3"><Skeleton width="100%" height={200}/></div>
            </div>
            <div className="d-flex justify-content-between">
                <Skeleton width="100%" height={400}/>
            </div>  
        </Container>
        </>
    );
}
export default FocusedGeneralIndicatorSkeleton;