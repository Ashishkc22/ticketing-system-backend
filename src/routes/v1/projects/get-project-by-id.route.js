const Router = require("express").Router();
const { getMyProjects } = require("../../../processors");

async function getProjectById(req, res, next) {
  try {
    const { entityId } = req?.context || {};
    res.sendData({ data: await getMyProjects({ entityId,id: req.body.id,type:"findOne" }) }, 200);
  } catch (error) {
    res.sendData({ error: "Something went wrong." }, 400);
  }
}

Router.get("", getProjectById);

module.exports = Router;
