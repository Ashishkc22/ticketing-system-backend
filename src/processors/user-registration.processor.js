const { getModels } = require("../models");

module.exports = async function userResgistration(payload) {
  try {
    const models = await getModels();
    const userExists = await models.users.findOne({ email: payload.email });
    if (userExists) {
      console.log("userExists", userExists);
      throw new Error("User with email already exists.");
    }
    const data = await models.users({ ...payload }).save();
    return data;
  } catch (error) {
    throw error;
  }
};
