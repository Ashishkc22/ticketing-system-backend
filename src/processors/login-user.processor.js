const { isEmpty } = require("lodash");
const bcrypt = require("bcrypt");
const { getModels } = require("../models");
const token = require("../utils/token.util");
module.exports = async ({ userName, password }) => {
  try {
    if (!userName || !password) {
      throw new Error("Missing parameters");
    }
    const modules = await getModels();
    console.log("modules--", modules.users);
    const userExists = await modules.users.findOne({ userName });
    if (isEmpty(userExists)) {
      throw new Error("User doesn't exist");
    }
    console.log("userExists", userExists);
    const isPasswordMatched = await bcrypt.compare(
      password,
      userExists.password
    );
    if (isPasswordMatched) {
      return token.createToken({
        data: { name: userExists.userName, email: userExists.email },
      });
    } else {
      return isPasswordMatched;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
