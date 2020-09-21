const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jwt-then");

class AuthService {
  constructor(container) {
    this.userModel = mongoose.model("User"); // can also use container.get("userModel") but it wont give intillisence
    this.event = container.get("eventEmitter");
  }

  Login = async ({ email, password }) => {
    const userRecord = await this.userModel.findOne({ email });
    if (!userRecord) throw "User with given email is not registered";
    const isPwMatch = await bcrypt.compare(password, userRecord.password);
    if (!isPwMatch) throw "Either email or password don't match";

    const tokenPayload = {
      id: userRecord._id,
      name: userRecord.name,
      email: userRecord.email,
      role: "USER",
      iat: Date.now(),
    };

    const token = await jwt.sign(tokenPayload, process.env.SECRET);
    return { message: "Logged in successfully", token, user: tokenPayload };
  };

  Register = async ({ email, name, password }) => {
    const userRecord = await this.userModel.findOne({ email });
    if (userRecord) throw "User with given email is already registered";
    const hashPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({
      name,
      email,
      password: hashPassword,
    });

    await user.save();
    // event emittor runs the task in another microprocess so our Register response wont get delayed
    this.event.emit("send_email", { type: "welcome", user: { name, email } });

    return { message: "Registration succeed", user };
  };
}

module.exports = AuthService;
