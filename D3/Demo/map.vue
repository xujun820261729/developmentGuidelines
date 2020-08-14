<!--
  1.  默认新增在chart 的 class内中


-->

<template>
  <div>
    <div class="chart"></div>
    <button @click="hanldeChange">change</button>
     <button @click="hanldeReduction">reduction</button>
  </div>
</template>

<script>
const d3 = require("d3");
const topojson = require("topojson");
import pinyin from "js-pinyin";

import { ChinaData, ProvinceData } from "china-map-geojson";

export default {
  data() {
    return {
      clickPoints: [], // 默认选中的点
      mapjs: {},
      config: {
        width: 536,
        height: 375,
        type: "china", // china:全国   province: 省份
      },
    };
  },
  mounted: function () {
    this.showChinaMap();
  },
  created: function () {
  },
  methods: {
    updateDots() {
      d3.selectAll(".location").remove();
      const { clickPoints } = this;
      if (!clickPoints || (clickPoints && clickPoints.length == 0)) {
        return;
      }
      const projection = d3
        .geoMercator()
        .center([102, 31])
        .scale(360)
        .translate([265, 250]);

      const path = d3.geoPath().projection(projection);

      const svg = d3.select("svg");

      const location = svg
        .selectAll("location")
        .data(clickPoints)
        .enter()
        .append("g")
        .attr("class", "location")
        .attr("transform", function (d) {
          //计算标注点的位置
          var coor = projection(d.features[0].properties.cp); //经纬度的投影

          return "translate(" + coor + ")";
        });

      // 添加点的围绕圆效果
      location.append("circle").attr("r", 1);

      location.append("circle").attr("r", 3);

      for (var i = 0; i < 6; i++) {
        location
          .append("circle")
          .attr("r", 0)
          .transition()
          .duration(2000)
          .delay((d, i) => i * 100)
          .attr("r", 16 + i * 4)
          .attr("stroke-opacity", function () {
            return 1 - i * 0.17;
          })
          .attr("stroke-width", function () {
            return i * 0.2 + 0.5 + "px";
          });
      }

      svg
        .selectAll("circle")
        .attr("fill-opacity", "0")
        .attr("stroke", "#92baf2");

      // 添加文字
      location
        .append("text")
        .text(function (d) {
          return d.name;
        })
        .attr("fill", "rgba(255,255,255,0.7)")
        .attr("text-anchor", "end")
        .attr("font-family", "start")
        .attr("font-weight", "bold")
        .attr("transform", "translate(" + [-20, 0] + ")");
    },

    showChinaMap() {
      // 显示中国地图
      const { width, height } = this.config;
      const that =this;
      const us = ChinaData;
      d3.select("svg").remove();
      const svg = d3
        .select(".chart")
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("font-size", 8)
        .attr("class", "map-svg")
        .attr("font-family", "sans-serif")
        .attr("text-anchor", "middle");

      const projection = d3
        .geoMercator()
        .center([102, 31])
        .scale(360)
        .translate([265, 250]);

      const path = d3.geoPath().projection(projection);

      const g = svg.append("g");
      g.selectAll(".state")
        .data(us.features)
        .enter()
        .append("path")
        .attr("class", "state")
        .attr("d", path)
        .attr("fill", "lightgray")
        // .attr("fill-opacity", "0")
        .on("click", function (d) {
          Object.keys(ProvinceData).forEach((key) => {
              if (key.toLowerCase() == pinyin.getFullChars(d.properties.name).toLowerCase()) {
                  that.showProvinceMap({...ProvinceData[key], centerPath:d.properties.cp});
              }
          });
        });
    },

    showProvinceMap(us) {
      console.log('showProvinceMap',us);
      const { width, height } = this.config;

      d3.select("svg").remove();
      const svg = d3
        .select(".chart")
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("font-size", 8)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", "middle");


      let path = d3.geoPath()
                .projection(projection)
      
      let scale  = 40;

      let center =path.centroid(us);

      let offset =[width/2, height/2];

      let projection = d3
        .geoMercator()
        .center(center)
        .scale(scale)
        .translate(offset);

      const bounds  = path.bounds(us);

      const hscale  = scale*width  / (bounds[1][0] - bounds[0][0]);
      const vscale  = scale*height / (bounds[1][1] - bounds[0][1]);

      scale   = (hscale < vscale) ? hscale : vscale;
      projection = d3.geoMercator().center(center)
        .scale(scale).translate(offset);
      path = path.projection(projection);

      const g = svg.append("g");
      g.selectAll(".state")
        .data(us.features)
        .enter()
        .append("path")
        .attr("class", "state")
        .attr("d", path)
        .attr("fill", "lightgray")
        .attr("fill-opacity", "0.6")
        .on("mouseover",function(d){
            console.log('mouseover', d);
        })

    },

    hanldeChange() {
      // 插入点 青岛 江苏
      const pro = ["青海", "江苏"];
      const prs = ["新疆", "陕西"];
      const pros = Math.ceil(Math.random() * 2) > 1 ? pro : prs;
      const clickPoints = [];
      Object.keys(ProvinceData).forEach((key) => {
        pros.forEach((r) => {
          if (key.toLowerCase() == pinyin.getFullChars(r).toLowerCase()) {
            clickPoints.push({ ...ProvinceData[key], name: r });
          }
        });
      });

      this.clickPoints = clickPoints;
      this.updateDots();

      // this.mapjs.init();
    },


    hanldeReduction(){
      this.showChinaMap()
    }
  },
};
</script>

<style scope>
.state :hover {
  fill: #b7d7a1;
  stroke-width: 2px;
}

.map-svg {
  /* background: url('./demo.png') center center no-repeat; */
  /* background-color: cornflowerblue; */
  background-size: 100%;
}
</style>
