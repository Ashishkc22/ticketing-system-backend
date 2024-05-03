const Router = require("express").Router();
const { getIssues } = require("../../../processors");
async function getIssueList(req, res) {
  try {
    const { limit, page, search, projectId,status } = req.query;
    const { entityId } = req.context;
    const result = await getIssues({
      skip: (page - 1) * limit,
      limit,
      search,
      entityId,
      projectId,
      status
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
