## Canvas
- [学习](https://zhuanlan.zhihu.com/p/81863157)



####  组成
1. 栅格(grid): 定位左上角的为(0,0)坐标
2. 渲染(rendering): 元素有一个叫做 getContext() 的方法，这个方法是用来获得渲染上下文和它的绘画功能.
3. 绘制矩形():
   - fillRect(x, y, width, height): 绘制一个填充的矩形
   - strokeRect(x, y, width, height): 绘制一个矩形的边框
   - clearRect(x, y, width, height):清除指定矩形区域，让清除部分完全透明。
4. 绘制路径: 路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。
   - beginPath():新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
   - closePath():闭合路径之后图形绘制命令又重新指向到上下文中。
   - stroke():通过线条来绘制图形轮廓。
   - fill():通过填充路径的内容区域生成实心的图形。
- node: 注：当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合。
5. 移动笔触:moveTo(x, y)：将笔触移动到指定的坐标x以及y上。
6. 线:lineTo(x, y)：绘制一条从当前位置到指定x以及y位置的直线。
7. 圆弧:绘制圆弧或者圆，我们使用arc()方法。
    - arc(x, y, radius, startAngle, endAngle, anticlockwise): 画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针, bool）来生成。
    - arcTo(x1, y1, x2, y2, radius): 根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。
8. 二次贝塞尔曲线及-三次贝塞尔曲线
    - quadraticCurveTo(cp1x, cp1y, x, y)：绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。
    - bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)： 绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
9. Path 2D 对象
    - Path2D()：Path2D()会返回一个新初始化的Path2D对象（可能将某一个路径作为变量——创建一个它的副本，或者将一个包含SVG path数据的字符串作为变量）。
    - Path2D.addPath(path [, transform])是 Canvas 2D API 根据指定路径变量添加路径的方法。")​: 添加了一条路径到当前路径（可能添加了一个变换矩阵）。
10. 添加样式和色彩:
    - fillStyle = color： 设置图形的填充颜色,需是符合 CSS3 颜色值标准 的有效字符串.
    - strokeStyle = color：设置图形轮廓的颜色。
    - globalAlpha = transparencyValue: 这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。
11. 渐变 Gradients: 
    - createLinearGradient(x1, y1, x2, y2): createLinearGradient 方法接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)。
    - createRadialGradient(x1, y1, r1, x2, y2, r2): createRadialGradient 方法接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。
    - gradient.addColorStop(position, color): addColorStop 方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置
12. 图案样式 Patterns
    - createPattern(image, type): 该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。
13. 阴影 Shadows
    - shadowOffsetX = float