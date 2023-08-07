const joi = require("joi");
const { regex } = require("../../../../enums");

module.exports = joi.object({
  phone: joi.string().required(),
  entityDetails: joi.object({
    name: joi.string(),
  }),
  email: joi.string().regex(regex.email).required().messages({
    "string.pattern": "Invalid email.",
  }),
  password: joi.string().regex(regex.password).required().messages({
    "string.pattern":
      "Minimum eight characters,At least one uppercase letter,One lowercase letter,one number and one special character",
  }),
});
