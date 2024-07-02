const Router = require("express").Router();
const { getIssues } = require("../../../processors");
const {
  issue: { ISSUE_TYPES },
} = require("../../../enums");
async function getIssueList(req, res) {
  try {
    const { limit, page, search, projectId, status, isBacklogs } = req.query;
    const { entityId } = req.context;
    const result = await getIssues({
      skip: (page - 1) * limit,
      limit,
      search,
      entityId,
      projectId,
      status: isBacklogs ? ISSUE_TYPES.Backlog : status,
    });
    return res.sendData({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.sendData({ error: "Failed to get issues list" }, 400);
  }
}

Router.get("", getIssueList);

module.exports = Router;
