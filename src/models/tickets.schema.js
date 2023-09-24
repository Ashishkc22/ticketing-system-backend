const { Schema } = require("mongoose")

const ticketSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    attachments: [
        {
            type: String,
            url: String,
            name: String
        }
    ]
})

module.exports = ticketSchema