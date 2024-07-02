const joi = require("joi")
const { issue } = require("../../../../enums")

module.exports = joi.object({
    _id: joi.string().hex().length(24).required(),
    projectId: joi.string().hex().length(24).required(),
    status: joi.string().valid(...issue.status).required()
})