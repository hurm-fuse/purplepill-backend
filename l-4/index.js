const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;
const fs = require("fs");
const htmlfile = fs.readFileSync('index.html')

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlfile);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});