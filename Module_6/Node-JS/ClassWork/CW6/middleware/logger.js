const loggingMiddleware = (req, res, next) => {
  const start = Date.now(); // Start time
  const method = req.method;
  const url = req.originalUrl;
  const timestamp = new Date().toISOString();

  res.on('finish', () => {
    const duration = Date.now() - start; // Time taken
    const status = res.statusCode;
    console.log(`[${timestamp}] ${method} ${url} - ${status} - ${duration}ms`);
  });

  next(); // Proceed to next middleware or route
};

module.exports = loggingMiddleware;
