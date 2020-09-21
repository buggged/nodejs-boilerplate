require("dotenv").config();
const express = require("express");
const cors = require("cors");

const startServer = async () => {
  const app = express();

  //File Upload Enable
  // app.use(require("express-fileupload")());

  //Static Folder enable
  // app.use(express.static("../public"));

  //Allow CORS
  app.use(cors());

  //Allow JSON
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  //Bring in the models to typdi
  require("./loaders/modal")();
  await require("./loaders/mongoose")();

  //Bring in the routes!
  app.use(require("./api/index")());

  // Bring event loaders
  require("./loaders/events");

  //Bring all subscribers
  require("./subscribers/index");

  app.listen(3000, () => {
    console.log("Server Listening on: " + 3000);
  });
};

startServer();
