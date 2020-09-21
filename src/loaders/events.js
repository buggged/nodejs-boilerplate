const EventEmitter = require("events").EventEmitter;
const events = new EventEmitter();
const { Container } = require("typedi");

Container.set("eventEmitter", events);
