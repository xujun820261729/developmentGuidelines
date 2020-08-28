#### IntersectionObserver 
-  提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。
- [学习](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html).

#### 其他
1. [多方面懒加载](https://www.sohu.com/a/197984969_500651)
2. [实例](https://github.com/xunleif2e/vue-lazy-component)


#### vue组件懒加载Demo
1. Q: 如何让元素整体加载?
- A： 利用vue 的 v-if 属性

2. Q: 如何监听元素的进入视角?
- A: 老办法, 监听 scroll 事件后， 使用 getBoundingClientRect 获取元素的属性是否在视角范围内. [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- A: 2015 新增DOM 属性 IntersectionObserver API 实现监听。

3. Q： 如何准确的监听元素已经到了视角范围?
```javascript
if (
    // 正在交叉
    if(entries[0].isIntersecting ||
        // 交叉率大于0
        entries[0].intersectionRatio
    ) {
        this.init()
        this.io.unobserve(this.$el)
    }

    // requestAnimationFrame 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。API: window.requestAnimationFrame(callback);
    requestAnimationFrame (callback) {
    // 防止等待太久没有执行回调
    // 设置最大等待时间
    setTimeout(() => {
        if (this.isInit) return
        callback()
    }, this.maxWaitingTime)

    // 兼容不支持requestAnimationFrame 的浏览器
    return (window.requestAnimationFrame || ((callback) => setTimeout(callback, 1000 / 60)))(callback)
      }
```

4. Q: 无限滚动?
-   entries[0].intersectionRatio <= 0 && !entries[0].isIntersecting
```js
var intersectionObserver = new IntersectionObserver(
  function (entries) {
    // 如果不可见，就返回
    if (entries[0].intersectionRatio <= 0 && !entries[0].isIntersecting) return;
    loadItems(10);
    console.log('Loaded new items');
  });

// 开始观察
intersectionObserver.observe(
  document.querySelector('.scrollerFooter')
);

```

5. Q: IntersectionObserver(entries, options)  ooptons 如何理解?
- 
  1. boundingClientRect : 返回包含目标元素的边界信息的DOMRectReadOnly. 边界的计算方式与;
  2. intersectionRatio : 返回intersectionRect 与 boundingClientRect 的比例值.
  3. intersectionRect : 返回一个 DOMRectReadOnly 用来描述根和目标元素的相交区域.
  4. isIntersecting: 返回一个布尔值, 如果目标元素与交叉区域观察者对象(intersection observer) 的根相交，则返回 true .如果返回 true, 则 IntersectionObserverEntry 描述了变换到交叉时的状态; 如果返回 false, 那么可以由此判断,变换是从交叉状态到非交叉状态.
  5. rootBounds : 返回一个 DOMRectReadOnly 用来描述交叉区域观察者(intersection observer)中的根.
  6. target: 与根出现相交区域改变的元素 (Element).
  7. time : 返回一个记录从 IntersectionObserver 的时间原点(time origin)到交叉被触发的时间的时间戳(DOMHighResTimeStamp).


6.