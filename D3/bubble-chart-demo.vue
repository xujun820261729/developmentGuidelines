<!--
Links:
  d3:  https://www.d3js.org.cn/
  svg: https://www.d3js.org.cn/svg/get_start/
  d3 cn ducumnet: https://www.d3js.org.cn/document/
  数据结构:
  interface propsdata [Array]
    {
      id:String,
      name:String,
      value:String, 
    } 
-->

<template>
<div>
  <div id="container">
  </div>

  <button @click="handleShift">shift</button>

  <button @click="handleAdd">add</button>

  <button @click="handleUpdata">updata</button>

   <button @click="handleChange">change</button>
</div>


</template>

<script>
const d3 = require('d3');
import data from './data.json'

export default {
  data(){
    return{
      height:500,
      width:932,
      list:[]
    }
  },
  props:{
    datas:{
      type:Array,
      defualt:[]
    }
  },
  mounted: function() {
    this.createSvg()
  },
   created: function() {
     this.list=data;
   },

  watch: {
    list: function(data) {
      console.log('watch-list',data);
      //  this.createSvg()
    }
  },
   methods: {
     handleShift(){
       const {list} =this;
       const copy=JSON.parse(JSON.stringify(list))
       copy.shift();
        this.list=copy;

        this.createSvg()
     },

    handleAdd(){
        const {list} =this;
       const copy=JSON.parse(JSON.stringify(list))
       copy.push({
          "name": "MaxFlowMinCut",
          "title": "flare/analytics/graph/MaxFlowMinCut",
          "group": "analytics",
          "value": 7840
       })
      this.list=copy;
    },


    handleUpdata(){
      const {list} =this;
       const copy=JSON.parse(JSON.stringify(list))
     copy[2].name='test';
      this.list=copy;

    },


    handleChange(){
      this.list=[
          {
              "name": "test1",
              "title": "flare/analytics/cluster/AgglomerativeCluster",
              "group": "analytics",
              "value": 1111
            },
            {
              "name": "test2",
              "title": "flare/analytics/cluster/CommunityStructure",
              "group": "analytics",
              "value": 2222
            },
            {
              "name": "test3",
              "title": "flare/analytics/cluster/HierarchicalCluster",
              "group": "analytics",
              "value": 3333
            }
      ];
    },

    createSvg: function() {
      
      const {height,width,list:data} =this;
      // 初始化数据
      d3.select("svg").remove();
     
      // 创建d3实例 （可以响应的放大缩小）
      const  svg = d3.select("#container")
          .append("svg")
          .attr("viewBox", [0, 0, width, height])
          .attr("preserveAspectRatio", "xMidYMid meet")
          .attr("font-size", 10)
          .attr("font-family", "sans-serif")
          .attr("text-anchor", "middle");

      data.forEach(r => {
        r.id=Math.random().toString(36).substr(3,5);
      });

      // 定义将数组转化成字符串的格式, 八进制记数法, 四舍五入为整数.
      const format = d3.format(",d");

      // 设置颜色
      const color = d3.scaleOrdinal(d3.schemeCategory20c);

      // 规定生成的配置
      const  pack = data => d3.pack()
        .size([width - 2, height - 2])
        .padding(3)
        (d3.hierarchy({children: data})
        .sum(d => d.value))
        .each(function(d) {
          // 添加UI层的数据
          if (d.data.id) {
            const id = d.data.title.lastIndexOf("/")+'';
            const i = d.data.title.lastIndexOf("/");
            d.id = d.data.id;
            d.package = id.slice(0, i);
            d.class = id.slice(i + 1);
            d.name= d.data.name;

          }
        })

    // 处理的数据，使之适应bubble chart的需求
    const root = pack(data);

    // 生成节点，并绑定上面转换后的数据，并设置class,transform等属性值
    const leaf = svg.selectAll("g")
      .data(root.leaves())
      .enter().append("g")
      .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

    // 为节点添加circle元素并设置相关属性
     leaf.append("circle")
      .attr("id", d => {
        return d.id
      })
      .attr("r", 0)
      .transition()
      .duration(2000)
      .delay((d, i) => i * 100)
      .attr("r", d => d.r)
      .attr("fill-opacity", 0.7)
      .attr("fill", d => { 
        return color(d.package)})

    // 设置剪裁路径(剪裁地址的id和text clip-path 对应,目的是让内容不溢出显示)
    leaf.append("clipPath")
      .attr("id", d => { 
        return  "clip-" + d.id})
      .append("use")
      .attr("xlink:href", d =>  "#" + d.id);

    // 定义节点上的文字及其剪裁路径、数据绑定、位置坐标等属性
    leaf.append("text")
      .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"})
      .selectAll("tspan")
       // 满足业务的需求,匹配显示
      .data(d => d.name.split(/(?=[A-Z][a-z])|\s+/g))
      .enter().append("tspan")
      .attr("x", 0)
      // 几个tsapn标签来存放这些文本；随后设置文本的其实位置x为0，y坐标根据一定的距离进行下移
      .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
      .text(d => { 
        return d});

      // 定义title的文本内容及格式
      // leaf.append("title")
      //     .text(d => `${d.data.title === undefined ? "" : `${d.data.title}`}\n${format(d.value)}`);

      // tooltip 展示
      // const tooltip = d3.select("body").append("div")
    	// 				.attr("class","tooltip") //用于css设置类样式
    	// 				.attr("opacity",0.0);

      // 绑定事件
      // leaf.on("mouseover",function(d){
      //     tooltip.html(d.data.name+"<br/>"+d.data.value)
      //         //设置tooltip的位置(left,top 相对于页面的距离) 
      //         .style("left",(d3.event.pageX)+"px")
      //         .style("top",(d3.event.pageY+20)+"px")
      //         .style("opacity",1.0);
      //   })
    	// 	//鼠标移出时通过ID移除标签
    	//  	.on("mouseout",function(d){
    	// 	  tooltip.style("opacity",0.0);
    	// 	});  
    },
  }
 

}
</script>

<style scope>
 svg{
    min-width: 900px;
    max-width: 1200px;
    height: 500px;
    margin: 0 auto;
        background-color: royalblue;
  }

  .tooltip{
  			font-family:simsun;
  			font-size:10px;
  			width:120;
  			height:auto;
  			position:absolute; 
  			text-align:center;
        border: 1px solid #aaa;
  			background-color:white;
        padding: 15px;
  			border-radius:5px;	
  		}

  .starStyle{
	animation-name:starAnim;
	animation-duration: 2s;
	animation-iteration-count: 1;
	animation-direction: alternate;
	animation-timing-function: ease;
	animation-play-state: running; 
}


@keyframes starAnim{
	0%{
		fill:red;
		transform: translate(-50px,-50px);
	}
	50%{
		fill:green;
		transform: translate(-120px,-100px);
	}
	100%{
		fill:blue;
		transform: translate(80px,60px);
	}
}

</style>
