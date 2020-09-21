const { Container } = require("typedi");
const userModal = require("../models/user");

const init = () => {
  Container.set("userModel", userModal);
};

module.exports = init;
