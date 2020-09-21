const AuthService = require("../../services/auth");
const { Container } = require("typedi");

exports.login = async (req, res) => {
  console.log("here");
  const { email, password } = req.query;
  if (!email || !password) {
    res.json({ message: "Err" });
    return;
  }
  const AuthServiceInstance = Container.get(AuthService);
  const response = await AuthServiceInstance.Login({ email, password });
  res.json(response);
};

exports.register = async (req, res) => {
  const { email, password, name } = req.query;
  if (!email || !password || !name) throw "Required fields email, name, password";
  const AuthServiceInstance = Container.get(AuthService);
  const response = await AuthServiceInstance.Register({ email, name, password });
  res.json(response);
};
