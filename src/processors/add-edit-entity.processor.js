const { getModels } = require("../models");
module.exports = async ({ entityDetails }) => {
  try {
    const { entities } = await getModels();
    const payload = {
      name: entityDetails.name,
    };
    return await entities(payload).save();
  } catch (error) {
    throw error;
  }
};
