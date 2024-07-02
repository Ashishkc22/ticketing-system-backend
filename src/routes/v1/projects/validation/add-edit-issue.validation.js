const joi = require("joi");
const { database, issue } = require("../../../../enums");

const fieldsForAddCase = {
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
};

const fieldsForEditCase = {
  projectId: joi.string().hex().length(24).required(),
  description: joi.string(),
  summary: joi.string(),
  dueDate: joi.date(),
  issueType: joi.string().valid(...database.ISSUE_TYPES),
  status: joi.string().valid(...issue.status),
};

module.exports = joi.object({
  issueId: joi.string().hex().length(24),
  data: joi.alternatives().conditional(joi.ref('issueId'), {
    is: joi.exist(),
    then: joi.object(fieldsForEditCase),
    otherwise: joi.object(fieldsForAddCase)
  }),
});
