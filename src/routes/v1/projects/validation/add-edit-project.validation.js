const joi = require("joi");

module.exports = joi.object({
  id: joi.string().hex().length(24),
  name: joi.string().required(),
  description: joi.string().required(),
  shortDescription: joi.string().required(),
  startDate: joi.date().required(),
  endDate: joi.date().required(),
});
