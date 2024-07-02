const Router = require("express").Router();
const { chnageIssueStatus: chnageIssueStatusProcessor } = require("../../../processors");
async function chnageIssueStatus(req, res) {
  try {
    const { _id, projectId, status } = req.body;
    await chnageIssueStatusProcessor({ id: _id, projectId, status });
    return res.sendData({ data: "Done" });
  } catch (error) {
    console.log('error',error);
    return res.sendData(
      { error: "Unable to change issue status. Somthing went wrong!" },
      400
    );
  }
}

Router.post("", chnageIssueStatus);

module.exports = Router;
