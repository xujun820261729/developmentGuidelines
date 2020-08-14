## 地图的制作


#### API Reference
-  [官方中文](https://github.com/xswei/d3-geo/blob/master/README.md#geoMercator)

#### 地图类型
- 墨卡托投影，是正轴等角圆柱投影。由荷兰地图学家墨卡托(G.Mercator)于1569年创立。假想一个与地轴方向一致的圆柱切或割于地球，按等角条件，将经纬网投影到圆柱面上，将圆柱面展为平面后，即得本投影。墨卡托投影在切圆柱投影与割圆柱投影中，最早也是最常用的是切圆柱投影。



#### 使用
### Geographies (d3-geo)
-地理投影, 形状以及数学计算.
1. Paths:地理路径生成器, d3.geoPath 与 d3-shape 很像: 给定一个 GeoJSON 或者特征对象，会生成一个 SVG 路径字符串，也可以将其 渲染到 Canvas 上. 建议使用 Canvas 进行动态或者交互式投影以提高性能. 路径生成器可以与 projections 或 transforms 一起使用，或者可以直接将平面几何呈现到 Canvas 或 SVG 中.
2. Projections:投影可以将球面多边形几何映射为平面多边形几何. D3 提供集中标准投影的实现:
3. Spherical Math
4. Spherical Shapes
5. Streams
6. Transforms


### Azimuthal Projections
1. 方位投影把球体直接投射到平面上. d3.geoAzimuthalEqualArea()  d3.geoAzimuthalEqualAreaRaw
   1. 百科: 方向角（direction angle）又称天顶投影.方向角（direction angle）又称天顶投影，以这个平面做投影面，将地球仪上的经纬线投影到平面上，形成投影网.
   1. 等角投影:投影面上某点的任意两方向线夹角与地球椭球面上相应线段的夹角相等。即角度变形等于零。
   2. 等积投影:面积变形为零的投影。
   3. 任意投影:它是既不等角又不等积的投影。

2. 等面积方位投影. d3.geoAzimuthalEquidistant()   d3.geoAzimuthalEquidistantRaw
3. 等距方位投影.  d3.geoGnomonic()   d3.geoGnomonicRaw
4. 诺蒙尼日投影. d3.geoOrthographic() d3.geoOrthographicRaw
5. 正交投影.  d3.geoStereographic()  d3.geoStereographicRaw
6. 赤平投影. d3.geoAlbersUsa()
7. Conic Projections: 圆锥投影将球体投射到圆锥上, 然后将圆锥展开到平面上. 圆锥投影有两条 标准平行线.
8. 等面积圆锥投影, 这是以美国为中心的: d3.geoConicConformal()  d3.geoConicConformalRaw(phi0, phi1) 
9. 圆锥保角投影 d3.geoConicEqualArea() d3.geoConicEqualAreaRaw(phi0, phi1) 
10. 等面积圆锥投影 d3.geoConicEquidistant() d3.geoConicEquidistantRaw(phi0, phi1)
11. Cylindrical Projections : 圆柱投影将球体投射到一个圆柱体上, 然后将圆柱体展开到平面上. Pseudocylindrical projections(伪圆柱投影) 是圆柱投影的延伸. d3.geoEquirectangular()  d3.geoEquirectangularRaw
12. 等矩形(圆柱)投影. d3.geoMercator()   d3.geoMercatorRaw
13. 球面墨卡托投影 d3.geoTransverseMercator()  d3.geoTransverseMercatorRaw
14. 横向球面墨卡托投影 d3.geoNaturalEarth1()  d3.geoNaturalEarth1Raw


### Raw Projections
- 原始投影是一个用来实现自定义点转换功能的函数; 
1.  project(lambda, phi) :计算给定以弧度为单位的点 [lambda, phi] 对应的投影后的无单位坐标 [x, y].
2. project.invert(x, y) :project 的逆计算.
3. d3.geoProjectionMutator(factory) : 

### Spherical Math

### Streams

### Transforms


### Clipping
