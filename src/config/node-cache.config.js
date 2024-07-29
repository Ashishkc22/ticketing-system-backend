const nodeCache = require("node-cache");

let nodeCacheInstance = null;

function initiateCache() {
  nodeCacheInstance = new nodeCache();
}

function getCacheInstance() {
  return nodeCacheInstance;
}

module.exports = {
  initiateCache,
  getCacheInstance,
};
