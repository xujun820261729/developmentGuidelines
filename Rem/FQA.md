## rem布局
- rem布局是由于淘宝的flexible布局而变得热,所以可以先了解下淘宝的那套布局方式。
- 优点: 可以满足一般公司的需求90%都可以，但是如果要做一些比较细致的 还是不足



#### 移动端必备知识
1. 物理像素(physical pixel):物理像素又被称为设备像素，它是显示设备中一个最微小的物理部件。每个像素可以根据操作系统设置自己的颜色和亮度。正是这些设备像素的微小距离欺骗了我们肉眼看到的图像效果。
2. 设备独立像素(density-independent pixel):设备独立像素也称为密度无关像素，可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素(比如说CSS像素)，然后由相关系统转换为物理像素。
3. CSS像素: CSS像素是一个抽像的单位，主要使用在浏览器上，用来精确度量Web页面上的内容。一般情况之下，CSS像素称为与设备无关的像素(device-independent pixel)，简称DIPs
4. 屏幕密度: 屏幕密度是指一个设备表面上存在的像素数量，它通常以每英寸有多少像素来计算(PPI)。
5. 设备像素比(device pixel ratio): 设备像素比简称为dpr，其定义了物理像素和设备独立像素的对应关系。它的值可以按下面的公式计算得到：设备像素比 ＝ 物理像素 / 设备独立像素;
- ps: 1.在Javascript中，可以通过 window.devicePixelRatio 获取到当前设备的dpr。 2.在css中，可以通过 -webkit-device-pixel-ratio，-webkit-min-device-pixel-ratio和 -webkit-max-device-pixel-ratio进行媒体查询，对不同dpr的设备，做一些样式适配。
6. 位图像素: 一个位图像素是栅格图像(如：png, jpg, gif等)最小的数据单元。每一个位图像素都包含着一些自身的显示信息(如：显示位置，颜色值，透明度等)。
7. 缩放比 scale: 缩放比：scale = 1/dpr
8. 视窗 viewport 简单的理解，viewport是严格等于浏览器的窗口。在桌面浏览器中，viewport就是浏览器窗口的宽度高度。但在移动端设备上就有点复杂。
9. 视窗缩放 viewport scale 在开发移动端页面，我们可以设置meta标签的viewport scale来对视窗的大小进行缩放定义
10. rem单位 rem就是相对于根元素<html>的font-size来做计算
11. 视窗单位 
- vw : 1vw 等于视窗宽度的1%
- vh : 1vh 等于视窗高度的1%
- vmin : 选取 vw 和 vh 中最小的那个
- vmax : 选取 vw 和 vh 中最大的那个


#### 