import React, { useLayoutEffect, useRef, useEffect } from "react";
import { OrgChart } from "d3-org-chart";
import * as d3 from "d3";

import { paths } from "../../paths/paths";

import defImg from "../../assets/img/default-org-chart.png";

export const OrgChartComponent = (props, ref) => {
  const d3Container = useRef(null);
  let chart = null;

  function addNode(node) {
    chart.addNode(node);
  }

  //   props.setClick(addNode);

  // We need to manipulate DOM
  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      // console.log(d3Container.current);

      if (!chart) {
        chart = new OrgChart();
      }
      chart
        .container(d3Container.current)
        .data(props.data)
        .nodeWidth((d) => 200)
        .nodeHeight((d) => 120)
        .onNodeClick((d, i, arr) => {
          // console.log(d, "Id of clicked node ");
          props.onNodeClick(d);
        })
        .rootMargin(100)
        .nodeWidth((d) => 210)
        .nodeHeight((d) => 140)
        .childrenMargin((d) => 130)
        .compactMarginBetween((d) => 75)
        .compactMarginPair((d) => 80)
        .linkUpdate(function (d, i, arr) {
          d3.select(this)
            .attr("stroke", (d) =>
              d.data._upToTheRootHighlighted ? "#152785" : "lightgray"
            )
            .attr("stroke-width", (d) =>
              d.data._upToTheRootHighlighted ? 5 : 1.5
            )
            .attr("stroke-dasharray", "4,4");

          if (d.data._upToTheRootHighlighted) {
            d3.select(this).raise();
          }
        })
        .nodeContent(function (d, i, arr, state) {
          const colors = [
            "#6E6B6F",
            "#18A8B6",
            "#F45754",
            "#96C62C",
            "#BD7E16",
            "#802F74",
          ];
          const color = colors[d.depth % colors.length];
          const imageDim = 80;
          const lightCircleDim = 95;
          const outsideCircleDim = 110;
          const imgSrc = () => {
            return d.data.leaderPhoto
              ? `${paths.OrgChart}${d.data.leaderId}/${d.data.leaderPhoto}`
              : defImg;
          };

          return `
              <div style="background-color:white; position:absolute;width:${
                d.width
              }px;height:${d.height}px;">
                 <div style="background-color:${color};position:absolute;margin-top:-${outsideCircleDim / 2}px;margin-left:${d.width / 2 - outsideCircleDim / 2}px;border-radius:100px;width:${outsideCircleDim}px;height:${outsideCircleDim}px;"></div>
                 <div style="background-color:#ffffff;position:absolute;margin-top:-${
                   lightCircleDim / 2
                 }px;margin-left:${d.width / 2 - lightCircleDim / 2}px;border-radius:100px;width:${lightCircleDim}px;height:${lightCircleDim}px;"></div>
                 <img src=" ${imgSrc()}" style="position:absolute;margin-top:-${imageDim / 2}px;margin-left:${d.width / 2 - imageDim / 2}px;border-radius:100px;width:${imageDim}px;height:${imageDim}px;" />
                 <div class="card" style="top:${
                   outsideCircleDim / 2 + 10
                 }px;position:absolute;height:30px;width:${d.width}px;background-color:#3AB6E3;">
                    <div style="background-color:${color};height:28px;text-align:center;padding-top:10px;color:#ffffff;font-weight:bold;font-size:16px">
                        ${d.data.name} 
                    </div>
                    <div style="background-color:#F0EDEF;height:28px;text-align:center;padding-top:10px;color:#424142;font-size:16px">
                        ${d.data.leaderName} 
                    </div>
                 </div>
             </div>
`;
        })
        .render();
    }
  }, [props.data, d3Container.current]);

  return (
    <div>
      <div ref={d3Container} />
    </div>
  );
};
