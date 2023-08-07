const { isEmpty } = require("lodash");
const bcrypt = require("bcrypt");
const { getModels } = require("../models");
const token = require("../utils/token.util");
module.exports = async ({ email, password }) => {
  try {
    if (!email || !password) {
      throw new Error("Missing parameters");
    }
    const modules = await getModels();
    const userExists = await modules.users.findOne({ email });
    if (isEmpty(userExists)) {
      throw new Error("User doesn't exist");
    }
    const isPasswordMatched = await bcrypt.compare(
      password,
      userExists.password
    );
    if (isPasswordMatched) {
      return token.createToken({
        data: {
          name: userExists?.name,
          email: userExists?.email,
          id: userExists._id || userExists.id,
          entityId: userExists.entityId,
        },
      });
    } else {
      return isPasswordMatched;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
