const joi = require("joi")

module.exports = joi.object({
    id: joi.string().required().hex().length(24)
})