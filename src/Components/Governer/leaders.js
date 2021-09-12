import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { leaders } from '../../store/actions/governer'
import ListWithImage from '../ui/list-with-image'
import { paths } from "../../paths/paths";


const Leaders = (props) => {
    useEffect(() => {
        props.leaders()
    }, []);

    if (props.leaders) {
        return (<>
        <div className='container d-flex justify-content-center'>
            <ListWithImage />
        </div>
        <div className='container d-flex justify-content-center'>
            {props.leaders.result.map((item)=>{return(<ListWithImage />)})} 
        </div>
        </>)
    }
    return (<div>Loading</div>)
}


const mapStateToProps = (state) => {
    return {
        leaders: state.GovernerComponents.leaders,
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ leaders }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Leaders)