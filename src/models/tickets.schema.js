const { Schema, Types } = require("mongoose");
const { database, issue } = require("../enums");

const ticketSchema = new Schema(
  {
    issueId: { type: String },
    description: { type: String },
    dueDate: { type: Date },
    summary: { type: String },
    projectId: { type: Types.ObjectId, required: true },
    entityId: { type: Types.ObjectId, required: true },
    issueType: { type: String, enums: database.ISSUE_TYPES },
    status: { type: String, enums: issue.status },
    attachments: [
      {
        type: String,
        url: String,
        name: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = ticketSchema;
