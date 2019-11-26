## html兼容性
1.   HTML对象获取问题
- FireFox：document.getElementById("idName");
- ie:document.idname或者document.getElementById("idName").
- 解决办法：统一使用document.getElementById("idName");

2.    const问题
- 说明:Firefox下,可以使用const关键字或var关键字来定义常量;
- IE下,只能使用var关键字来定义常量. 
- 解决方法：统一使用var关键字来定义常量.

3. event.x与event.y问题
- 说明:IE下,event对象有x,y属性,但是没有pageX,pageY属性;
- Firefox下,event对象有pageX,pageY属性,但是没有x,y属性. 
- 解决方法：使用mX(mX  =   event.x   ?   event.x  :   event.pageX;)来代替IE下的event.x或者Firefox下的event.pageX.

4. window.location.href问题
- 说明:IE或者Firefox2.0.x下,可以使用window.location或window.location.href;
- Firefox1.5.x下,只能使用window.location. 
- 解决方法：使用window.location来代替window.location.href.

5. frame问题
```js
/**
以下面的frame为例：
<frame   src="xxx.html"   id="frameId"  name="frameName"   />
(1)访问frame对象:
IE:使用window.frameId或者window.frameName来访问这个frame对象.  frameId和frameName可以同名。
Firefox:只能使用window.frameName来访问这个frame对象.
另外，在IE和Firefox中都可以使用window.document.getElementById("frameId")来访问这个frame对象.
(2)切换frame内容:
在 IE和Firefox中都可以使用window.document.getElementById("testFrame").src  =   "xxx.html"或window.frameName.location   =  "xxx.html"来切换frame的内容.
如果需要将frame中的参数传回父窗口(注意不是opener,而是parent  frame)，可以在frame中使用parent来访问父窗口。例如：parent.document.form1.filename.value="Aqing";
*/
```

6. 模态和非模态窗口问题
- 说明:IE下,可以通过showModalDialog和showModelessDialog打开模态和非模态窗口;Firefox下则不能. 
- 解决方法：直接使用window.open(pageURL,name,parameters)方式打开新窗口。
- 如果需要将子窗口中的参数传递回父窗口,可以在子窗口中使用window.opener来访问父窗口. 
- 例如：var  parWin   =   window.opener;  parWin.document.getElementById("Aqing").value  =   "Aqing";

7. firefox与IE的父元素(parentElement)的区别
- IE：obj.parentElement
- firefox：obj.parentNode
- 解决方法:   因为firefox与IE都支持DOM,因此使用obj.parentNode是不错选择.

8. document.formName.item(”itemName”) 问题
- 问题说明：IE下，可以使用document.formName.item(”itemName”)或document.formName.elements["elementName"]；Firefox 下，只能使用document.formName.elements["elementName"]。
- 解决方法：统一使用document.formName.elements["elementName"]。

9. 集合类对象问题
- 问题说明：IE下，可以使用 () 或 [] 获取集合类对象；Firefox下，只能使用 [ ]获取集合类对象。
- 解决方法：统一使用 [] 获取集合类对象。

10.  自定义属性问题
- 问题说明：IE下，可以使用获取常规属性的方法来获取自定义属性，也可以使用getAttribute() 获取自定义属性；Firefox下，只能使用getAttribute() 获取自定义属性。
- 解决方法：统一通过getAttribute() 获取自定义属性。

11.  input.type属性问题
- 问题说明：IE下input.type属性为只读；但是Firefox下input.type属性为读写。
- 解决办法：不修改input.type属性。如果必须要修改，可以先隐藏原来的input，然后在同样的位置再插入一个新的input元素。

12.  event.srcElement问题
- 问题说明：IE下，even对象有srcElement属性，但是没有target属性；Firefox下，even对象有target属性，但是没有srcElement属性。
- 解决方法：使用srcObj =event.srcElement ?event.srcElement : event.target;如果考虑第8条问题，就改用myEvent代替event即可。

13.  body载入问题
- 问题说明：Firefox的body对象在body标签没有被浏览器完全读入之前就存在；而IE的body对象则必须在body标签被浏览器完全读入之后才存在。
- [注] 这个问题尚未实际验证，待验证后再来修改。
- [注] 经验证，IE6、Opera9以及FireFox2中不存在上述问题，单纯的JS脚本可以访问在脚本之前已经载入的所有对象和元素，即使这个元素还没有载入完成。

14.  事件委托方法
- 问题说明：IE下，使用document.body.onload= inject; 其中functioninject()在这之前已被实现；在Firefox下，使用document.body.onload= inject();
- 解决方法：统一使用document.body.onload=newFunction(’inject()’); 或者document.body.onload = function(){/* 这里是代码 */}
- [注意] Function和function的区别。

15. Table操作问题
- 问题说明：ie、firefox以及其它浏览器对于 table 标签的操作都各不相同，在ie中不允许对table和tr的innerHTML赋值，使用js增加一个tr时，使用appendChild方法也不管用。
- 解决方法：//向table追加一个空行：
- var row = otable.insertRow(-1);var cell =document.createElement("td");cell.innerHTML ="";cell.className = "XXXX";row.appendChild(cell);[注] 由于俺很少使用JS直接操作表格，这个问题没有遇见过建议使用JS框架集来操作table，如JQuery。

16.   对象宽高赋值问题
- 问题说明：FireFox中类似obj.style.height =imgObj.height的语句无效。