## 使用的坑和一般的使用问题

#### Q:vuex如何使用?
1. vue的state引入
```JavaScript
import { mapState } from 'vuex'
 ...mapState({
            sidebar: state => state.app.sidebar,
            device: state => state.app.device,
            showSettings: state => state.settings.showSettings,
            needTagsView: state => state.settings.tagsView,
            fixedHeader: state => state.settings.fixedHeader
        }),
```

2. mapMutations 的使用

```JavaScript
 ...mapMutations({
        'ADD': 'ADD'
      })
```

3. mapActions 使用

```JavaScript
  ...mapActions({
         'commonActionGet': 'commonActionGet',
         'commonActionGetJSON': 'commonActionGetJSON',
         'commonActionPost': 'commonActionPost',
         'commonActionPostJSON': 'commonActionPostJSON'
       })
```

4. computed中计算属性的使用,当vm.a='999'时，触发 setter  方法
```JavaScript
 fixedHeader: {
            get() {
                return this.$store.state.settings.fixedHeader
            },
            set(val) {
                this.$store.dispatch('settings/changeSetting', {
                    key: 'fixedHeader',
                    value: val
                })
            }
        },
```


#### Q:子传父 事件?
```JavaScript
  this.$emit('change', val)
```


#### Q:组件的sync 有何作用?
A: 语法糖，子组件不能直接使用父组件的字段,等于少写了一个updata的绑定函数


#### Q:table TreeGri 组件传入的字段为何不能为children?
A: 这个是element-ui的2.6 以上的存在的BUG，解决的办法  降低elment-ui的依赖版本, 换其他的字段传入

#### Q: 本脚手架的开发结构是啥?
A: 由于vue的语言灵活性，所以开发的时候我采用的几个原则:
- 异步获取的数据都存放在store内
- 页面获取的数据存放在页面的data中
- vue的方法同理，调用异步接口的方法从store中引入,组件的方法只放在组件
- 本脚手架，采用的是seesion校验登陆,所以在路由守卫里不用编写token其他的连同官方的写法
- api：存放接口的地方 , store :存放异步方法地方

#### Q: 如何编写成动态的路由?
A: vue 的router内的路由守卫对象router.beforeEach() 方法，可以把菜单写成动态获取的

#### Q: 整体的布局如何分布?
A： 本脚手架主要的页面布局在layout部分,
- Navbar.vue 右上方的组件
- Stings 控制动态控制风格的
- sidebar 主要是左侧的菜单栏的控制

#### 在哪里设置代理?
A: 在vue.config.js 中有weboack的 proxy 代理设置 

#### dev 和pro 上线部署如何设置地址?
A: 跟其他的脚手架不同的是,上线部署的url 配置在.env.production; dev 开发的地址部署在 .env.development 配置, 这个是使用了node内的环境变量参数

#### vue中监听的方法有哪些?
- 利用keyup事件来实现对input进行监听
-  watch监听数据变化  

```javascript
  watch: {
          //$route.path == this.$route.path
          '$route.path': function(newVal,oldVal){
              if(newVal === '/login'){
                  console.log('欢迎进入login')
              }else if(newVal === '/register'){
                console.log('欢迎进入register')
              }
          }
      }
```
- computed计算属性的使用

#### element 中 el-table 的span-method 如何使用?
- A: 这个agument的参数中参在4个参数，分别代表每一行的横和列、索引信息，我们主要是计算出每一行的这个属性来实现行和列的匹配。
```javascript

1.
  for (var i = 0; i < data.length; i++) {
                if (i === 0) {
                    this.spanArr.push(1)
                    this.pos = 0
                } else {
                    // 判断当前元素与上一个元素是否相同
                    if (data[i].id === data[i - 1].id) {
                        this.spanArr[this.pos] += 1
                        this.spanArr.push(0)
                    } else {
                        this.spanArr.push(1)
                        this.pos = i
                    }
                }
            }

2.
   if (columnIndex === 0) {
                const _row = this.spanArr[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }

```
