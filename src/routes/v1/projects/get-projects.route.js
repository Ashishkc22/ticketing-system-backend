const Router = require("express").Router();
const { getMyProjects } = require("../../../processors");

async function getProjects(req, res, next) {
  try {
    const { entityId } = req?.context || {};
    res.sendData({ data: await getMyProjects({ entityId }) }, 200);
  } catch (error) {
    res.sendData({ error: "Something went wrong." }, 400);
  }
}

Router.get("", getProjects);

module.exports = Router;
