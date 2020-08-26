const http = require('http');
const app =  require('./app');
const express = require('express');
require('./mongo')
const port = process.env.port || 3001;
require('dotenv').config()
require('./handler/cloudinary')
const server = http.createServer(app);

server.listen(port)





