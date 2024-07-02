const Router = require("express").Router();
const { getIssueById } = require("../../../processors");

async function GetIssueById(req, res, next) {
  try {
    const { entityId } = req?.context || {};
    res.sendData({ data: await getIssueById({ id: req.query.id,entityId }) });
  } catch (error) {
    console.log('error',error);
    res.sendData(
      { error: "Something went wrong while fetching issue by id." },
      400
    );
  }
}
Router.get("", GetIssueById);

module.exports = Router;
