const fs = require('fs');

// 流的方式读取文件
let readStream = fs.createReadStream('input.txt');
let str = "";
let count = 0;
readStream.on('data', (chunk) => {
  str += chunk;
  count++;
});
// 读取完成
readStream.on('end', (chunk) => {
  console.log(count);
  console.log(str);
});
