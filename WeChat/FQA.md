## 微信开发

1. Q: 微信网页开发如何兼容各个型号手机主题?
- A: [官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/DarkMode.html)
```javascript
 // 比较陌生头部添加CSS
 <meta name="color-scheme" content="light dark">
 
```





## 小程序开发

1. Q: 原生小程序如何使用图表?
- A: [ec-canvas](https://github.com/ecomfe/echarts-for-weixin);

2. Q: 如何生成海报?
- A: [简单的入门](https://www.jianshu.com/p/fdfd8ca4bfec?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation);

3. Q: 实现多块元素和滚动条同步监听?
- A: 1. 简单的业务逻辑可以参考 scroll-view 原生组件实现; 2. 复杂自定义的业务，我们可以根据 WXML 的扩展语法获取来;
```javascript
// 1.  bindscrolltolower: 	滚动到底部/右边时触发;  scroll-into-view: 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
// 缺点在于不好定位元素处于哪个位置的节点
  <scroll-view scroll-y="true" style="height: 300rpx;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" scroll-into-view="{{toView}}" scroll-top="{{scrollTop}}">
          <view id="demo1" class="scroll-view-item demo-text-1"></view>
          <view id="demo2"  class="scroll-view-item demo-text-2"></view>
          <view id="demo3" class="scroll-view-item demo-text-3"></view>
 </scroll-view>

 // 2. 1.查询元素获取元素的基础信息； 2. NodesRef.boundingClientRect(function callback)可以返回上边距等
    const query = wx.createSelectorQuery()
    query.select('#the-id').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function(res){
    res[0].top       // #the-id节点的上边界坐标
    res[1].scrollTop // 显示区域的竖直滚动位置
    })
```