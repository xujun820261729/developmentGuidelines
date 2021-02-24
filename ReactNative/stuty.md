#### React Native
- [基础](https://reactnative.cn/docs/components-and-apis)


#### FQA?
1. Q: mobx-react observer有何用?
- A： 简单的意思： 记录router数据的变化储存在store中，触发render函数

2. Q: react-native-view-shot 依赖有何用?
- A: 快照分享图片使用

3. react-native -> NativeModules.extra.share 分享如何使用?
- A: 分享内容ios和 Android 的参数不一样

```js
    /**
     * Open a dialog to share text content.//打开对话框以共享文本内容
     *
     * In iOS, Returns a Promise which will be invoked an object containing `action`, `activityType`. // 在iOS中，返回一个Promise，该Promise将被包含“action”和“activityType”的对象调用`
     * If the user dismissed the dialog, the Promise will still be resolved with action being `Share.dismissedAction`
     * and all the other keys being undefined. // 如果用户取消了该对话框，承诺仍将通过正在执行的操作来解决`股份解散`所有其他的键都没有定义
     *
     * In Android, Returns a Promise which always be resolved with action being `Share.sharedAction`. //在Android中，返回一个承诺，这个承诺总是随着操作的进行而得到解决`Share.sharedAction`.
     *
     * ### Content // 内容
     *
     *  - `message` - a message to share // 信息
     *  - `title` - title of the message // 分享标题
     *
     * #### iOS
     *
     *  - `url` - an URL to share
     *
     * At least one of URL and message is required.
     *
     * ### Options
     *
     * #### iOS
     *
     * - `excludedActivityTypes`
     * - `tintColor`
     *
     * #### Android
     *
     * - `dialogTitle`

    type ShareAction = ShareSharedAction | ShareDismissedAction;

     type ShareContent =
    | {
          title?: string;
          message: string;
      }
    | {
          title?: string;
          url: string;
      };
     *
     */
      share(content: ShareContent, options?: ShareOptions): Promise<ShareAction>;
```

4. Q： paddingVertical paddingHorizontal 是什么?
- A:  paddingVertica: 上下边距 ;  paddingHorizontal:左右边距( flex 默认的方向为向下)

5. Q: 推荐使用的react-navigation 怎么使用?
- A:  [作者link](https://www.jianshu.com/p/cd3078e344e7)  主要包含三个组件
    1. StackNavigator 导航组件：
        - 
        ```js
            // StackNavigator组件采用堆栈式的页面导航来实现各个界面跳转。它的构造函数：
            StackNavigator(RouteConfigs, StackNavigatorConfig)

            // 1.  RouteConfigs 参数表示各个页面路由配置，类似于android原生开发中的AndroidManifest.xml，它是让导航器知道需要导航的路由对应的页面。
            const RouteConfigs = {
                Home: {
                    screen: HomePage,
                    navigationOptions: ({navigation}) => ({
                        title: '首页',
                    }),
                },
                Find: {
                    screen: FindPage,
                    navigationOptions: ({navigation}) => ({
                        title: '发现',
                    }),
                },
                Mine: {
                    screen: MinePage,
                    navigationOptions: ({navigation}) => ({
                        title: '我的',
                    }),
                },
            };
            /*
            1-1 navigationOptions{
                title - 可以作为头部标题headerTitle，或者Tab标题tabBarLabel
                header - 自定义的头部组件，使用该属性后系统的头部组件会消失
                headerTitle - 头部的标题，即页面的标题
                headerBackTitle - 返回标题，默认为title
                headerTruncatedBackTitle - 返回标题不能显示时（比如返回标题太长了）显示此标题，默认为“Back”
                headerRight - 头部右边组件
                headerLeft - 头部左边组件
                headerStyle - 头部组件的样式
                headerTitleStyle - 头部标题的样式
                headerBackTitleStyle - 头部返回标题的样式
                headerTintColor - 头部颜色
                headerPressColorAndroid - Android 5.0以上MD风格的波纹颜色
                gesturesEnabled - 否能侧滑返回，iOS默认true，Android默认false
            }
            */ 

            // 2. navigationOptions 参数表示导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等：
            const StackNavigatorConfig = {
                initialRouteName: 'Home',
                initialRouteParams: {initPara: '初始页面参数'},
                navigationOptions: {
                    title: '标题',
                    headerTitleStyle: {fontSize: 18, color: '#666666'},
                    headerStyle: {height: 48, backgroundColor: '#fff'},
                },
                paths: 'page/main',
                mode: 'card',
                headerMode: 'screen',
                cardStyle: {backgroundColor: "#ffffff"},
                transitionConfig: (() => ({
                    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
                })),
                onTransitionStart: (() => {
                    console.log('页面跳转动画开始');
                }),
                onTransitionEnd: (() => {
                    console.log('页面跳转动画结束');
                }),
            };

            /*
                initialRouteName - 导航器组件中初始显示页面的路由名称，如果不设置，则默认第一个路由页面为初始显示页面
                initialRouteParams - 给初始路由的参数，在初始显示的页面中可以通过this.props.navigation.state.params来获取
                navigationOptions - 路由页面的配置选项，它会被RouteConfigs 参数中的 navigationOptions的对应属性覆盖。
                paths - 路由中设置的路径的覆盖映射配置
                mode - 页面跳转方式，有card和modal两种，默认为card：card - 原生系统默认的的跳转 modal - 只针对iOS平台，模态跳转
                headerMode - 页面跳转时，头部的动画模式，有float、screen、none三种：float - 渐变，类似iOS的原生效果 screen - 标题与屏幕一起淡入淡出 none - 没有动画
                cardStyle - 为各个页面设置统一的样式，比如背景色，字体大小等
                transitionConfig - 配置页面跳转的动画，覆盖默认的动画效果
                onTransitionStart - 页面跳转动画即将开始时调用
                onTransitionEnd - 页面跳转动画一旦完成会马上调用
            */

            navigation：{
                navigate //  跳转到其他页面
                state // 当前页面导航器的状态
                setParams // 更改路由的参数
                goBack // 返回
                dispatch // 发送一个action
            }

            navigete：{
                routeName // 导航器中配置的路由名称
                params // 传递参数到下一个页面
                action // action 比如：this.props.navigation.navigate('Find', {param: 'i am the param'});
            }

            setParams // 更改当前页面路由的参数，比如可以用来更新头部的按钮或者标题。 this.props.navigation.setParams({param:'i am the new param'})

            goBack // 回退，可以不传，也可以传参数，还可以传null。
            this.props.navigation.goBack();       // 回退到上一个页面
            this.props.navigation.goBack(null);   // 回退到任意一个页面
            this.props.navigation.goBack('Home'); // 回退到Home页面
        ```
    2. TabNavigator 切换组件
        - 
        ```js
         // TabNavigator，即是Tab选项卡，类似于原生android中的TabLayout，它的构造函数：
         TabNavigator(RouteConfigs, TabNavigatorConfig)
         RouteConfigs: {
             title // Tab标题，可用作headerTitle和tabBarLabel回退标题
             tabBarVisible // Tab的是否可见，没有设置的话默认为true
             tabBarIcon // Tab的icon组件，可以根据{focused: boolean, tintColor: string}方法来返回一个icon组件
             tabBarLabel // Tab中显示的标题字符串或者组件，也可以根据{ focused: boolean, tintColor: string }方法返回一个组件
         }
         TabNavigatorConfig:{
             tabBarComponent // Tab选项卡组件，有TabBarBottom和TabBarTop两个值，在iOS中默认为TabBarBottom，在Android中默认为TabBarTop。 TabBarTop - 在页面的顶部 TabBarBottom - 在页面的底部
            tabBarPosition // Tab选项卡的位置，有 top 或 bottom两个值
            swipeEnabled // 是否可以滑动切换Tab选项卡
            animationEnabled /// 点击Tab选项卡切换界面是否需要动画
            lazy // 是否懒加载页面
            initialRouteName // 初始显示的Tab对应的页面路由名称
            order // 用路由名称数组来表示Tab选项卡的顺序，默认为路由配置顺序
            paths // 路径配置
            backBehavior // androd点击返回键时的处理，有initialRoute和none两个值 initailRoute - 返回初始界面 none - 退出
            tabBarOptions :{
                // Tab配置属性，用在TabBarTop和TabBarBottom时有些属性不一致：
                TabBarTop:{
                    activeTintColor // 选中的文字颜色
                    inactiveTintColor // 未选中的文字颜色
                    showIcon // 是否显示图标，默认显示
                    showLabel // 是否显示标签，默认显示
                    upperCaseLabel // 是否使用大写字母，默认使用
                    pressColor // android 5.0以上的MD风格波纹颜色
                    pressOpacity // android 5.0以下或者iOS按下的透明度
                    scrollEnabled // 是否可以滚动
                    tabStyle // 单个Tab的样式
                    indicatorStyle // 指示器的样式
                    labelStyle // 标签的样式
                    iconStyle // icon的样式
                    style // 整个TabBar的样式
                }
                TabBarBottom:{
                    activeTintColor // 选中Tab的文字颜色
                    activeBackgroundColor // 选中Tab的背景颜色
                    inactiveTintColor // 未选中Tab的的文字颜色
                    inactiveBackgroundColor // 未选中Tab的背景颜色
                    showLabel // 是否显示标题，默认显示
                    style // 整个TabBar的样式
                    labelStyle // 标签的样式
                    tabStyle // 单个Tab的样式
                }
                // demo - start
                import React, {Component} from 'react';
                import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";
                import HomeScreen from "./index18/HomeScreen";
                import NearByScreen from "./index18/NearByScreen";
                import MineScreen from "./index18/MineScreen";
                import TabBarItem from "./index18/TabBarItem";
                export default class MainComponent extends Component {
                    render() {
                        return (
                            <Navigator/>
                        );
                    }
                }

                const TabRouteConfigs = {
                    Home: {
                        screen: HomeScreen,
                        navigationOptions: ({navigation}) => ({
                            tabBarLabel: '首页',
                            tabBarIcon: ({focused, tintColor}) => (
                                <TabBarItem
                                    tintColor={tintColor}
                                    focused={focused}
                                    normalImage={require('./img/tabbar/pfb_tabbar_homepage_2x.png')}
                                    selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected_2x.png')}
                                />
                            ),
                        }),
                    },
                    NearBy: {
                        screen: NearByScreen,
                        navigationOptions: {
                            tabBarLabel: '附近',
                            tabBarIcon: ({focused, tintColor}) => (
                                <TabBarItem
                                    tintColor={tintColor}
                                    focused={focused}
                                    normalImage={require('./img/tabbar/pfb_tabbar_merchant_2x.png')}
                                    selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected_2x.png')}
                                />
                            ),
                        },
                    }
                    ,
                    Mine: {
                        screen: MineScreen,
                        navigationOptions: {
                            tabBarLabel: '我的',
                            tabBarIcon: ({focused, tintColor}) => (
                                <TabBarItem
                                    tintColor={tintColor}
                                    focused={focused}
                                    normalImage={require('./img/tabbar/pfb_tabbar_mine_2x.png')}
                                    selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected_2x.png')}
                                />
                            ),
                        },
                    }
                };
                const TabNavigatorConfigs = {
                    initialRouteName: 'Home',
                    tabBarComponent: TabBarBottom,
                    tabBarPosition: 'bottom',
                    lazy: true,
                };
                const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
                const StackRouteConfigs = {
                    Tab: {
                        screen: Tab,
                    }
                };
                const StackNavigatorConfigs = {
                    initialRouteName: 'Tab',
                    navigationOptions: {
                        title: '标题',
                        headerStyle: {backgroundColor: '#5da8ff'},
                        headerTitleStyle: {color: '#333333'},
                    }
                };
                const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);
                // demo -end

            }

         }
        ```
    3. DrawerNavigator 抽屉组件
    -   在原生Android MD 风格里面很多app都会采用侧滑抽屉来做主页面的导航，利用DrawerNavigator在RN中可以很方便来实现抽屉导航。
    ```js
        DrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
        RouteConfigs:{
            title // 抽屉标题，和headerTitle、drawerLabel一样
            drawerLabel // 标签字符串，或者自定义组件， 可以根据{ focused: boolean, tintColor: string }函数来返回一个自定义组件作为标签
            drawerIcon // 抽屉icon，可以根据{ focused: boolean, tintColor: string }函数来返回一个自定义组件作为icon
        }
        DrawerNavigatorConfig:{
            drawerWidth // 抽屉宽度，可以使用Dimensions获取屏幕的宽度，动态计算
            drawerPosition // 抽屉位置，可以是left或者right
            contentComponent // 抽屉内容组件，可以自定义侧滑抽屉中的所有内容，默认为DrawerItems
            contentOptions // 用来配置抽屉内容的属性。当用来配置DrawerItems是配置属性选项：
            items // 抽屉栏目的路由名称数组，可以被修改
            activeItemKey // 当前选中页面的key id
            activeTintColor // 选中条目状态的文字颜色
            activeBackgroundColor // 选中条目的背景色
            inactiveTintColor // 未选中条目状态的文字颜色
            inactiveBackgroundColor // 未选中条目的背景色
            onItemPress(route) // 条目按下时会调用此方法
            style // 抽屉内容的样式
            labelStyle // 抽屉的条目标题/标签样式
            initialRouteName // 初始化展示的页面路由名称
            order // 抽屉导航栏目顺序，用路由名称数组表示
            paths // 路径
            backBehavior // androd点击返回键时的处理，有initialRoute和none两个值，initailRoute：返回初始界面，none：退出
        }

        //demo -start
        import React, {Component} from 'react';
        import {DrawerNavigator, StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";
        import HomeScreen from "./index18/HomeScreen";
        import NearByScreen from "./index18/NearByScreen";
        import MineScreen from "./index18/MineScreen";
        import TabBarItem from "./index18/TabBarItem";
        export default class MainComponent extends Component {
            render() {
                return (
                    <Navigator/>
                );
            }
        }
        const DrawerRouteConfigs = {
            Home: {
                screen: HomeScreen,
                navigationOptions: ({navigation}) => ({
                    drawerLabel : '首页',
                    drawerIcon : ({focused, tintColor}) => (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            normalImage={require('./img/tabbar/pfb_tabbar_homepage_2x.png')}
                            selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected_2x.png')}
                        />
                    ),
                }),
            },
            NearBy: {
                screen: NearByScreen,
                navigationOptions: {
                    drawerLabel : '附近',
                    drawerIcon : ({focused, tintColor}) => (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            normalImage={require('./img/tabbar/pfb_tabbar_merchant_2x.png')}
                            selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected_2x.png')}
                        />
                    ),
                },
            },
            Mine: {
                screen: MineScreen,
                navigationOptions: {
                    drawerLabel : '我的',
                    drawerIcon : ({focused, tintColor}) => (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            normalImage={require('./img/tabbar/pfb_tabbar_mine_2x.png')}
                            selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected_2x.png')}
                        />
                    ),
                },
            }
        };
        const DrawerNavigatorConfigs = {
            initialRouteName: 'Home',
            tabBarComponent: TabBarBottom,
            tabBarPosition: 'bottom',
            lazy: true,
            tabBarOptions: {}
        };
        const Drawer = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfigs);
        const StackRouteConfigs = {
            Drawer: {
                screen: Drawer,
            }
        };
        const StackNavigatorConfigs = {
            initialRouteName: 'Drawer',
            navigationOptions: {
                title: '标题',
                headerStyle: {backgroundColor: '#5da8ff'},
                headerTitleStyle: {color: '#333333'},
            }
        };
        const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);
        // demo -end


    ```





6. Q: Keyboard 有何用?
- A: [官方](https://reactnative.cn/docs/keyboard#用法示例) 简单的就是控制键盘和失去文本

7. Q: react-native-scrollable-tab-view 如何使用?
- A: 
```js
    renderTabBar （功能：ReactComponent） //接受1个参数，props并且应返回一个用作选项卡栏的组件。该组件具有goToPage，和tabs，activeTab并且已 ref添加到道具中，并且应实现setAnimationValue以使其自身与选项卡内容一起动画。您可以手动将传递props给TabBar组件。
    tabBarPosition // 默认为"top"。
     1. "bottom" // 将标签栏置于内容下方。
     2. "overlayTop" "overlayBottom" //用于覆盖内容的半透明标签栏。自定义标签栏必须在其外部元素上使用样式道具才能支持此功能：style={this.props.style}。
    onChangeTab //时调用的函数标签的变化，应该接受1个参数，它是含有两个键的对象：i：所选择的选项卡的索引，ref：该选项卡的所选择的参考
    onScroll //当页面滑动时调用的函数，应接受1个参数，该参数是一个Float数字，表示页面在滑动框架中的位置。
    locked //禁用水平拖动以在选项卡之间滚动，默认为false。
    initialPage //最初选择的标签的索引，默认为0 ===第一个标签。
    page //设置选定的标签（可以越野车看到 ＃126
    children （ReactComponents） //每个顶级子组件都应具有一个tabLabel道具，标签栏组件可以使用该道具来渲染标签。默认选项卡栏期望它是一个字符串，但是如果您创建自定义选项卡栏，则可以使用任何所需的内容。
    tabBarUnderlineStyle （View.propTypes.style） //默认选项卡栏下划线的样式。
    tabBarBackgroundColor // 默认选项卡栏背景的颜色，默认为white
    tabBarActiveTextColor //激活时默认选项卡栏文本的颜色，默认为navy
    tabBarInactiveTextColor //不活动时默认选项卡栏文本的颜色，默认为black
    tabBarTextStyle （//标签栏文本的其他样式。例：{fontFamily: 'Roboto', fontSize: 15}
    style （View.propTypes.style）
    contentProps //应用于根ScrollView/的道具ViewPagerAndroid。请注意，由库设置的覆盖默认值可能会破坏功能。有关详细信息，请参见源。
    scrollWithoutAnimation //在选项卡上，按更改选项卡而没有动画。
    prerenderingSiblingsNumber //预渲染附近的＃同级，Infinity===渲染所有同级，默认为0 ===渲染当前页面。
```


