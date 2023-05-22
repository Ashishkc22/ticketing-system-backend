const Router = require("express").Router();

Router.use("/test", require("./test"));
Router.use("/auth", require("./auth"));

module.exports = Router;
