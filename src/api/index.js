const { Router } = require("express");
const auth = require("./routes/auth");

// Register all routes here
module.exports = () => {
  const app = Router();
  auth(app);
  return app;
};
