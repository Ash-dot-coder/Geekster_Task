// const requestLogger = (req, res, next) => {
//   const method = req.method;
//   const url = req.originalUrl;
//   const ip = req.ip;
//   const timestamp = new Date().toISOString();

//   console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
//   next(); // Pass control to the next middleware/route
// };

// module.exports = requestLogger;


const logger = (level, message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${level.toUpperCase()} - ${timestamp}] ${message}`);
};

const requestLogger = (req, res, next) => {
  logger('info', `${req.method} ${req.originalUrl} from ${req.ip}`);
  next();
};

module.exports = requestLogger;
