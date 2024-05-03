const joi = require("joi");

module.exports = joi.object({
  id: joi.string().hex().length(24).required(),
});
