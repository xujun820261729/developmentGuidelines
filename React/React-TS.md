## React-Ts 方案
- TS语法已经接近普及,在React中使用TS的还有存在区别的
- 本文将对antd-pro 的umi react 框架做个TS分析-我们用两个组件的维度分析使用


#### 基础类型
- 数据单元:数字，字符串，结构体，布尔值等(基本和javaScript相同)
1. boolean 
2. number 
3. string 
4. number 或  Array<number>
5. Any 比如来自用户输入或第三方代码库用
6. Void 表示没有返回值的函数
7. Null 和 undefined 作用不大
8. 类型断言  
```ts
(<string>someValue).length // 尖括号
(someValue as string).length // as语法
```

#### 泛型
- 如何在开发中实现类型重用?泛型可以解决这个问题
```ts
function identity<T>(arg: T): T {
    return arg;
}
```
- 函数 入参为A类型,则返回A类型;入参为B类型,则返回B类型;

#### 接口
```ts
interface Point {
    readonly x: number; //只读属性
    a?:number; // 可选属性
    (source: string, subString: string): boolean; // 函数使用
    [index: number]: string; // 可索引的类型
    value?: (string | number)[]; // 或使用
    // 使用第三方库时候,要研究下他的来源和类型哦
    // export declare type SizeType = number | 'small' | 'default' | 'large'; // 未使用的
    UserName: React.FC<WrappedLoginItemProps>; // 类型指定为一个函数组件
    // import { RouteChildrenProps } from 'react-router';  // 路由的类型
}

```

#### React常用的第三方类型和本身类型
```ts
interface Point {
  e: React.FormEvent // 当前DOM对象
  // import { FormComponentProps } from 'antd/es/form';
  form: FormComponentProps['form']; // 表单对象
  style?: React.CSSProperties; //React中css的类型
  className?: string; // 类型属性名
  onSubmit?: (error: unknown) => void; // TS3.0新增的顶级类型
  e:React.KeyboardEvent<HTMLInputElement> // 按下的类型
  // import { Dispatch } from 'redux';
  dispatch: Dispatch<any>; // redux的类型
  title: React.ReactNode; // React的节点
}
```

### 类组件 219.11.1
- TS类组件如何定义?语法是什么?在react中指向的类型如何知道?

1. TS类组件声明
```ts
class Login extends Component<LoginProps, LoginState> {
   constructor(theName: string) { this.name = theName; } // 构造函数
   public static Tab = LoginTab; // 静态属性
   static a:any=>viod; // 静态方法，只能通过该类调用，不能通过实例化调用，可以在派生中使用
   protected name: string; // 仅能在派生类中使用,不能实列化
   private name: string; // 私有的方法
   readonly name: string; // 使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
   constructor (theName: string) {
        this.name = theName;
    }
   render() {}
}
// 类当成接口使用
```

2. 函数组件的使用
```ts
  // 泛型类型，第一个传入参数约束属性props，第二个约束状态state(内部数据)
  const LoginSubmit: React.FC<LoginSubmitProps,propsState> = ({ className, ...rest }) => {   // React.FC泛型
    static defaultProps = {  // 属性默认值
        firstName: "",
        lastName: "",
    };

    function HelloHoc<P>(params?: any) {
      return function<P>(WrappedComponent: React.ComponentType<P>) { // P表示被包装组件的属性的类型
          return class NewComponent extends React.Component<P & Loading>{ // 这里使用交叉类型，为新组件增加一些属性,接口Loading定义了新增的属性声明
            render(){
                return this.props.loading ? <div>Loading</div> : <WrappedComponent {...this.props as P}/>
    
            }
          }
      }
    }

    // 上面的方法在组件中使用会报很多错误，所以编写函数组件时候经量使用hooks

    render() {
    const IconText: React.FC<{
        type: string;
        text: React.ReactNode;
      }> = ({ type, text }) => (
        <span>
          <Icon type={type} style={{ marginRight: 8 }} />
          {text}
        </span>
      );
    }
  })
```