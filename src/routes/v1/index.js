const Router = require("express").Router();
const { authorization } = require("../../middlewares")

Router.use("/test", require("./test"));
Router.use("/auth", require("./auth"));
Router.use("/projects", authorization, require("./projects"));

module.exports = Router;
