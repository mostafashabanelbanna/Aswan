import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import ReactHtmlParser from "react-html-parser";
import { newsdetails, clearNewsdetails } from '../store/actions/News_Action'
const NewsDetails = (props) => {
    const id = props.match.params.id;
    useEffect(() => {
        props.newsdetails(id)
    }, []);
    if (props.newsdetail)
        return (
            <div>
                <div className="underline container mt-5"><h3>{props.newsdetail.result.title}</h3></div>
                <div className="container d-flex justify-content-end">
                    <div className=" text-center text-muted   fa-1x py-3  detailsSectorName">
                        {ReactHtmlParser(props.newsdetail.result.sectorName)}
                    </div>
                </div>
                <hr className='container my-2'></hr>
               
                <div className=" container p-0">
                    <div className="d-flex flex-column flex-md-row justify-content-center ">
                        <div className="col-md-8 p-3 col-12 lh-lg  order-md-0 order-1">،" َّ تبدأ السعودية، اعتبار من اليوم احد، تطبيق قيود صارمة على حركة غير المطعمين بلقاح "كورونا
                            ،إذ تفرض السلطات إلزامية التحصين المعتمد من وزارة الصحة بأحد اللقاحات المضادة لفيروس كورونا
                            لدخول جميع اماكن العامة، والفعاليات، والمنشآت الحكومية والخاصة، واستخدام وسائل النقل العام
                            .في المملكة
                            َّ وأكدت وزارة الداخلية السعودية، في بيان على بدء إلزامية التحصين المعتمد من وزارة الصحة اعتبار
                            .من اليوم احد، في جميع مناطق المملكة</div>
                        <div className="col-md-4 p-3 col-12">
.                        </div>
                    </div>
                </div>
                <Link to={'/newslist'} className="justify-content-center text-decoration-none align-items-center d-flex my-4">
                    <button className="btn " style={{ background: '-webkit-linear-gradient(right, #a4e1bf 0%,  #fef9a4 100%)' }}>المزيد من الاخبار</button>
                </Link>
            </div>)

    return (<div>Loading</div>);
}
const mapStateToProps = (state) => {
    return {
        newsdetail: state.homeComponents.newsdetails,
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ newsdetails, clearNewsdetails }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);