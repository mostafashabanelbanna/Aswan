import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { leaders } from '../../store/actions/governer'
import ListWithImage from '../ui/list-with-image'
import { paths } from "../../paths/paths";
import ListSkeleton from '../loading-skeleton/list-skiliton'


const Leaders = (props) => {
    
    useEffect(() => {
        props.leaders()
    }, []);

    if (props.leader) {
        return (<>
         <div className=" container underline  my-5">
            <h3>قيادات المحافظة </h3>
          </div>
        <div className='container d-flex justify-content-center my-4'>
            <ListWithImage 
                imgSrc={paths.Governer + props.leader.curr.id + "/" + props.leader.curr.photo}
                title={props.leader.curr.name}
                imgHeight="270px"
                hoverTitle='hoverTitle'
            />
        </div>
        <div className='container'>
        <div className=' row d-flex justify-content-around my-4'>
             {props.leader.result.map((item)=>{return(
             <div key={item.id} className='col-sm-6 col-md-4 my-2'>
             <ListWithImage 
                 imgSrc={paths.Governer + item.id + "/" + item.photo}
                 title={item.name}
                 imgHeight="200px"
                 hoverTitle='hoverTitle'
             />
             </div>
             )})} 
        </div>
        </div>
        </>)
    }
    return (<ListSkeleton/>)
}


const mapStateToProps = (state) => {
    return {
        leader: state.GovernerComponents.leaders,
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ leaders }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Leaders)