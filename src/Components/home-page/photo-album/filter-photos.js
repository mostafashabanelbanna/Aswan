import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    getPhotosList, clearPhotosList
  } from "../../../store/actions/photos-album-actions";
import { bindActionCreators } from 'redux'
import PaginationSection from "../../ui/pagination-section";
import ListWithImage from '../../ui/list-with-image'
import { paths } from "../../../paths/paths";
import ListSkeleton from '../../loading-skeleton/list-skiliton'
import moment from "moment";
import "moment/locale/ar";
import ReactHtmlParser from "react-html-parser";

const FilterPhotos = (props) => {
    const [currentPage, setCurrentPage] = useState(0)
    const info = props.match.params.info.split('&&');
    let pageCount;
    useEffect(() => {
        props.getPhotosList(currentPage + 1, { sectorSourceId: parseInt(info[0]) })
    }, []);

    const handlePageClick = ({ selected: selectedPage }) => {
        props.clearPhotosList();
        setCurrentPage(selectedPage)
    };
    if (props.data) {
        pageCount = Math.ceil(props.data.count / 9);
        return (<>
        <div className='container mt-5'>
                <div className='row '>
            {props.data.result.map((item) => {
                let date = item.publishDate.replace(/\//g,'-').split('-');
                let publishedDate = `${date[2]}-${date[1]}-${date[0]}T00:00:00`
                let pName = item.photo;
                let newPath  = pName.replaceAll(' ','%20')
                return (
                <div className='mb-4 col-lg-4 col-sm-6 col-12'>
                <Link to={`/photodetails/${item.id}`} className="h-100">
                <ListWithImage
                            imgSrc={paths.PhotoLibraryAlbum + item.id + "/" + newPath}
                            title={item.titleA}
                            content={ReactHtmlParser(item.photoCaptionA)}
                            date={`${moment(new Date(publishedDate)).format("LL")}`}
                            center="yes"
                            imgHeight='250px'
                            hoverTitle="hoverTitle"
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
    return { data: state.homeComponents.photosList}
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({  getPhotosList, clearPhotosList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPhotos);
