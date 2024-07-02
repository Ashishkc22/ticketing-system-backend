const joi = require("joi");
const { issue } = require("../../../../enums")

module.exports = joi.object({
  projectId: joi.string().hex().length(24).required(),
  page: joi.number().min(1).required(),
  limit: joi.number().min(5),
  search: joi.string(),
  status: joi.string().valid(...issue.status),
  isBacklogs: joi.boolean()
});
