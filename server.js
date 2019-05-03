const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to Cam's Projects</h2>`);
});

module.exports = server;