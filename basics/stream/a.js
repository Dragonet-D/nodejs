const fs = require("fs");
let data = "";

const readerStream = fs.createWriteStream('input.txt');

readerStream.on('data', (chunk) => {
  data =+ chunk;
});

readerStream.on('end', () => {
  console.log(data);
});

readerStream.on('error', (error) => {
  console.log(error.stack);
});

console.log('程序执行完毕');