let dbConnection;

async function getDBconnection() {
  try {
    if (dbConnection) {
      return dbConnection;
    } else {
      dbConnection = await connectDB();
      return dbConnection;
    }
  } catch (error) {
    throw error;
  }
}

async function connectDB() {
  try {
    require("dotenv").config();
    const mongoose = require("mongoose");
    mongoose.set("strictQuery", true);
    return await mongoose.connect(process.env.MONGO_DEV_URL);
  } catch (error) {
    throw error || new Error("Failed to connect to DB.");
  }
}
module.exports = {
  getDBconnection,
  connectDB,
};
