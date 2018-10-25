const fs = require('fs');

// 流的方式读取文件
let readStream = fs.createReadStream('input.txt');
let str = "";
