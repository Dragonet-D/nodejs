const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

let mimeModel = require('./model/util');

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  if(pathname === '/') {
    pathname = '/index.html'
  }
  // 获取文件后缀名
  let extname = path.extname(pathname);
  if (pathname !== '/favicon.ico') {
    // 文件操作
    fs.readFile(`static/${pathname}`, (err, result) => {
      if (err) {
        fs.readFile('static/404.html', (errr, data) => {
          res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
          res.write(data);
          res.end();
        })
      } else {
        // 获取文件类型
        let mime = mimeModel.getMime(extname);
        res.writeHead(200, {'Content-Type': `${mime};charset="utf-8"`});
        res.write(result);
        res.end();
      }
    });
  }
}).listen(8080);
