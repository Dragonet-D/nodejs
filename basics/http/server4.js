const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  console.log(req.url)
  res.end()
})

server.listen(8080, 'localhost')