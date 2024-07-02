
module.exports = {
  userRegistration: require("./user-registration.processor"),
  loginUser: require("./login-user.processor"),
  addEditProject: require("./add-edit-project.processor"),
  getMyProjects: require("./get-my-projects.processor"),
  deleteProjectById: require("./delete-project-by-id.processor"),
  addEditIssue: require("./add-edit-issue.processor"),
  getIssues: require("./get-issues.processor"),
  getIssuesByDateRange: require("./get-issues-by-date-range.processor"),
  chnageIssueStatus:require("./change-issue-status.processor"),
  getIssueById: require("./get-issue-by-id.processor"),
  deleteIssueById: require("./delete-issue-by-id.processor")
};
