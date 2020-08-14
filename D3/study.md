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

7. Q d3-shape 何用?
- A: 可视化基本图元 
1. Arcs: 生成器用来在饼图或圆环图中生成 circular(圆形) 或 annular(环形) 扇形。
2. Pies: 生成器不会直接生成图形，但是会计算生成饼图或环形图所需要的角度信息，这些角度信息可以被传递给 arc generator。
3. Lines:生成器可以用来生成线条图需要的 spline 或 polyline。
4. Areas: area generator(区域生成器) 用来在 area 图中生成区域图
5. Curves:lines 被定义为一系列二维点 [x, y]，areas 类似的可以由顶线和基线定义，但是还有一个任务就是把这些离散的点转换为连续的线条: 例如如何在这些点之间进行插值，插值的方式有很多种。
6. Links:link 用来生成从一个源点到目标点的光滑的三次贝塞尔曲线。曲线在起点和终点的切线要么是 vertical，要么是 horizontal，要么是 radial的。
7. Symbols:符号提供了几种用来表示分类的形状。符号的坐标总是位于 ⟨0,0⟩, 需要使用 transform 将其移动到指定的位置(参考: SVG, Canvas)。
8. Stacks:堆叠图，堆叠面积、堆叠柱状图等.

8. Q: D3处理数组的方法有哪些?
- A: 数组操作，包括排序、查找、汇总等等
1. Statistics: 基本的静态统计计算方法
2. Search : 查找类方法
3. Transformations: 数组变换和计算，返回新的数组
4. Histograms: 直方图将离散样本分成连续的，不重叠的区间
5. Axes (d3-axis): 基于比例尺提供人类友好的标尺刻度
6. Brushes (d3-brush):使用鼠标或触摸选择一维或二维区域
7. Chords (d3-chord):创建一个新的弦图布局.
8. Objects：将关联数组(对象)转为数组的一组方法
9. Maps：与 ES6 的 Map 类似，但是有些不同
10. Sets:与 ES6的 Set 类似，但是有些不同
11. Nests:根据指定的规则将数组重组为层次结构
12. Colors (d3-color): 颜色空间以及转换

9. Q: Color Schemes (d3-scale-chromatic) 如何使用?
- A : 用于定量，序数和分类比例尺的颜色渐变和调色板。
1. Categorical Diverging  Sequential (Single Hue)  Sequential (Multi-Hue)  Cyclical