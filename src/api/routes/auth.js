const router = require("express").Router();
const { catchErrors } = require("../../helpers/errorHandlers");
//@TODO create catchError handler

const authController = require("../controllers/auth");

// User Authentication Resources
router.get("/login", catchErrors(authController.login));
router.get("/register", catchErrors(authController.register));

module.exports = (app) => {
  app.use("/auth", router);
};
