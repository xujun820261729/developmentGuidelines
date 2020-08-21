#### uni-app
- [官方指导很详细](https://uniapp.dcloud.net.cn/)


#### 工具(HBuilderX)
- [官方使用](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/35583)
- 第一次启动微信小程序端需要，设置微信开发工具的 安全设置->端口打开; HBuilderX配置本地的127.0.0.1 加上微新工具的端口号; 其他端的小程序则自己打开已经编译的地址代码即可。

####  FQA
1. Q: // #ifdef H5 什么意思?如何使用?
- A: [详细](https://zhuanlan.zhihu.com/p/101922803)
- Demo
```javascript
    //1. 元素中使用
    <div>
        <!-- #ifdef MP-WEIXIN --> // 微信
        <!-- #endif -->
        <!-- #ifdef APP-PLUS --> // APP
        <!-- #endif -->
        <!-- #ifdef H5 --> // H5
        <!-- #endif -->
        <!-- #ifdef MP --> // 小程序
         <!-- #endif -->
    </div>

    //2. JS中使用
    //#ifdef H5
        Vue.prototype.$jweixin = jweixin;
    //#endif

    //3. 两个同时
    //#ifdef APP-PLUS || H5
```

2. Q: upx单位 和 uni.upx2px() 含义?
- A: [upx-upx2px](https://www.cnblogs.com/putao1/p/10141875.html)
- upx专属的响应式转换计算单位，早期的使用单位，当前已经转成rpx

3. Q: manifest.json 作用?
- A: 主要为uni-app 配置文件，如打包地址、基础配置文件.

4. Q: 目录结构代表什么意思?
```js
┌─cloudfunctions        云函数目录（阿里云为aliyun，腾讯云为tcb，详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─hybrid                存放本地网页的目录，详见
├─platforms             存放各平台专用页面的目录，详见
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─wxcomponents          存放小程序组件的目录，详见
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见

```

5. Q: uni-app 中如何跳转菜单?
- A: [文档](https://uniapp.dcloud.net.cn/component/navigator?id=navigator);

6. Q: uni-app 使用的地图是什么坐标系?
- A: 使用的是 GCJ02(火星坐标)
- 明细
```js
| 标系	            |   使用厂商
| 百度坐标（BD09）   |	百度地图
| 火星坐标（GCJ02）	| 腾讯搜搜地图,搜狐搜狗地图,阿里云地图,高德地图,灵图地图,图吧地图
| 大地坐标系(WGS84)  |	GPS定位系统及相关设备,北斗定位系统及相关设备

```

7. Q: 如何使用自己引入的插件?
- A: 主要通过插件的demo 或者源码来引用插件和指定的UI组件.