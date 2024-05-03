const joi = require("joi");
const { database, issue } = require("../../../../enums");
module.exports = joi.object({
  issueId: joi.string().hex().length(24),
  data: {
    projectId: joi.string().hex().length(24).required(),
    description: joi.string().required(),
    summary: joi.string().required(),
    dueDate: joi.date().required(),
    issueType: joi
      .string()
      .valid(...database.ISSUE_TYPES)
      .required(),
    status: joi
      .string()
      .valid(...issue.status)
      .required(),
  },
});
