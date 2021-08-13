## Loadsh

- [官方](https://www.lodashjs.com/)

#### QFA?

1. loasdsh.wrap(value, [wrapper=identity]) ？

- A： 返回新的函数， 用于重构 元素

```js
var p = _.wrap(_.escape, function (func, text) {
	return '<p>' + func(text) + '</p>';
});

p('fred, barney, & pebbles');
// => '<p>fred, barney, & pebbles</p>'
```
