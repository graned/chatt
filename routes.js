module.exports = function factory () {
  const helloWelt = async (req, res, next) => {
    res.send('👋🏽🌎');
  };

  const errorHandler = (error, req, res, next) => {
      const status = 500; // TODO: enhance this
      console.log(`Error during API execution status[${status}]: ${error}`)
      res.status(status).json({ error });
  };

  return {
    helloWelt,
    errorHandler,
  };
};