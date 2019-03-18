const routes = require('./routes')();
const server = require('./server')(routes);

server.start();