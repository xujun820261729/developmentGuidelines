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
  //  NSString 创建不可变更的字符串,不能在原字符串末尾追加字符串，只能利用 stringByAppendingString 传入创建新的字符串对象
  NSString *OCStr9 =  [OCStr8 stringByAppendingString:@".com"];

 // 格式化 追加字符串
  NSString *str10 = [str7 stringByAppendingFormat:@"%d%s", 123, 'hello world']

 // 字符串的提取 substringFormIndex：提取指定位置 到 末尾；
 // substringToIndex：提取 不包含 到 指定位置
 // substringWithRange:(NSRange) NSRange:{location:位置，length:长度}： 提取从开始到结束
  NSString *str11 = @'www.hao123.com';
  NSlog(@"subString = %@",[str11, substringFormIndex:4])
  NSRange range1= {4,6}
  [str11, substringWithRange:range1]
  [str11, substringWithRange:NSMarkRange(4,6)]

  // 字符串的查找
  // NSRange  rangeOfString:@"world" 返回字符串的范围
  // NSNotFound long类型最大值
  NSRange range2 = [str11, rangeOfString:@"world"];
  if(range2.location == NSNotFound) {
      // 没有找到
  }
  // 倒序查找
  NSRange range3 = [str11, rangeOfString:@"world", options:NSBackwardsSearch];

  // 指定范围查找
  NSRange range4 = [str11, rangeOfString:@"world", options:NSBackwardsSearch,range1];


```

4.  字符串操作

```js
    NSString str1 = @"hello World";
    //  小写转换成大写
    NSLog(@"str = %@", [str1 uppercaseString])

    // 大写转换成小写
    NSString str2 = @"HELLO WORLD";
    NSLog(@"str = %@", [str2 lowercaseString])

    // 把单词的首字母转换成大写其余字母转换成小写
    NSLog(@"str = %@", [str1 capitalizedString])

    // 字符串-> 数值字符  0~9
    NSString str4 = @"123";  // 如果是非法字符? 123b  返回123到b停止转换
    NSLog(@"num = %i", [str1 initValue]) // 字符串对象 转换成 int数值
    NSLog(@"num = %li", [@"1234" integerValue]) // 字符串对象 转换成 NSInteger类型的值
    NSLog(@"value = %.2f", [@"1234.23" floatValue]) // 字符串对象 转换成 浮点型数据

    // 用传入的字符串替换指定位置的字符串
    NSString *str6 = [str4 stringByReplacingCharactersInRange:NSMakeRange(4,6) withString:@"welcome"]

    // 用传入的字符串 替换 原字符串中 所有的目标字符串
     NSString *str6 = [str4 stringByReplacingOccurrencesOfString:@"world" withString:@'baidu']

    // 文件的输入输出
    // 第一个参数: 文件的路径
    // 第二个参数: 字符串的编码方式
    // 第三个参数: NSError 对象判断错误位置
    NSError *error = nil;
    NSString *str7 = [[NSString alloc] initWithContentOfFile:@"/User/eir/Desktop/test.txt" encoding:NSUTF8StringEnoding error:&error]

    if(error) { // 打印文件出错信息
     NSLog(@"error = %@", error)
    }

    // 类方式读取文件内容
    NSString *str8 = [NSString stringWithContentsOfFile:@"/User/eir/Desktop/test.txt" encoding:NSUTF8StringEnoding error:nil]

```

5. 可变字符串 NSMutableString 是 NSString 的子类

```js
    // 1. 创建
    NSMutableString *str1 = [[NSMutableString alloc] initWithString:@"hello world"];
    NSLog(@"str1 = %@", str1)

    // 2. 创建指定容量大小的空可变字符串对象
    NSMutableString *str2 = [[NSMutableString alloc] initWithCapacity:20]

    // 3.指定在位置插入字符串
    [str1 insertString:@"word" atIndex:5]
    NSLog(@"str2 = %@", str1)

    // 4. 删除指定范围内的字符串
    [str1 deleteCharactersInRange:NSMarkRange(3,6)]

    // 5.appendString 末尾追加字符串
    [str1 appendString:@" baidu"]

    // 6. appendFormat 格式化追加
    [str1 appendFormat:@"%d%s", 123, '.com']

    // 7. 用传入的字符串重置字符串
    [str1 setString:@"welcome to china"]

    // 8. NSMakeRange(8,2) 8:位置 2:长度  用指定字符串替换
    [str1 replaceCharactersInRange:NSMakeRange(8,2) withString:@"like"]

