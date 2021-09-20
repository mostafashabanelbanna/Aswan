import {react} from 'react'
import { Container } from 'react-bootstrap';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const OnePieaceSkeleton = () => {

    return (
        <>
        <Container>
            <Skeleton className="my-4" width="100%" height={400}/> 
        </Container>
        </>
    );
}
export default OnePieaceSkeleton;