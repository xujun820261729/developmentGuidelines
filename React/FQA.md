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