```

> 数组

- 含义

1. NSArray:不可变类
2. 数组是对象有序集合
3. 数组储存是对象的地址(对象的引用);
4. 不可变数组不能删除,修改，添加;
5. 数组可以添加不通类型的对象
6. 数组从下标开始访问 0 开始

```js
    NSArray *array1 = @[@"11", @"22", [NSNumber numberWithInt:123]]

    NSArray *array2 = [[NSArray alloc] init] // 空数组对象

    NSArray *array3 = [[NSArray alloc] initWithObject:@"44",@'55',@'66',nil] // nil代表数组的结束

    NSArray *array4 = [[NSArray alloc] initWithArray:array1] // 通过传入的数组创建

    NSArray *array5 = [NSArray array] // 类方法创建对象

    NSArray *array6 = [NSArray arrayWithObjects:@"999", @"10", @"11", nil] // 类对象创建数组

    NSArray *array7 = [NSArray arrayWithArray:array6] // 传入数组创建数组

    NSInteger count = [array1 count] // 获取数组的长度

    [array1 objectAtIndex:2] // 获取指定位置对象

    array1[2] // 返回第二个元素

    [array1 indexObject:@"two"] // 返回字符串在的位置

    [array1 lastObject] // 最后一个元素

    [array1 firstObject] // 第一个元素

    BOOL ret = [array1 isEqualToArray array2] // 判断数组是否相等

    id obj = [array1 firstObjectCommonWithArray:array2] // 返回第一个相同的元素（先取第一个数组的第一个元素根 第二个数组的元素对比，如果存在?则返回）

    // 数组排序? 元素都是相同元素类型

```

7. 数据的操作

```js
    // 添加元素 需要 接受这个返回
    array1 = [array1 arrayByAddingObject:@"3333"]

    // 添加多个元素
    array2 = [array1 arrayByAddingObjectsFromArray:@[@"111",@"222"]]

    // 数组的提取 指定范围的元素
    NSArray array2 = [array1 subarrayWithRange:NSMakeRange(8,2)]

    // 返回指定下标的数组
    NSMutableIndexSet *indexSet = [NSMutableIndexSet indexSetWithIndex:1]
    [indexSet addIndex:2] // 可变的添加下标
    NSArray array3 = [array1 objectsAtIndexes:indexSet]

    // 字符串返回数组
    NSArray array4 = [str componentsSeparatedByString:@" "]

    // 以字符集中的每一个字符 作为分隔符
    [str componentsSeparatedByCharactersInSet:[NSCharacterSet characterSetWithCharacterSetWithCharactersInString:@" "]]

    // 把数组元素拼接成一个字符串
    [str componentsJoinedByString:@"##"]

    // 遍历数组
    NSInteger cnt = [sortArray count];
    // 通过下标遍历
    for (NSInteger i=0;i<cnt;i++) {
        NSLog(@"%@", [sortArray objectAtIndex:i])
    }

    // 枚举器法
    // 倒序额枚举器,遍历数组  nextObject: 打印数据的对象
    NSEnumerator *revereEnum = [sortArray revereObjectEnumerator];
    id obj = nil;
    while(obj = [revereEnum nextObject]) {
        NSLog(@"obj = %@", obj)
    }

    //  正序的枚举器
    NSEnumerator *enumerator = [sortArray objectEnumerator];
    id obj2 = nil;
    while(obj2 = [enumerator nextObject]){
        NSLog(@"obj = %@", obj2)
    }

    // 快速枚举法
    for (id *obj3 in sortArray) {
        NSLog(@"obj = %@", obj3)
    }

```

8. 可变数组

```js
    //  NSMutableArray
    // 可变数组的方法和不可变的方法都可以调用
    // 可以直接添加、修改、删除

    // 1. 创建
    NSMutableArray *array = [[NSMutableArray alloc] initWithObjects:@"1",@"2",@"3",nil]

    // 2.独有创建 指定容量大小的可变数组对象(可以有20个元素容量大小)
    NSMutableArray *array1 = [[NSMutableArray alloc] initWithCapacity:20]

    // 3.类方法创建指定容量大小的可变数组对象
    NSMutableArray *array2 = [NSMutableArray arrayWithCapacity:20]

    [array addObject:@"99"] // 添加object元素

    [array addObjectFromArray:@[@"6",@"7",@"8"]] // 添加一个数组

    [array insertObject:@"hello world" atIndex:3] // 指定位置添加元素

    // 往指定下标中添加  指定元素 数组中一次更换
    NSMutableIndexSet *mulset = [NSMutableIndexSet indexSetWithIndex:1]
    [mulset addIndex:2]
    [array insertObject:@[@"baidu",@"goole"]  atIndex:mulset]

    // 重置原数组 同换成setArray的数组
    [array setArray:@[@"hello", @"world", @"baidu"]]

    //替换指定下标的数组元素
    [array replaceObjectAtIndex:2 withObject:@"perfect"]

    // 同时替换下标集合位置的元素
    NSIndexSet *indexSet = [NSIndexSet indexSetWithIndexIndexRange:NSMakeRange(2,3)]
    [array replaceObjectsAtIndexes:indexSet withObject:@[@"1",@"2"]]

    // 交换数组中的元素
    [array exchangeObjectAtIndex:1 withObjectAtIndex:3]

    // 替换指定范围的元素
    [array replaceObjectsRange:[NSMakeRange(2,2)] withObjectsFormArray:@[@"1",@"2"]]

    // 数组的删除 删除数组中所有指定的对象
    [array removeObject:@"one"]

    // 删除指定下标的元素对象
    [array removeObjectAtIndex:2]

    [array removeLastObject] // 删除数组中最后一个元素

    [array removeAllObjects] // 删除所有的元素

    [array removeObject:@"hello" inRange:NSMakeRange(3,2)] // 指定位置删除指定元素

    [array removeObjectInArray:@[@"1",@'2']] //删除指定数组中所有的元素

    // @selector 创建选择器的关键, 利用方法的方法名 底层已经实现
    // 比较规则的方法大于0，进行交换
    [array sortUsingSelector:@selector(compare:)]

