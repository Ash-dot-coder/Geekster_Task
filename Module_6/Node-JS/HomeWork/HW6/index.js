const express = require("express");
const morgan = require("morgan");
const requestLogger = require("./middleware/requestLogger"); // Custom logger

const app = express();
const PORT = 3000;

// Apply the custom middleware globally
app.use(requestLogger);

// Apply Morgan logging middleware (optional but should come after your custom one)
app.use(morgan("combined")); // Options: 'dev', 'tiny', 'combined', etc.

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Request Logger App!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/status", (req, res) => {
  res.send("Status Page ..working");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`👨‍💻 Developed by: Ayush Kohre \n`);
});
