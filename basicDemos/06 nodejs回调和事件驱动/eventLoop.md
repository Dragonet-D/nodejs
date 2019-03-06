# Nodejs 事件循环

## setImmediate() 对比 setTimeout()
setImmediate() 和 setTimeout() 很类似，但何时调用行为完全不同。

- setImmediate() 设计为在当前<b>轮询</b>阶段完成后执行脚本。
- setTimeout() 计划在毫秒的最小阈值经过后运行的脚本。

执行计时器的顺序将根据调用它们的上下文而异。如果二者都从主模块内调用，则计时将受进程性能的约束（这可能会受到计算机上运行的其它应用程序的影响）。

例如，如果运行的是不属于 I/O 周期（即主模块）的以下脚本，则执行两个计时器的顺序是非确定性的，因为它受进程性能的约束：

```javascript
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

/*
timeout
immediate
*/

/*
immediate
timeout
*/
```
如果放入同一个I/O循环内调用,setImmediate总是优先执行;
```javascript
const fs = require("fs");
fs.readFile(filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
/*
immediate
timeout
*/
```
使用 setImmediate() 超过 setTimeout() 的主要优点是 setImmediate() 在任何计时器（如果在 I/O 周期内）都将始终执行，而不依赖于存在多少个计时器。


