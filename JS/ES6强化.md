## ES6
- [基础](https://es6.ruanyifeng.com/#docs)

### proxy
- 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），在目标对象之前架设一层“拦截”，外界对该对象的访问.

1. call/apply的第一个参数如果为null。this指向window
```javascript
demo.call(null)//this 指向window
demo.call(window)//this同样指向window
```
2. Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。
3. get: 方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
    1. 访问不存在的属性，只会返回undefined.
    2. get方法可以继承.
    3. 数组的位置参数是-1，就会输出数组的倒数第一个成员.

4. set: 赋值操作,四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。
5. apply方法拦截函数的调用、call和apply操作。三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
6. has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。
7. construct:方法用于拦截new命令，下面是拦截对象的写法。
8. deleteProperty:方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
9. defineProperty()方法拦截了Object.defineProperty()操作。

### Reflect
- 同现在的Object几乎一致。

1. 将Object对象的一些明显属于语言内部的方法
2. 修改某些Object方法的返回结果。
```js
Object.defineProperty(obj, name, desc) // 在无法定义属性时，会抛出一个错误
Reflect.defineProperty(obj, name, desc) // 则会返回false。
```
3. 让Object操作都变成函数行为
```js
'assign' in Object // true
Reflect.has(Object, 'assign') // true
```
4. Reflect.construct方法等同于new target(...args)