const { isEmpty } = require("lodash");
const { getModels } = require("../models");
const { Types } = require("mongoose");
module.exports = async ({
  skip,
  limit,
  search,
  entityId,
  projectId,
  status,
}) => {
  try {
    const { tickets } = await getModels();
    let query = {
      $and: [
        { entityId: new Types.ObjectId(entityId) },
        { projectId: new Types.ObjectId(projectId) },
        !isEmpty(status) ? { status }: {},
      ],
    };
    if (!isEmpty(search) && !/^\s*$/.test(search)) {
      const regex = new RegExp(search.toLowerCase(), "i");
      query["$and"] = [
        ...query["$and"],
        { $or: [{ issueId: regex }, { summary: { $regex: regex } }] },
      ];
    }
    return {
      data: await tickets.find(query).skip(skip).limit(limit),
      count: await tickets.count(query),
    };
  } catch (error) {
    throw error;
  }
};
