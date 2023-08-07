const Router = require("express").Router();

Router.use("/add-edit-project", require("./add-edit-project.route"));

module.exports = Router;
