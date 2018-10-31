// 非阻塞I/O 异步 事件驱动
const fs = require('fs');

console.log(1);
function getData(callBack) {
  fs.readFile('a.json', (err, data) => {
    callBack(data);
  });
}

getData((data) => {
  console.log(data);
});
