## line-height、vertical-align
定义:  设置元素的垂直对齐方式。
语法：vertical-align : baseline | sub | super | top | text-top | middle | bottom | text-bottom | <百分比> | <长度> | inherit

```
<div class="bg">
    <img src="hello.jpg"/>
    <span class="span1">abgxxx</span>
    <span class="span2">abgxxx</span>
</div>

```
- Notes:上面的代码会出现问题 ： 图片下方的空白！ 
- 出现这个问题的原因是因为：图片的 vertical-align 属性为baseline，baseline意味着元素的基线通父元素的基线对齐，字体的 line-height 的默认值是 normal,
- normal表示的相对于 font-size 的倍数, 

#### 字体度量相关概念：
1 .em-square: 相对单位
2. baseline: 字符基线
3. ascender: 字符最高点到baseline的距离
4. descender: 字符最低点到baseline的距离
5. linegap(leading): line-height为normal时的字符实际高度与content-area的差
6. capitalHeight: 大写字母顶部到baseline的距离
7. 


#### line-height
1. 当内容中含有图片时，如果图片的高度大于行高，则含有图片行的line box将被撑开到图片的高度（虽然撑开了line box，但不会影响line-height，因此也不会影响到基于行高来计算的其他属性）
2. 所有的内联元素都有两个高度：基于字体度量的 content-area、virtual-area（也就是 line-height ），这两个高度都无法看到

#### vertical-align
1. 对于内联元素，padding 和 border 会增大 background 区域，但是不会增大 content-area（不是 line-box 的高度）。一般来说你无法再屏幕上看到 content-area。margin-top 和 margin-bottom 对两者都没有影响
2. 对于可替换内联元素（replaced inline elements）、inline-block 元素和 blockified 内联元素，padding、margin 和 border 会增大 height（译者注：注意 margin），因此会影响 content-area 和 line-box 的高度
3. 受其子元素的 line-height 和 vertical-align 的影响