const express = require("express");
const app = express();
const PORT = 3000;

// Import custom middleware
const loggingMiddleware = require("./middleware/logger");

// Use logging middleware
app.use(loggingMiddleware);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// Start the server
app.listen(PORT, () => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Server is running on http://localhost:${PORT}`);
  console.log(`👨‍💻 Developed by: Ayush Kohre`);
});
