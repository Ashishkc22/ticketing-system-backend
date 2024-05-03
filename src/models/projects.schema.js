const { Schema, Types } = require("mongoose");

const projectSchema = new Schema({
  name: { type: String, required: true },
  shortNotation: { type: String, required: true },
  entityId: { type: Types.ObjectId, required: true },
  description: { type: String },
  shortDescription: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  attachments: new Schema([
    {
      type: String,
      url: String,
      name: String,
    },
  ]),
});

module.exports = projectSchema;
