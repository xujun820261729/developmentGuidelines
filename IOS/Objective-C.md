#### 基础知识

> 类(2021.7.15)

- 1. 实例类给实例调用，类方法给类调用
- 2. 方法:首字母大写，后面首字母大写; 自定义类名:首字母大写,以后的首字母大写;
- 3. 系统类: 1.NSString NSObject NSArray; NS(公司的前缀) + String
- 4. 类:表示一个集合; 实例:表示集合中一种类型

```js
// 1.定义类
// MyClass: 类名
// @interface：定义类关键字
// NSObject：基类(根类)
@interface MyClass:NSObject{
    //类变量声明
    //  1.1 命名规则以_ 开始命名 第一个单词小些,后面的单词都大写
    NSString: *_name;
    NSInteger: _age;
}
// 类属性声明
// 类方法和声明
// 1.2.构造函数
// id: 类似于 C语言的void
// - 说明是个对象方法(实例方法)
// init : 方法名
- (id)init

// 1.2.1 initWithXXX 自定义构造方法
- (id)initWithName(NSString *)name
- (id)initWithName(NSString *)name andPrice:(NSInteger)age

// 1.3. setter方法
// 修改实例属性的值
// 方法名: setName:
// 无返回
- (void)setName:(NSString *)name;
- (void)setAge:(NSInteger)age;

// 1.4方法名: setName:andAge:
// 无返回
// 两个参数: name,age
- (void)setName:(NSString *)name andAge:(NSString *)age

// 1.5匿名方法
- (void)setName:(NSString *)name :(NSString *)age
// 4. getter 方法
- (NSString *)name;
- NSInteger)age;

@end

// 2. 实例类：@implementation
@implementation Student
// 调用构造函数
- (id)init
{
    self = [super init] // 2.2表示调用者，指向自己的对象指针变量； super调用父类的方法初始化后返回的变量保存在实例变量中
    // 调用父类的关键字
    if (self) { // 判断父类的对象是否初始化成功
        _name = @'小华';
        _age = 12;
    }
    return self // 指向的调用者
}

- (id)initWithName(NSString *)name
{
    self = [super init]
      if (self) { // 判断父类的对象是否初始化成功
        _name = name ;
    }

    // if( self = [super init]) {
    //     ....
    // }
     return self // 指向的调用者
}


// 2.1 setter方法
- (void) setName:(NSString *)name
{
    _name = name;
}

- (void) setAge:(NSInteger)age
{
    _age = age;
}

- (void) setName:(NSString *)name andAge :(NSInteger)age
{
    _name = name; // 类型直接访问
    //  间接访问: [self setName:name]
    // 指针访问:  self ->_name = name
    _age= age;
}

//  2.3getter 方法
- (NSString *)name{
    return _name
}
- NSInteger)age{
    return _age
}

// 2.4 +开头 类方法, 类调用方法， 类名调用
+ (void)testStudent{
    Student *stu = [[Student alloc] init];
    [stu setName:@'小明' andAge:20];
    // [self getName]
    NSlog(@"stu = %@, age = %li", [stu name], [stu age]);
}

@end

//  使用
init main(init argc, const char *argv[] ){
    @autoreleasepool{
        // *: 1. 表示 指针（指向堆内存）  2. alloc 在栈中新增一个内存（栈内存）

        // 堆内存简单的理解: 堆是硬件内存，栈内存相当度运行内存
        Student *stu = [[Student alloc] init]; // Student通过 alloc 创建一个对象,调用构造方法来初始化
        NSlog(@"stu = %@, age = %li", [stu name], [stu age]); // %@打印对象额占位符, %li 打印long 类型的占位符
        // 使用set方法
        [stu setName:@'小明']
        [stu setAge:20]
        [stu setName:@'小明' andAge:20]

        // 调用类方法
        [Student testStudent]
    }
    return 0
}

```

- 5. control + commnd(alt) + 上下: 快速切换文件
- 6. #import 引入 h 文件, .m 是结束文件标志; OC 完全兼容 C 语言； c 中防止重复判断 #ifndef XXX.h ... define ... #endif，OC 中不用

> 字符串对象(2021.7.15)

- C 语言字符串
  1. 必须用双引号
  2. 每个字符占用一个字节
  3. 末尾又一个隐藏的'\0'
  4. 打印需要用%s 占位符,传递字符串首地址即可

```js
    char *cstring1 = "hello world"
    printf('%s\n', cstring1);
    printf("size = %ld/n", sizeof("hello world"))
```

- OC 字符串 NSString
  1. 字符串前面要加@
  2. %@ 来打印字符串
  3. 每个字符都是 unichar 字符，符合 unicode 编码，多子节存储；(UTF-8 存储)

```js
 // 指向常量区的字符串对象
  NSString *OCStr1 = @"china";
  NSlog(@"OSStr1 = %@", OCStr1);

  // 字符串创建 用c语言的字符串构建OC 字符串
  NSString *OCStr2 = [[NSString alloc] initWithUTF8String:"hello world"]

  // 格式化的构造字符串 ## 来分割
   NSString *OCStr3 = [[NSString alloc] initWithFormat:@"%s##%d##%@","will",888,@"hello world"]

  // 创建新的字符串
  NSString *OCStr4 = [[NSString alloc] initWithString:"hello world"]

  // 转译字符串
  NSString *OCStr4 = [[NSString alloc] initWithCString:"hello world" deconding:NSUTF8StringEncoing]

  // 把C语言转换成OC字符串
  NSString *OCStr5 = [NSString stringWithUTF8String:"hello world"]

  // 用传入的字符串对象创建新的字符串对象
  NSString *OCStr6 = [NSString stringWithString:OCStr1]

  // 格式化字符串
  NSString *OCStr7 = [NSString stringWithFormat:@"%d*%f*%s", 123, 89.43, "hello world"]

  // 用C语言创建OC字符串对象
  NSString *OCStr8 = [NSString stringWithCString:"hello world订单" enconding:NSUTF8Stringconding]

  // 字符串长度
  NSString *str = @"welcome china"
  NSInteger len = [str length]

  // 获取指定位置的字符
  unichar ch = [str characterAtIndex:3]
  NSLog(@"ch = %C", ch) // %c: 打印ASCll码字符    %C: 打印unicode字符 如中文

  // 比较 NSOrderedAscending 递增； NSOrderSame 相等; NSOrderedDescending 递减
  // tip: 判断的标准是ASCll 对比 demo: A>C
  NSComparisonResult  ret1 = [OCStr8 compare:OCStr7];

  // 大小写不敏感 返回的结果同上
  NSComparisonResult ret2 =  [OCStr8 caseInsensitiveCompare:OCStr7];

  // 布尔类型 #define YES 1;   #define NO 0
  BOOl ret4 = [OCStr8 isEqualToString:OCStr7];

  // 判断是否以XXX 开头
  BOOL ret5 = [@'www.baidu.com' hasPrefix:@"www "]

  // 判断 以 XXX 结尾
  BOOL ret5 = [@'www.baidu.com' hasSuffix:@"com"]

  // 追加
  NSString *OCStr9 =  [OCStr8 stringByAppendingString:@".com"];

  //



```
