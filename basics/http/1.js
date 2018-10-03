let http = require('http');
let url = require('url');
http.createServer((req, res) => {
    // req.url 获取浏览器输入信息
    // 第一个参数是地址;第二个参数是true的话表示转化为对象
    let query = url.parse(req.url, true);
    res.writeHead(200, {'Content-type':'text/html;charset="utf-8"'});
    res.write('<div>hello nodejs</div>');
    if (req.url !== '/favicon.ico') {
        console.log(query.query);// 获取url的get传值;
    }
    res.end();
}).listen(8001);

