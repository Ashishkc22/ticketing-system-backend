async function dbConnnection() {
  try {
    require("dotenv").config();
    const mongoose = require("mongoose");
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_DEV_URL);
  } catch (error) {
    throw error || new Error("Failed to connect to DB.");
  }
}
module.exports = {
  dbConnnection,
};
