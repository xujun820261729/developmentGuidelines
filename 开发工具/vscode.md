## vscode常用的插件
1. Auto Close Tag (必备) - 自动闭合HTML/XML标签
2. Auto Rename Tag (必备) - 自动完成另一侧标签的同步修改
3. Beautify (必备) - 格式化 html ,js,css [vue配置]https://blog.csdn.net/jiandan1127/article/details/85958965)
4. Prettier   格式化JavaScript / TypeScript / CSS   [教程](https://blog.csdn.net/anxin_wang/article/details/81234214)
5. Bracket Pair Colorizer (必备) -  给括号加上不同的颜色，便于区分不同的区块，使用者可以定义不同括号类型和不同颜色
6. Debugger for Chrome (推荐) 
7. ESLint (推荐) 
8. GitLens(使用git的必备) 使用会使工具变得很卡
9. HTML CSS Support (必备) -　　智能提示CSS类名以及id 
10. HTML Snippets (必备) - 智能提示HTML标签，以及标签含义
11. JavaScript(ES6) code snippets (必备) - ES6语法智能提示，以及快速输入，不仅仅支持.js，还支持.ts，.jsx，.tsx，.html，.vue，省去了配置其支持各种包含js代码文件的时间
12. Markdown Preview Enhanced (推荐) - 实时预览markdown，markdown使用者必备
13. markdownlint (推荐) - markdown语法纠错
14. Material Icon Theme (推荐) - vscode图标主题，支持更换不同色系的图标，值得点出的是，该插件更新极其频繁，基本和vscode更新频率保持一致
15. Path Intellisense (必备) - 自动提示文件路径，支持各种快速引入文件
16. React/Redux/react-router Snippets (推荐)(react必备) React/Redux/react-router语法智能提示
17.  React-Native/React/Redux snippets for es6/es7 
18. react-beautify
19. Vetur (推荐)(vue必备)
20. VueHelper - vue代码片段
21. Vue TypeScript Snippets - vue的 typescript 代码片段
22.  Vue 2 Snippets - vue 2代码片段
23. Dracula Official (推荐) 
24. filesize (了解) - 查看文件大小
25. HTMLHint(了解) - 静态检查规则 具体规则戳这
26.  Class autocomplete for HTML (推荐)   -   智能提示HTML class =“”属性（必备）
27.  IntelliSense for CSS class names (推荐) -  智能提示 css 的 class 名
28. Npm Intellisense(node必备) -     require 时的包提示
29. language-stylus Stylus文件添加语法高亮
30. minapp -   微信小程序标签、属性的智能补全（同时支持原生小程序、mpvue 和 wepy 框架，并提供 snippets）
31. Node.js Modules Intellisense -    在import语句中自动完成Node.js模块
32. Open in Browser - 在vscode中打开浏览器访问
33. Flutter -   Flutter移动应用程序的支持，以及对Dart编程语言的支持。


#### FQA
1. Q: vscode中如何使用Autoprefixer?
- A: 使用 v2.2.0 版本, 基本配置 https://github.com/postcss/autoprefixer, 如下 simplay Demo
```javascript
   "autoprefixer.browsers": [
        // "defaults" // 对应的 > 0.5%, last 2 versions, Firefox ESR, not dead
        "> 1%", // 使用率
        "last 2 versions", // 每个浏览器最后两个版本
        "ie >= 9",  //ie9以上
        "firefox >= 8", // 火狐
        "chrome >= 24", // 谷歌
        "Opera >= 10" // 欧朋，欧洲使用较多
    ],
```

2. Q: Cssrem自动转换rem格式?
- A: 配置  Root Font Size 字段,根据html的frontsize来控制这个值的大小 