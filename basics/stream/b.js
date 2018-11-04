const fs = require('fs');
const file = fs.createWriteStream('input.txt');
// 写入会覆盖文件原有的数据;
file.write('hello,', (err) => {
  if (!err) {
    console.log('写入成功');
  }
});
file.end('world!');

