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