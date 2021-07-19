## Vue3

#### FQA?

1. Q: <template #[replaceFormSlotKey(item)]="data" # 是啥？

- A: 如果字符串以 # 开始，则它将被用作 querySelector,并使用匹配元素的 innerHTML 作为模板字符串。 简单的说就是查模版的 id 然后把元素塞进去

2. Q: 响应式的 api toRaw 和 markRaw 有何作用?

- A: toRaw:返回 reactive 或 readonly 代理的原始对象。这是一个“逃生舱”，可用于临时读取数据而无需承担代理访问/跟踪的开销，也可用于写入数据而避免触发更改; markRaw: 标记一个对象，使其永远不会转换为 proxy。返回对象本身。
- 1: 有一些操作不需要更新 UI 界面,就可以用 toRaw,节约性能,我们可以通过 toRaw 方法拿到它的原始数据，对原始数据进行修改,就不会更新 UI 界面
- 2: markRaw 标记永远不会转成 代理
- 3: shallowReactive：浅层监听(首层对象的变化) reactive:深层监听(内部进行递归监听) (shallowReadonly 和 readonly 同理)

3. Q: ref toRef toRefs 区别?

- 1: ref:数组变更也会修改会更新 dom reactive:数组变更不会更新 dom
- 2: ref 本质是拷贝，修改响应式数据不会影响原始数据；toRef 的本质是引用关系，修改响应式数据会影响原始数据
- 3: ref(obj.name)相当于 ref('alice')相当于 reactive({value:'alice'})
- 4: 通过 toRef 创建的响应式数据，并不会触发 UI 界面的更新
- 5: ref 数据发生改变，界面会自动更新；toRef 当数据发生改变是，界面不会自动更新
- 6: toRef 传参与 ref 不同；toRef 接收两个参数，第一个参数是哪个对象，第二个参数是对象的哪个属性
- 7: toRefs 遍历对象

4. Q: customRef shallowRef triggerRef 区别?

- 1: shallowRef 生成的数据只有第一层 key 是响应式的，因为 ref 数据有一个特点，会默认加一个 value 属性，传入的对象默认会作为 value 的属性值.
- 2: triggerRef 的作用就是将 ref 生成的数据强制再页面更新 ui

```js
const shallow = shallowRef({
	greet: 'Hello, world',
});

// 第一次运行时记录一次 "Hello, world"
watchEffect(() => {
	console.log(shallow.value.greet);
});

// 这不会触发副作用，因为 ref 是浅层的
shallow.value.greet = 'Hello, universe';

// 记录 "Hello, universe"
triggerRef(shallow);
```

- 3: customRef 自定义一个 ref

```js
function customRef<T>(factory: CustomRefFactory<T>): Ref<T>

type CustomRefFactory<T> = (
  track: () => void,
  trigger: () => void
) => {
  get: () => T
  set: (value: T) => void
}


function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
```

5. Q: vue3 的 h()函数 和 createVNode 有啥用?

- A: h()函数和 createVNode()函数都是创建 dom 节点，他们的作用是一样的，但是在 VUE3 中 createVNode()函数的功能比 h()函数要多且做了性能优化，渲染节点的速度也更快。

6. Q: provide & inject vue3 具体有何用?

- 1. provide() 和 inject() 可以实现嵌套组件之间的数据传递。
- 2. 这两个函数只能在 setup() 函数中使用。
- 3. 父级组件中使用 provide() 函数向下传递数据。
- 4. 子级组件中使用 inject() 获取上层传递过来的数据。
- 5. 不限层级
