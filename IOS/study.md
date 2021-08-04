## ios

#### 底层框架

1. Core Os 层:位于 ios 框架底层，提供了底层的系统服务；
2. Core Servicesc 层: 核心服务层，提供了很多硬件服务，如 GPS、加速计、骆驼仪等
3. media 层：依赖 Core Servieces 提供的功能，主要负责图形和多媒体功能。
4. Cocoa Touch 层: 直接向 ios 提供各种基础功能额支持。（主要学习目标）

#### 学习和资源

1. 苹果学习官网:https://developer.apple.com

#### 开发语言

1. Objective-C:老款
2. Swift: 新款 ios 12。0 几乎用这个 swift 语言

#### QFA？

1. Q: UIApplicationMain 有啥作用?

- A: 1.初始化 UIApplication/实例该对象,指定 nil,系统会默认 UIApplication;2.从指定的应用程序委托类,初始化一个应用委托;3.启动主程序循环

2. Q: AppDelegate.h 主要负责啥？

- A: 主要是生命周期的函数
