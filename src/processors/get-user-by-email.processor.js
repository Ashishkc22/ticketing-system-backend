const { getModels } = require("../models");

module.exports = async ({ email, otherMatch = {}, filter = {} }) => {
  try {
    const { users } = await getModels();
    return await users.findOne(
      { ...(email && { email }), ...otherMatch },
      filter
    );
  } catch (error) {
    throw error;
  }
};
