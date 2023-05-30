const { keys } = require("lodash");
const dbConfig = require("../config/db.config");

const schemas = {
  entity: require("./entity.schema"),
  users: require("./users.schema"),
  entityRoles: require("./entityRoles.schema"),
  permissions: require("./permissions.schema"),
};

const models = [];

async function blindModels() {
  try {
    const connection = await dbConfig.getDBconnection();
    keys(schemas).forEach((key) => {
      console.log(`Registering ${key} model......`);
      models[key] = connection.model(key, schemas[key], key);
      console.log(`${key} model successfully resgistered.`);
    });
  } catch (error) {
    throw error;
  }
}

async function getModels() {
  try {
    if (models.length) {
      return models;
    } else {
      await blindModels();
      return models;
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  blindModels,
  getModels,
};
