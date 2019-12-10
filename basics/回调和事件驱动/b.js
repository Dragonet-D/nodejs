// 非阻塞I/O 异步 事件驱动
const fs = require('fs');
const events = require('events');

const EventEmitter = new events.EventEmitter();

console.log(1);
function getData(callBack) {
  fs.readFile('./a.json', (err, data) => {
    EventEmitter.emit('data', data);
  });
}
getData();

// 监听广播数据
EventEmitter.on('data', (mime) => {
  console.log(mime)
  console.log(mime.toString());
});