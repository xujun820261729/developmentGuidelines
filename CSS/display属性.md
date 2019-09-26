#### display的几个常用的属性值，inline ， block， inline-block,table
定义:规定元素应该生成的框的类型。

1. inline（行内元素）: 
    +  使元素变成行内元素，拥有行内元素的特性，即可以与其他行内元素共享一行，不会独占一行.  
    +  不能更改元素的height，width的值，大小由内容撑开. 
    +  可以使用padding上下左右都有效，margin只有left和right产生边距效果，但是top和bottom就不行.

2. block（块级元素）:
    + 使元素变成块级元素，独占一行，在不设置自己的宽度的情况下，块级元素会默认填满父级元素的宽度. 
    + 能够改变元素的height，width的值. 
    + 可以设置padding，margin的各个属性值，top，left，bottom，right都能够产生边距效果.

3.  inline-block（融合行内于块级）:
    + 结合了inline与block的一些特点，结合了上述inline的第1个特点和block的第2,3个特点.

4.  table



#### inline-block布局 vs 浮动布局
1. 不同之处：对元素设置display：inline-block ，元素不会脱离文本流，而float就会使得元素脱离文本流，且还有父元素高度坍塌的效果
2. 相同之处：能在某程度上达到一样的效果(display：inline-block中有间隙问题)(浮动的局限性在于，若要元素排满一行，换行后还要整齐排列，就要子元素的高度一致才行)


#### inline-block存在的小问题
1. 上面可以看到用了display:inline-block后，存在间隙问题，间隙为4像素，这个问题产生的原因是换行引起的，因为我们写标签时通常会在标签结束符后顺手打个回车，而回车会产生回车符，回车符相当于空白符，通常情况下，多个连续的空白符会合并成一个空白符，而产生“空白间隙”的真正原因就是这个让我们并不怎么注意的空白符。

2. 去除空隙的方法：对父元素添加，{font-size:0}，即将字体大小设为0，那么那个空白符也变成0px，从而消除空隙,现在这种方法已经可以兼容各种浏览器，以前chrome浏览器是不兼容的
3. 浏览器兼容性：ie6/7是不兼容 display：inline-block的所以要额外处理一下：　在ie6/7下：对于行内元素直接使用{dislplay:inline-block;}对于块级元素：需添加{display:inline;zoom:1;}


#### table 布局 
1. display:table=>相当于“table”标签； display:table-row=>相当于“tr”标签； display:table-cell=>相当于“td”标签；
2. 用DIV+CSS编写出来的文件k数比用table写出来的要小
3. table必须在页面完全加载后才显示，没有加载完毕前，table为一片空白，也就是说，需要页面完毕才显示，而div是逐行显示，不需要页面完全加载完毕，就可以一边加载一边显示
4. 非表格内容用table来装，不符合标签语义化要求，不利于SEO
5. table的嵌套性太多，用DIV代码会比较简洁
Node: display: table时padding会失效 ; display: table-row时margin、padding同时失效 ;display: table-cell时margin会失效
