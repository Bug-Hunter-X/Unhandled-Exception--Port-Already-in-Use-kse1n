const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const onError = (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose another port or stop the existing server.`);
    process.exit(1);
  } else {
    console.error(`An error occurred: ${err.message}`);
    process.exit(1);
  }
};

const onListening = () => {
  console.log(`Server is running at http://localhost:${port}/`);
};

server.on('error', onError);

server.listen(port, onListening); 