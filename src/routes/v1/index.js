const Router = require("express").Router();

Router.use("/test", require("./test"));
Router.use("/auth", require("./auth"));
Router.use("/projects", require("./projects"));

module.exports = Router;
