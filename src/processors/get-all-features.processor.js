const { getModels } = require("../models");
module.exports = async () => {
  try {
    const { features } = await getModels();
    return await features.find({}, { name: 1, _id: 0, id: "$_id" });
  } catch (error) {
    throw error;
  }
};
