const { Schema, Types, model } = require("mongoose");

const entityRoles = new Schema({
  name: { type: String, required: true },
  permissions: [String],
});

module.exports = model("EntityRoles", entityRoles);
