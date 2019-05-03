const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./projects/projects-router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/projects', projectsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to Cam's Projects</h2>`);
});

module.exports = server;