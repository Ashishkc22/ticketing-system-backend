const { getModels } = require("../models");
const bcrypt = require("bcrypt");

module.exports = async function userResgistration(payload) {
  try {
    const models = await getModels();
    const userExists = await models.users.findOne({ email: payload.email });
    if (userExists) {
      console.log("userExists", userExists);
      throw new Error("User with email already exists.");
    }
    const salt = bcrypt.genSaltSync(10);
    console.log("salt", salt);
    payload.password = bcrypt.hashSync(payload.password, salt);
    console.log("payload.password", payload.password);
    const data = await models.users({ ...payload }).save();
    return data;
  } catch (error) {
    throw error;
  }
};
