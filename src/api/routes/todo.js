const router = require("express").Router();
// Demonstration of using auth middleware
const auth = require("../middlewares/auth");

// This route is for all authenticated user
router.get("/todo", auth(), (req, res) => {
  res.json({ message: "you got access" });
});

// This route is for user with role USER only
router.post("/todo", auth("USER"), (req, res) => {
  res.json({ message: "you got access" });
});

// This route is for user with role ADMIN || SUPER
router.delete("/todo/:id", auth("ADMIN", "SUPER"), (req, res) => {
  res.json({ message: "you got access" });
});

module.exports = (app) => {
  app.use(router);
};
