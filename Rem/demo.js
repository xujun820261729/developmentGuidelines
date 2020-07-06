(function (win) {
    var remCalc = {}
    var docEl = win.document.documentElement,
      tid
  
      // 重置rem
    function refreshRem() {
        // 兼容ie 9 
        /** 如需要兼容ie6~8
         * rectObject 为获得的元素boject
          var rectWidth = rectObject.right - rectObject.left;
          rectHeight = rectObject.bottom - rectObject.top;
          rectObject.top：元素上边到视窗上边的距离;
          rectObject.right：元素右边到视窗左边的距离;
          rectObject.bottom：元素下边到视窗上边的距离;
          rectObject.left：元素左边到视窗左边的距离;
          rectObject.width：是元素自身的宽
          rectObject.height是元素自身的高
         */
      var width = docEl.getBoundingClientRect().width
      if (width > 640) {
        width = 640
      }
      var rem = width / 10
      docEl.style.fontSize = rem + 'px'
      remCalc.rem = rem
      var actualSize = parseFloat(
          /**
           * Window.getComputedStyle()方法返回一个对象，
           * 该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。 
           * 私有的CSS属性值可以通过对象提供的API或通过简单地使用CSS属性名称进行索引来访问。
           * 同样可以获取 伪元素的值   getComputedStyle(h3, '::after').content;
           */
        window.getComputedStyle(document.documentElement)['font-size']
      )
      if (
        actualSize !== rem &&
        actualSize > 0 &&
        Math.abs(actualSize - rem) > 1
      ) {
        var remScaled = (rem * rem) / actualSize
        docEl.style.fontSize = remScaled + 'px'
      }
    }
  
    // 清除定时器
    function dbcRefresh() {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 100)
    }
  
    // 监听浏览器可视宽度的变化
    win.addEventListener(
      'resize',
      function () {
        dbcRefresh()
      },
      false
    )
  
    // 当一条会话历史记录被执行的时候将会触发页面显示(pageshow)事件。(这包括了后退/前进按钮操作，同时也会在onload 事件触发后初始化页面时触发)
    win.addEventListener(
      'pageshow',
      function (e) {
          // 网页是否存在缓存
        if (e.persisted) {
          dbcRefresh()
        }
      },
      false
    )
  
    refreshRem()
  
    remCalc.refreshRem = refreshRem
  
      // 转换成 px
    remCalc.rem2px = function (d) {
      var val = parseFloat(d) * this.rem
      if (typeof d === 'string' && d.match(/rem$/)) {
        val += 'px'
      }
      return val
    }
  
    // 转换成rem
    remCalc.px2rem = function (d) {
      var val = parseFloat(d) / this.rem
      if (typeof d === 'string' && d.match(/px$/)) {
        val += 'rem'
      }
      return val
    }
  
    // 挂在到windows上
    win.remCalc = remCalc
  })(window);
  
  
  // 添加ios 和aos 
  (function (win, doc) {
    var type = navigator.userAgent.match(/(iPhone|iPod|iPad)/i) ? 'ios' : 'aos'
    win.deviceType = type
  })(window, document)
  