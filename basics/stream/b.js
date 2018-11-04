const fs = require('fs');
const file = fs.createWriteStream('input.txt');
// 写入会覆盖文件原有的数据;
file.write('hello\n');
file.end('world!');

