const { Schema, Types, model } = require("mongoose");
const { database: DBConstants } = require("../constants");

const entity = new Schema({
  name: { type: String, required: true },
  roles: [{ name: String, id: Types.ObjectId }],
});

module.exports = entity;
