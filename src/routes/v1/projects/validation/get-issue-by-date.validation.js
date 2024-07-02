const joi = require("joi");
const { issue } = require("../../../../enums")

module.exports = joi.object({
  projectId: joi.string().hex().length(24).required(),
  rangeType: joi.string().valid(...issue.issueRangeType)
});
