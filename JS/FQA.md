1. 如何查询当前在哪一端?
- A: mobile-detect：这个依赖对小白不错
```javascript
    var ua = navigator.userAgent.toLowerCase();
    ua.match(/MicroMessenger/i)=="micromessenger" // 微信
    ua.match(/Mobile MQQBrowser/i)=="mobile mqqbrowser" //QQ
    ua.match(/Android/i)=="android" // 安卓
```