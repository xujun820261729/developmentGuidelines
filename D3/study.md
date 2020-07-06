### vue-d3
- 跟jquery一个套路使用

#### study links
1. d3:  https://www.d3js.org.cn/
2. svg: https://www.d3js.org.cn/svg/get_start/
3. d3 cn ducumnet: https://www.d3js.org.cn/document/

#### QA
1. Q: 如何让d3灵活的展示在一个响应式的空间?
A: 挂在一个元素下面创建d3的svg元素; viewBox: 可视区盒子，即画布的可视区; 
- ndoe： viewBox 和 preserveAspectRatio 属性控制svg的适应
```js
d3.select("#container")
          .append("svg")
          .attr("viewBox", [0, 0, width, height])
          .attr("preserveAspectRatio", "xMidYMid meet")
          .attr("font-size", 10)
          .attr("font-family", "sans-serif")
          .attr("text-anchor", "middle");
```

2. Q: 如何展示的图形比较逼真?
- A: svg是同比列放大和缩小,因此控制 viewBox 中 [x,y,width,height] 的width 和height(font-size 得大小)来让svg表现得逼真

3. Q: 如何实现tooltip的效果?
- A:  实现自定义事件,用查询元素然后绑定事件,tooltip 二种展示模式
```js

// 定义一个位置，事件驱动显示
         .selectAll('.state')
          .data(topojson.feature(us, us.objects.usStates).features)
          .enter()
          .append("path")
          .attr("class", "state")
          .attr("d", path)
          .on('mouseover', function(d) {
            v.$emit('stateSelected', d.properties.STATE_ABBR) //抛出事件
      		})
          .on('mouseout', function(d) {
            v.$emit('stateDeselected', d.properties.STATE_ABBR)
          })

// 根据鼠标的坐标显示

var tooltip = d3.select("body").append("div")
            .attr("class","tooltip") //用于css设置类样式
            .attr("opacity",0.0);

.on("mouseover",function(d){
 //取得提示显示的位置
  var xPosition=parseFloat(d3.select(this).attr("x"))+xScale.rangeBand()/2;
  var yPosition=parseFloat(d3.select(this).attr("y"))/2+h/2;
 
  d3.select("#tooltip")
    .style("left",xPosition+"px")
    .style("top",yPosition+"px")
    .select("#value")
    .text(d.value);
})
//移除提示条SVG
.on("mouseout",function(){
  //(4)添加隐藏类
  d3.select("#tooltip").classed("hidden",true);//ID 选择的语法："#tooltip"
})

```

4. Q: 如何做动画效果?
- A: 1. 添加class类 然后在创建图形时候添加上class ;2.使用d3的api添加一些过度效果
```js
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
```

5. Q: 如何动态的加载数据的(数据的增删改)?
- A: 数据的增删改对应 enter exit  updata 三个处理; 或者添加  d3.select("svg").remove();来粗暴处理

6. Q: 如何切换d3创造图 类型?
- A: 


7. Q:
