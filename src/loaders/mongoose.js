const mongoose = require("mongoose");

module.exports = async () => {
  const connection = await mongoose.connect("mongodb://localhost/sales_nepal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.set("useCreateIndex", true);
  mongoose.connection.on("error", () => {
    console.error("MongoDB Connection ERROR");
  });

  mongoose.connection.once("open", function () {
    console.log("MongoDB connected");
  });

  return connection.connection.db;
};
