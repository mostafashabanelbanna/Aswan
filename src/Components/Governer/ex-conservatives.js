import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getEx_Conservatives} from '../../store/actions/governer'
import ListWithImage from '../ui/list-with-image'
import { paths } from "../../paths/paths";

const ExConservatives =(props)=>{
  
useEffect(()=>{
    props.getEx_Conservatives()
},[])

  if(props.exconservatives)
  return(<>
  <div className='container mt-5'>
                <div className='row '>
        {props.exconservatives.result.map((item)=>{
            return(
                <div className='mb-4 col-lg-4 col-sm-6 col-12'>
                <ListWithImage  
                imgSrc={paths.Governer + item.id + "/" + item.photo}
                title={item.name}
                imgHeight="200px"
                center='yes'
                />
                </div>
            );
        })}
        </div></div>
    </>)
    return(<div>Loading</div>)
}
const mapStateToProps = (state) => {
    return {
        exconservatives: state.GovernerComponents.exconservatives,
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getEx_Conservatives }, dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)( ExConservatives)