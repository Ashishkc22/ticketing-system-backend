const joi = require("joi");
const { regex } = require("../../../../enums");

module.exports = joi.object({
  email: joi.string().required().regex(regex.email),
});
