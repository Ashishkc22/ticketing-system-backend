const { Schema, Types } = require("mongoose");

const projectSchema = new Schema({
  name: { type: String, required: true },
  entityId: { type: Types.ObjectId, required: true },
  description: { type: String },
  attachments: new Schema([
    {
      type: String,
      url: String,
      name: String,
    },
  ]),
});

module.exports = projectSchema;
