const Router = require("express").Router();
const addEditProjectValidation = require("./validation/add-edit-project.validation");
const deleteProjectByIdValidation = require("./validation/delete-project.validation");
const getProjectByIdValidation = require("./validation/get-project-by-id.validation");
const { applyValidation } = require("../../../utils/applyValidation.util");

Router.use(
  "/add-edit-project",
  applyValidation(addEditProjectValidation),
  require("./add-edit-project.route")
);
Router.use("/get-projects", require("./get-projects.route"));
Router.use(
  "/delete-project-by-id",
  applyValidation(deleteProjectByIdValidation),
  require("./delete-project-by-id.route")
);
Router.use(
  "/get-project-by-id",
  applyValidation(getProjectByIdValidation),
  require("./get-project-by-id.route")
);
Router.use(
  "/add-edit-issue",
  applyValidation(require("./validation/add-edit-issue.validation")),
  require("./add-edit-issue.route")
);
Router.use(
  "/get-issue-list",
  applyValidation(require("./validation/get-issue-list.validation")),
  require("./get-issue-list.route")
);
module.exports = Router;
