import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { complaints } from '../store/actions/News_Action'

const Complaints = (props) => {


    useEffect(() => {
        props.complaints();
    }, [])

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    if (props.complaint) {
        console.log(props.complaint.result);
        if (props.complaint.result.length) {
            return (
                <div>
                    <div className="custom_contanier p-0 mb-4">
                        <div className="m-3 d-flex">
                            <img src="/images/icons/complaints_titel-0٢.png" width="80px" />
                            <h3 className="mt-4 me-2 text-secondary"> الشكاوى </h3>
                        </div>
                    </div>
                    <div className="container p-0">
                        <div className="row justify-content-around p-0 m-0 ">

                            {props.complaint.result.map((item, index) => {
                                return (
                                    <div onClick={()=>{openInNewTab(item.url)}} style={{cursor:'pointer'}} key={item.id} className="col-lg-3 justify-content-center flex-wrap col-6 mb-4">
                                        {/* <div className="text-center" style={{ border: '1px solid #BADA55', borderRadius: '50%', height: 170, width: '65%' }} > */}
                                     <div>       <img className=' mt-2 mb-3' height='150px' style={{ borderRadius: '50%', width: '88%' }} src={'./images/Upload/WebLink/Photo/'+item.id+'/'+item.photo} />
                                        </div>
                                        <div> {item.name} </div>
                                    </div>
                                );
                            })}
                            {/* <div className="col-lg-3  col-6 mb-3">
                        <div className="text-center" style={{ border: '1px solid #BADA55', borderRadius: '50%', height: 170, width: '65%' }}>
                            <img className=' mt-2' height='152px' style={{ borderRadius: '50%', width: '88%' }} src={'/images/shrimp-zone-seafood_menu_2.jpg'} />
                        </div>
                    </div>
                    <div className="col-lg-3  col-6 mb-3">
                        <div className="text-center" style={{ border: '1px solid #BADA55', borderRadius: '50%', height: 170, width: '65%' }} >
                            <img className=' mt-2' height='152px' style={{ borderRadius: '50%', width: '88%' }} src={'/images/shrimp-zone-seafood_menu_2.jpg'} />
                        </div>
                    </div>
                    <div className="col-lg-3  col-6 mb-3">
                        <div className="text-center" style={{ border: '1px solid #BADA55', borderRadius: '50%', height: 170, width: '65%' }} >
                            <img className=' mt-2' height='152px' style={{ borderRadius: '50%', width: '88%' }} src={'/images/shrimp-zone-seafood_menu_2.jpg'} />
                        </div>
                    </div> */}
                        </div>
                    </div>
                    <div className="line my-5 mx-auto"></div>
                </div>
            );
        }
    }
    return (<div>Loading</div>)
}

const mapStateToProps = (state) => {
    return { complaint: state.homeComponents.complaint }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ complaints }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Complaints);