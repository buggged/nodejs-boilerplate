const { Container } = require("typedi");
const events = Container.get("eventEmitter");

events.on("send_email", (val) => {
  console.log(val);
});
