#### FQA
1. Q:生命周期怎么使用？
A: 出于各种考虑，使用小程序的生命周期避免很多坑

2. Q：如何使用组件快速开发
A: 本项目的组件分为两类，一类是小程序的组件,一类是weui的组件,使用的时可以根据实际情况使用。

3. Q:事件可以使用小程序的事件?
- A: 这个是不可以,由于使用了vue，所以小城的bind需要改成:或者@来绑定事件

4. Q:兼容性好?
- A: 兼容性的问题，肯定没有小程序的的API兼容!就跟你使用框架开发，没有原生JS兼容一样

5. Q:fly怎么使用?
- A: 这个可以参考github中文说明,https://github.com/wendux/fly(简单的来说就是兼容小程序和reacNative的请求，小程序使用axios不兼容)

6. Q:使用mpvue和原生的小程序开发有啥好处?
- A: 首先对于vue的开发来说，上手的学习成本较低，组件化开发，可以CSS预编译，npm支持，开发速度提升

7. Q:为什么我的小程序的开发工具看不到更新的效果?
- A: 这个可是试试:1.把dist包删除重新打包; 2.小程序开发工具重新编译; 3. 可以把小程序的开发关闭重新打开

8. Q:整体的开发风格?
- A：开发主要考虑便于开发，便于维护的角度，以下位开发规范
1. 由于微信小程序的api较少,所以所有的api都放在 uitils的request中存放
2. 发送跳转使用的是utils的api
3. 单个页面把scss、js 、html 拆开
4. 所有来自接口的数据都放在store中存放，页面的信息存放在data中

9. 小程序的跳转<navigator></navigator>如何使用?
- A：
- 跳转含有switchTab 的页面
```Js
<navigator url="../index/index" open-type="switchTab">切换到首页</navigator>
```
- 跳转可以回退的页面  不需要加open-type="switchTab"
- 当前页面打开 open-type="redirect"

10. 小程序的跳转方式?
- A
1. wx.navigateTo({}) 使用 wx.navigateBack 可以返回,但不可以跳转tabBar页面
2. wx.redirectTo()  关闭当前页面，跳转到非tabBar的某个页面 
3. wx.switchTab ，跳转到tabBar的某个页面
4. <navigator> 标签跳转

11. 小程序的引导页面逻辑是什么?
- A： 首先我们需要把数据开关存放在本地,这样每次显示页面 onShow 的时候, 判断是否是引导页面, 然后已组件的形式引入各页面

12. 小程序的页面授权显示如何实现?
- A：首先我们需要使用微信的登陆接口，登陆成功后跳转指定页面，如何校验是否已经登陆? 其一是微信提供了 wx.getSetting 方法判断是否登陆过期， 其二就是服务器端token过期，因此把这个逻辑且在公共方法即可

13. vue组件的子组件传父组件,字段名有啥注意?
- A：传值的名字需要大小写组合，坑