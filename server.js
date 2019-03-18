const express = require('express');
const app = express()

// set of template engine
app.set('view engine', 'ejs');

// set of middleware
app.use(express.static('public'));

module.exports = function factory(routes) {
  function start() {
    const port = process.env.PORT || 3000;
    const host = process.env.HOST || 'localhost';

    app.listen(port, host, () => {
      console.log(`Server started at ${host}:${port}`);
    })
  }

  app.get('/', routes.helloWelt);
  app.use(routes.errorHandler);

  app.start = start;

  return app;
}