const { Schema, Types, model } = require("mongoose");

const entityRoles = new Schema({
  name: { type: String, required: true },
  permissions: [String],
  entityId: Types.ObjectId,
  userId: Types.ObjectId,
});

module.exports = entityRoles;
