let fs = require('fs');
let data = "我是从数据库获取的数据,我要保存起来\n";
// 创建一个可以写入的流, 写入到文件output.txt中
let writeSteam = fs.createWriteStream('fs/output.txt');

for (let i = 0; i < 100; i++) {
  writeSteam.write(data, 'utf8');
}

// 标记写入完成
writeSteam.end();

writeSteam.on('finish', () => {
  console.log('写入完成')
});

writeSteam.on('error', (err) => {
  console.log(err)
});

