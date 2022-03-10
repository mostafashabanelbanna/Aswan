import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";
import { getFocusedAd } from "../store/actions/advertisment-action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "../Axios/Axios_Config";
import { Link } from "react-router-dom";

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

// function StockTicker() {
//   const [News, setNews] = useState("");
//   const [arr, setArr] = useState([]);
//   async function fetchData() {
//     let res = await axios.get("/AdvertismentAPI/GetFocus");
//     if (res && res.data) {
//       return res.data.result;
//     }
//   }
//   useEffect(async () => {
//     let x = await fetchData();
//     setArr(arr.length ? [...arr, x] : [x]);
//   }, []);

//   console.log("arr", arr);

//   let titles = [];
//   for (let i = 0; i < arr?.length; i++) {
//     titles.push(arr[i]?.title);
//   }
//   if (arr.length > 0 && arr !== []) {
//     return (
//       <Ticker move={true} direction={"toRight"} speed={5} mode={"smooth"}>
//         {() =>
//           arr ? (
//             <Link to={`/advertisment-details/`} className="text-dark">
//               <p className="my-2" style={{ whiteSpace: "nowrap" }}>
//                 {" "}
//                 {titles.join(" ...")} ...&nbsp;&nbsp;&nbsp;&nbsp;
//               </p>
//             </Link>
//           ) : null
//         }
//       </Ticker>
//     );
//   } else return <div style={{ visibility: "hidden" }}></div>;
// }

// export default StockTicker;

const GetNewsFromAPI = ({ index }) => {
  const [news, setNews] = useState("");
  useEffect(() => {
    async function fetchData() {
      const ratesFromAPI = await axios.get("/AdvertismentAPI/GetFocus");
      setNews(ratesFromAPI?.data?.result);
    }
    fetchData();
  }, []);

  console.log("news", news);
  // A placeholder is needed, to tell react-ticker, that width and height might have changed
  // It uses MutationObserver internally
  return news ? (
    <p style={{ whiteSpace: "nowrap" }}>
      {news.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/advertisment-details/${item.id}`}
            className="text-dark"
          >
            {item.title}
            ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        );
      })}
    </p>
  ) : (
    <p style={{ visibility: "hidden" }}>placeholder</p>
  );
};

function StockTicker() {
  return (
    <Ticker
      // move={true}
      // direction={"toRight"}
      speed={5}
      // mode={"smooth"}
      offset="run-in"
    >
      {({ index }) => <GetNewsFromAPI index={index} />}
    </Ticker>
  );
}

export default StockTicker;
