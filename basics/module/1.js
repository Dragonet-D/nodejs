/*
* 一个文件就是一个模块
* 每个模块都有自己的作用域
*
* 我们用var来申明一个变量, 他并不是全局的, 而是属于当前模块下的
* */

var a = 100;
global.a = 200;
console.log(a);
console.log(global.a);
console.log(__filename);

/*
* 模块加载系统
* require()
* */
require('./2.js');

/*
* 模块加载机制:
*   路径
*       相对路径
*       绝对路径
* */
// require('2.js') 会去加载node中的核心模块. 或者node_modules

/*
* 首先按照加载的模块的文件名称进行查找
* 如果没有找到则会在文件名后加上.js的后缀进行查找
* 如果还没找到会在文件名称后加上.json
* 如果还没找到加上.node后缀进行查找
*
* 文件名 -> .js -> .json -> .node
* */

