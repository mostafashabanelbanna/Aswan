import React, { useEffect ,useState} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { newsList,clearNewsList } from '../store/actions/News_Action'
import ReactPaginate from 'react-paginate';


const NewsList = (props) => {
    

    const [currentPage, setCurrentPage] = useState(0);
        let pageCount;
    
    
  
    const handlePageClick = ({ selected: selectedPage }) => {
            props.clearNewsList()
      setCurrentPage(selectedPage);
    };


    useEffect(() => {
        props.newsList(currentPage+1);
    }, [currentPage]);

    
    if(props.newslist){
        pageCount =Math.ceil( props.newslist.count/10);
    return(
    <div>
        {props.newslist.result.map((item , index )=>{return(
            <div className="text-center my-3" key={item.id}>
                <div>{item.title}</div>
                <div><img width='200px' height='200px' src={'images/Upload/News/Photo/'+item.id+'/'+item.photo} /></div>
                <div>{item.newsCategoryName}</div>
            </div>
        )})}

     <ReactPaginate
            previousLabel={"→ السابق"}
            nextLabel={"التالى ←"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}/> 
    </div>);}
    return (<div>Loading</div>);
}
const mapStateToProps = (state) => {
    return { newslist: state.homeComponents.newslist}
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ newsList,clearNewsList }, dispatch)
}




 export default connect(mapStateToProps,mapDispatchToProps)( NewsList);

