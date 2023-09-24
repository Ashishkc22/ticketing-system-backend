const Router = require("express").Router();
const addEditProjectValidation = require("./validation/add-edit-project.validation");
const { applyValidation } = require("../../../utils/applyValidation.util");

Router.use(
  "/add-edit-project",
  applyValidation(addEditProjectValidation),
  require("./add-edit-project.route")
);
Router.use("/get-projects", require("./get-projects.route"));

module.exports = Router;
