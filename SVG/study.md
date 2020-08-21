#### SVG学习
- [document](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/svg)


#### 基础指引
1. defs 组件 引用的时候 use使用一个url
    - x=“克隆元素的左上角的x轴”
    - y=“克隆元素的左上角的y轴”
    - width=“克隆元素的宽度”
    - height=“克隆元素的高度”
    - xlink:href=“URI引用克隆元素” < 特别注意： 引用ID需要加 #ID >
2. g(group) 相关元素整合的容器 id 是唯一的标志
3. filter 标签用来定义滤镜，滤镜必须含有id属性来标识滤镜。图形元素通过filter=url(#id)来引用滤镜
4. 



#### 动画
1. attributeName:动画中改变的值
2. attributeType:width是一个XML属性，另一个常用的值是CSS，如果忽略这个值，则默认是auto，会先搜索CSS属性，再搜索XML属性
3. from to: 起始值和结束值
4. dur:持续时间
5. fill:结束时该怎么做


#### 动画时间与同步动画
1. A 动画结束,B 动画开始。以ID 作为B开始的标志，C1.end
2. 延迟事件的添加 begin="c1.end+5s" 

####  多边形和path动画
1. 多边形和path的值为每一个点单独转换

#### 对坐标变换进行过渡
1. animate元素不适合对平移、旋转、缩放进行过渡，因为这些坐标变换被包裹在transform属性内。animateTransform元素可以解决这个问题

##### CSS处理SVG动画
1. 两个步骤：一是选中要运动的元素，然后设置将动画属性作为一个整体进行设置。二是告诉浏览器改变选中元素的哪个属性以及在动画的什么阶段。这些都定义在@keyframes说明符中。
- animation-name 
- animation-duration 
- animation-timing-function 
- animation-iteration-count
- animation-direction
- animation-play-state
- animation-delya
- animation-fill-mode