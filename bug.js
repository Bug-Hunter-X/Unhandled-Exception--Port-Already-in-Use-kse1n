const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080); //This will throw error if port is already in use

console.log('Server is running at http://localhost:8080/');