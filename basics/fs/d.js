const fs = require('fs');

// 创建一个可读流
const readerStream = fs.createReadStream('input.txt');

// 创建一个可以流
const writeStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取input.txt文件内容,并将内容写入到output.txt文件中
readerStream.pipe(writeStream);
console.log('执行完毕');