```

9. 字典对象

```js
    // NSDictionary:不可变字典
    // 字典对象的元素都是 key:value
    // 字典中的元素没有顺序
    // NSMutableDictionary: 可变字典对象,可以使用所有不可变类中的方法
    // 字典对象中key的值是唯一的
    NSDictionary *dict = @{@"1":@"11",@"2":@"22",@"3":@"33"}

    // 用传入的ji na
    NSDictionary *dict1 = [[NSDictionary alloc] initWithObjectsAndKeys:@"12",@"13",nil]

    // 用传入的字典生成字典
    NSDictionary *dict2 = [[NSDictionary alloc] initWithDictionary:dict]

    // 用传入的值数组，和key的数组一一对应  必须对应起来
    NSDictionary *dict3 = [[NSDictionary alloc] initWithObjects:[NSArray arrayWithObjects:@"1",@"2",@"3",@"4",nil] forKeys:[NSArray arrayWithObjects:@"one",@"two",@"three",@"four",nil ]]

    // 创建空的字典对象
    NSDictionary *dict4 = [[NSDictionary alloc] init]

    // 类方法创建空的字典对象
    NSDictionary *dict5 = [NSDictionary dictionary]

    // 用传入的 键值 对创建
    NSDictionary *dict6 = [NSDictionary dictionaryWithObjectAndKeys:@"5",@"five",nil]

    // 用传入的字典对象创建字典
    NSDictionary *dict7 = [NSDictionary dictionaryWithDictionary:dict]

    // 用传入的key数组和 值的数组 创建字典对象
    NSDictionary *dict8 = [NSDictionary dictionaryWithObject:@[@"1",@"2",@"3"] forKeys:@[@"one",@"two",@"three"]]

    //字典操作：获取字典对象中键值对的个数
    NSInteger count = [dict count]

    // 通过key获取对象的值
    id obj = [dict objectForKey:@"three"]

    //获取所有的key
    NSArray *keyArray =  [dict allKeys]

    //获取所有的值
    NSArray *valuesArray =  [dict allValues]

    //判断两个字典对象是否相等
    BOOL ret = [dict isEqualToDictionary:@[@"1",@"2"]]

    // 字典的遍历
    NSEnumerator *keyEnumerator = [dict keyEnumerator]
    id obj = nil;
    while(obj = [keyEnumerator nextObject]) {
        NSLog(@"key = %@ value = %@", obj, [dict objectForKey:obj])
    }

    // 快速枚举法
    for(id obj in dict){
        NSLog(@"key = %@ value = %@", obj, [dict objectForKey:obj])
    }
```

10. 可变字典操作

```js
    // NSMutableDictionary 可变字典

    // 创建个可变的字典对象
    NSMutableDictionary *mulDict = [[NSMutableDictionary alloc] initWithCapacity:20]

    // 类方法创建可变的字典对象
    NSMutableDictionary *mulDict = [NSMutableDictionary dictionaryWithCapacity:20]

    // 删除指定key键值对
    [mulDict removeObjectForKey:@"three"]

    // 删除key的数组
     [mulDict removeObjectForKeys:@[@"three"]]

    // 删除所有的键值对
    [mulDict removeAllObjects]

    // 添加键值对
    [mulDict addEntriesFromDictionary:@{@"hello",@"1"}]

    // 重置可变的数组对象
    [mulDict setDictionary:dict2]

    // 添加/修改 键值对
    [mulDict setObject:@"5" forKey:@"five "]
```
