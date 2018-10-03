/*
* __filename: 返回当前模块文件的解析后的绝对路径, 该属性并非全局,而是模块作用域下的
*__dirname: 返回的是当前模块文件所在目录解析后的绝对路径,该属性不是全局而是模块所在的文件夹路径
* */

console.log(__filename);
console.log(__dirname);

setInterval(() => {
    var d = new Date();
    console.log(d);
});
