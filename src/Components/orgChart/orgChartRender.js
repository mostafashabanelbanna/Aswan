import React, { useState, useEffect } from "react";
import axios from "../../Axios/Axios_Config";
import { render } from "react-dom";
// import "./style.css";
import { OrgChartComponent } from "./orgChart";
import * as d3 from "d3";
import { Container } from "react-bootstrap";

const OrgChartRender = (props) => {
  const [data, setData] = useState(null);

  const [orgChart, setOrgChart] = useState([]);

  const getOrgChart = async () => {
    //fetch data
    const response = await axios
      .get("/GeneralBureauAPI/GetDictionary")
      .catch((err) => ("Error", err)); //handle errors
    if (response && response.data) {
      setOrgChart(response.data.result);
    }
  };

  useEffect(() => {
    getOrgChart();
  }, []);

  const noOrgChart = !orgChart || (orgChart && orgChart.length === 0); //check if no org Chart

  //   let addNodeChildFunc = null;

  //   function addNode() {
  //     const node = {
  //       nodeId: "new Node",
  //       parentNodeId: "O-6066",
  //     };

  //     addNodeChildFunc(node);
  //   }

  //   function onNodeClick(nodeId) {
  //     alert("clicked " + nodeId);
  //   }

  useEffect(() => {
    d3.csv(
      "https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv"
    ).then((data) => {
      setData(data);
    });
  }, [true]);
  return (
    <Container className="" fluid>
      <div className=" container underline  my-5">
        <h3>الديوان العام</h3>
      </div>
      <div className=" bg-light">
        {/* Click node to trigger action in parent or &nbsp; */}
        {/* <button onClick={() => addNode()}>add node as root's child</button> */}
        <OrgChartComponent
          // setClick={(click) => (addNodeChildFunc = click)}
          // onNodeClick={onNodeClick}
          data={orgChart}
        />
      </div>
    </Container>
  );
};

export default OrgChartRender;
