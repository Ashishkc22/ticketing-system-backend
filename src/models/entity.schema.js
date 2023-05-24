const { Schema, Types, model } = require("mongoose");

const entity = new Schema({
  name: { type: String, required: true },
  roles: [{ name: String, id: Types.ObjectId }],
});

module.exports = model("entity", entity);
