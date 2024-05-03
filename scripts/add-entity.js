// node ./scripts/add-entity.js ashish ashish.choudhari@gmail.com AshishKc#33 ac_commpany
async function addEntitys() {
  try {
    const userName = process.argv[2];
    const email = process.argv[3];
    const password = process.argv[4];
    const entityName = process.argv[5];

    if (!userName || !email || !password || !entityName) {
      throw new Error("missing arvgs");
    }
    let session;
    try {
      const models = await require("../src/models").getModels();
      await models.user({ userName: "jksaskj" }).save();
      await models.entity({ name: "ashish" }).save();
      await models.entityRoles({ name: "roles" }).save();
      await models.permissions({ name: "relow" }).save();
      // session = db.startSession();
      // session.startTransaction();
    } catch (error) {
      // session.abortTransaction();
      throw new Error(error || "Failed to transactions");
    } finally {
      // session.endSession();
      // db.close();
      process.exit();
    }

    // created an entity.
    //
  } catch (error) {
    throw new Error(error || "Failed to create new entity.");
  }
}

addEntitys();
