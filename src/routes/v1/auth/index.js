const Router = require("express").Router();

Router.use("/registration", require("./registration.route"));

module.exports = Router;
