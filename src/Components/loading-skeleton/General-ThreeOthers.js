import {react} from 'react'
import { Container, Tab, Tabs } from "react-bootstrap";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const GeneralThreeOthersSkeletons = () => {

    return (
        <>
        <Container>
            <div className="row">
                <Skeleton width="100%" height={400}/>   
            </div>
            <div className="row">
                <div className="col-md-4"><Skeleton width="100%" height={50}/></div>
                <div className="col-md-4"><Skeleton width="100%" height={50}/></div>
                <div className="col-md-4"><Skeleton width="100%" height={50}/></div>
            </div>
        </Container>
        </>
    );
}
export default GeneralThreeOthersSkeletons;