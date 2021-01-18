1. Q: 如何配置多页面应用?
- A:webpack.config.js 配置多个页面入口
```javascript 
// 获取指定路径下的入口文件
function getEntries(globPath) {
    const files = glob.sync(globPath),
      entries = {};
    files.forEach(function(filepath) {
        const split = filepath.split('/');
        const name = split[split.length - 2];
        entries[name] = './' + filepath;
    });
    return entries;
}
       
const entries = getEntries('src/**/index.js');

Object.keys(entries).forEach(function(name) {
   webpackConfig.entry[name] = entries[name];
   const plugin = new HtmlWebpackPlugin({
       filename: name + '/' + name + '.html',
       template: './public/index.html',
       inject: true,
       chunks: [name]
   });
   webpackConfig.plugins.push(plugin);
})
```


2. React 中 拖拽用什么库?
- A: dnd：https://react-dnd.github.io/react-dnd/examples/nesting/drag-sources 

3. 关于redux 的数据流如何使用?
- A: [推荐指导](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
    1. store 的引入:createStore(reducer);
    2. 监听: store.subscribe()
    3. 中间件的使用

4. Q:服务端渲染（SSR）和 客户端渲染（CSR） 如何区分?
- A: 右击查看源码, 可以看到源码则是SSR，否则都是SPA框架
- PS: 
  1. 服务端渲染（SSR）: 客户端拿到的是渲染后的结果，可以直接展示。服务器端渲染的页面在网络中传输的时候，传输的是一个真实的页面。因此，爬虫客户端当爬到我们的页面后，会分系我们给他提供的这个页面，此时，我们页面中的关键数据就会被爬虫给收录了。服务端渲染可以解决首页白屏时间过久，但是也容易导致服务器压力大，因此，可以使用服务器端的页面缓存技术，减轻服务器的渲染压力。
  2. 客户端渲染（CSR）:在当今SPA框架，Vue，React，Angular大行天下的时候，前后端分离开发异常可见。客户端渲染简单理解就是浏览器发送页面请求，服务器返回的是一个模板页面，浏览器从上至下解析过程中需要发送ajax请求获取数据，最后再调用模板引擎（art-template等）渲染HTML结构，并把渲染后的结果添加到页面指定容器中


5. Q: UmiJS (pro)框架代码打包的优化?
- A: 由于项目持续迭代添加新的代码?如何优化打包? [link](https://umijs.org/zh-CN/guide/boost-compile-speed#调整-splitchunks-策略，减少整体尺寸)
