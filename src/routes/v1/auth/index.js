const Router = require("express").Router();

Router.use("/registration", require("./registration.route"));
Router.use("/login", require("./login.route"));

module.exports = Router;
