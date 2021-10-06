import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";
import { getFocusedAd } from "../store/actions/advertisment-action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "../Axios/Axios_Config";
import {Link} from 'react-router-dom'
// const GetNewsFromAPI = () => {
// let News;

// A placeholder is needed, to tell react-ticker, that width and height might have changed
// It uses MutationObserver internally
//     return News ? (
//       <p>{News} +++ </p>
//     ) : (
//       <p style={{ visibility: "hidden" }}>Placeholder</p>
//     );
//   };

function StockTicker() {
  const [News, setNews] = useState("");
  const [arr, setArr] = useState([]);
  async function fetchData() {
    let res = await axios.get("/AdvertismentAPI/GetFocus");
    if (res && res.data) {
      return res.data.result;
    }
  }
  useEffect(async () => {
    let x = await fetchData();
    setArr(arr.length ? [...arr, x] : [x]);
  }, []);

  if (arr.length > 0)
    return (
      <Ticker direction={"toRight"} speed={5} mode={"smooth"}>
        {() => (
          <Link to={`/advertisment-details/${arr[0].id}`} className='text-dark'>
            <p className='my-2'> {arr[0].title} ...</p>
          </Link>
        )}
      </Ticker>
    );
  return <></>;
}

export default StockTicker;
