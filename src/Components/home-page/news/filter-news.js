import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { newsList } from '../../../store/actions/News_Action'
import { bindActionCreators } from 'redux'
import PaginationSection from "../../ui/pagination-section";
import ListWithImage from '../../ui/list-with-image'
import { paths } from "../../../paths/paths";
import ListSkeleton from '../../loading-skeleton/list-skiliton'

const FilterNews = (props) => {
    const [currentPage, setCurrentPage] = useState(0)
    const info = props.match.params.info.split('&&');
    let pageCount;
    useEffect(() => {
        info[2] == 'sector' ?
            props.newsList(currentPage + 1, { sectorSourceId: parseInt(info[0]) }) :
            props.newsList(currentPage + 1, { newsCategoryId: parseInt(info[0]) });
    }, []);

    const handlePageClick = ({ selected: selectedPage }) => {
        props.clearNewsList();
        setCurrentPage(selectedPage)
    };
    if (props.data) {
        pageCount = Math.ceil(props.data.count / 9);

        return (<>
        <div className='container mt-5'>
                <div className='row '>
            {props.data.result.map((item) => {
                return (
                <div className='mb-4 col-lg-4 col-sm-6 col-12'>
                <Link to={`/newsdetails/${item.id}`} className="h-100">
                    <ListWithImage
                        imgSrc={paths.NewsPhotos + item.id + "/" + item.photo}
                        title={item.title}
                        date={"1/1/2022"}
                        category={item.newsCategoryName}
                        imgHeight="200px"
                    />
                </Link>
                </div>)
            })}
            </div>
            </div>


            <PaginationSection
                currentPage={currentPage}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
            />
        </>)
    }
    return (<ListSkeleton/>)
}
const mapStateToProps = (state) => {
    return { data: state.homeComponents.newslist }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ newsList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterNews);
