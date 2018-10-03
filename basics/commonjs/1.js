let http = require('http');
let tool  = require('./config.js');
let app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type":"text/html;charset:utf-8"});
    res.write("hello node.js");
    res.end();
});
app.listen(8001);