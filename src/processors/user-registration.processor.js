const { Users } = require("../models");

module.exports = async function userResgistration(payload) {
  try {
    const data = await Users({ ...payload }).save();
    console.log("data", data);
    return data;
  } catch (error) {
    throw error;
  }
};
