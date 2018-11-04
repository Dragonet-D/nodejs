const fs = require('fs');
const events = require('events');

const data = 'hello world';
const writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
writerStream.end();
const eventsEmitter = new events.EventEmitter();

// 处理流事件 ---> data, end, and, error
writerStream.on('finish', () => {
  console.log('写入完成');
  eventsEmitter.emit('data', {name: 'hello'})
});

writerStream.on('error', (err) => {
  console.log(err.stack);
});

console.log('程序执行完毕');
eventsEmitter.on('data', (data) => {
  console.log(data)
});