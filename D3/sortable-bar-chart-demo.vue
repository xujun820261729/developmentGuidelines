<!--
-->

<template>
<div>
  <div class="chart"></div>
  <button @click="hanldeChange">change</button>
</div>
</template>

<script>
const d3 = require("d3");
import data from "./data2.json";

export default {
  data() {
    return {};
  },
  mounted: function () {
    this.chart();
  },
  created: function () {},
  methods: {
    chart(order) {
        d3.select("svg").remove();
      const width = 500;
      const height = 500;
      const margin = {
        top: 20,
        right: 0,
        bottom: 30,
        left: 40,
      };

      const svg = d3
        .select(".chart")
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", "middle");

      const xAxis = (g) =>
        g
          .attr("transform", `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(x).tickSizeOuter(0));

      const yAxis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(y))
          .call((g) => g.select(".domain").remove());

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .nice()
        .range([height - margin.bottom, margin.top]);

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.1);

      const bar = svg
        .append("g")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .style("mix-blend-mode", "multiply")
        .attr("x", (d) => x(d.name))
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => y(0) - y(d.value))
        .attr("width", x.bandwidth());

      const gx = svg.append("g").call(xAxis);

      const gy = svg.append("g").call(yAxis);

      if(!order) {
            console.log('order---false',order);
        return
      }

      x.domain(data.sort(order).map((d) => d.name));

      const t = svg.transition().duration(750);

      bar
        .data(data, (d) => d.name)
        .order()
        .transition(t)
        .delay((d, i) => i * 20)
        .attr("x", (d) => x(d.name));

      gx.transition(t)
        .call(xAxis)
        .selectAll(".tick")
        .delay((d, i) => i * 20);

    },

    hanldeChange(){
      this.chart((a,b)=>-a.value+b.value)
    }
  },
};
</script>

<style scope>
</style>
