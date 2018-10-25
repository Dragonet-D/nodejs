let fs = require('fs');
let data = "我是从数据库获取的数据,我要保存起来\n";
// 创建一个可以写入的流, 写入到文件output.txt中
let writeSteam = fs.createWriteStream('fs/output.txt');
writeSteam.write(data, 'utf8');