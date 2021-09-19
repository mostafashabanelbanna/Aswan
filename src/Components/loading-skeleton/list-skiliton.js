import {react} from 'react'
import { Container } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ListSkeleton = () => {

    return (
        <>
        <Container>
            <div className="row my-3">
                <div className="col-md-4"><Skeleton width="100%" height={200}/></div>
                <div className="col-md-4"><Skeleton width="100%" height={200}/></div>
                <div className="col-md-4"><Skeleton width="100%" height={200}/></div>
            </div>
            <div className="row my-3">
                <div className="col-md-4"><Skeleton width="100%" height={200}/></div>
                <div className="col-md-4"><Skeleton width="100%" height={200}/></div>
                <div className="col-md-4"><Skeleton width="100%" height={200}/></div>
            </div>
        </Container>
        </>
    );
}
export default ListSkeleton;