const { isEmpty } = require("lodash");
const { getModels } = require("../models");
const { Types, ISODate } = require("mongoose");
module.exports = async ({ entityId, projectId, startDate, endDate }) => {
  try {
    const { tickets } = await getModels();

    const data = await tickets.aggregate([
      {
        $match: {
          entityId: new Types.ObjectId(entityId),
          projectId: new Types.ObjectId(projectId),
          dueDate: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
          },
        },
      },
      {
        $group: {
          _id: "$status",
          data: { $push: "$$ROOT" },
        },
      },
      {
        $project: {
          _id: 0,
          status: "$_id",
          data: 1,
        },
      },
      {
        $group: {
          _id: null,
          results: {
            $push: {
              k: "$status",
              v: "$data",
            },
          },
        },
      },
      {
        $replaceRoot: {
          newRoot: { $arrayToObject: "$results" },
        },
      },
    ]);
    console.log("data", data);
    return data;
  } catch (error) {
    throw error;
  }
};
