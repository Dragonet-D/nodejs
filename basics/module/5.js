// 在一个模块中定义的变量是当前范围内的模块;外部不能直接访问;
// 如果我们想一个模块能够访问另一个模块中定义的变量;
/*可以加上一个global属性, 写法不推荐;减少全局变量
使用模块对象, module对象
在module对象下面有一个子对象, 我们可以通过这个对象把一个模块中的局部对象对外进行访问;
在模块作用域,还有内置模块对象,exports,他其实就是module.exports
* */
var a = 100;
module.exports.a = {
    a
};

console.log(module.exports === exports); // true
exports.a = {a}; // 这两种都可以