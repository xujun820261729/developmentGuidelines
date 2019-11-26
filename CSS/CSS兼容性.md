### CSS兼容性
1. 双倍浮动BUG：
- 描述：块状元素设置了float属性后，又设置了横向的margin值，在IE6下显示的margin值要比设置的值大；
- 解决方案：给float的元素添加 display:inline;将其转换为内联元素；

2. 表单元素行高不一致：
- 给表单元素添加vertical-align:middle;
- 给表单元素添加float:left；

3. IE6（默认16px为最小）不识别较小高度的标签（一般为10px）
- 给标签添加overflow:hidden;
- 给标签添加font-size:0;

4. 图片添加超链接时，在IE浏览器中会有蓝色的边框：
- 给图片添加border:0或者border：none;

5. 最小高度min-height不兼容IE6;
- min-height:100px;_height:100px;
- min-height:100px;height:auto!important;height:100px;

6. 图片默认有间隙：
- 给img添加float属性；
- 给img添加display：block;

7. 按钮默认大小不一
- 如果按钮是一张图片，直接用背景图作为按钮图片;
- 用a标记模拟按钮，使用JS实现其他功能；

8. 百分比BUG: 父元素设置100%，子元素各50%，在IE6下，50%+50%大于100%；
- 　给右边的浮动元素添加clear:right；

9. 鼠标指针BUG：　cursor:pointer;IE及以上浏览器和其他浏览器都识别（手型）；cursor:hand 只有IE浏览器识别；

10. 透明度设置，IE不识别opacity属性：
- 　标准写法：opacity:value;(取值范围0-1)；
- 　兼容IE浏览器 filter:alpha(opacity=value);(取值范围1-100);

11. 上下margin重叠问题： 给上面的元素设置margin-bottom，给下面的元素设置margin-top,只能识别其中较大的那个值
- margin-top和margin-bottom 只设置其中一个值；
- 给其中一个元素再包裹一个盒子，并设置over-flow:hidden;

12. 给子元素设置margin-top.应用在了父元素上：
- 把给子元素设置的margin-top改为给父元素设置padding-top;
- 给父元素设置1px的border,即border-top:1px solid transparent;
- 给父元素设置over-flow:hidden;
- 给父元素设置float:left；

13.  innerText 在IE中能正常工作，但在FireFox中却不行. 
```js
if(navigator.appName.indexOf("Explorer")  >   -1){
       document.getElementById('element').innerText   =  "my   text";
}   else{
        document.getElementById('element').textContent  =   "my   text";
}
```

14. css中的width和padding
- 在IE7和FF中width宽度不包括padding，在Ie6中包括padding.

15. FF和IEBOX模型解释不一致导致相差2px
```js
/**
box.style{width:100;border1px;} 
ie理解为box.width =100 
ff理解为box.width =100 + 1*2 = 102  //加上边框2px

解决方法：div{margin:30px!important;margin:28px;}
注意这两个margin的顺序一定不能写反， IE不能识别!important这个属性，但别的浏览器可以识别。所以在IE下其实解释成这样：div{maring:30px;margin:28px}
重复定义的话按照最后一个来执行，所以不可以只写margin:XXpx!important;
*/
```

16. IE5 和IE6的BOX解释不一致
- IE5下div{width:300px;margin:0 10px 0 10px;}
div 的宽度会被解释为300px-10px(右填充)-10px(左填充)，最终div的宽度为280px，而在IE6和其他浏览器上宽度则是以 300px+10px(右填充)+10px(左填充)=320px来计算的。这时我们可以做如下修改div{width:300px!important;width /**/:340px;margin:0 10px 0 10px}

17. ul和ol列表缩进问题
```js
/**
消除ul、ol等列表的缩进时，样式应写成：list-style:none;margin:0px;padding:0px;
经验证，在IE中，设置margin:0px可以去除列表的上下左右缩进、空白以及列表编号或圆点，设置padding对样式没有影响；在 Firefox 中，设置margin:0px仅仅可以去除上下的空白，设置padding:0px后仅仅可以去掉左右缩进，还必须设置list- style:none才能去除列表编号或圆点。也就是说，在IE中仅仅设置margin:0px即可达到最终效果，而在Firefox中必须同时设置margin:0px、 padding:0px以及list-style:none三项才能达到最终效果。
*/
```

