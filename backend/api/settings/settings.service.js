const fs = require("fs");
const dbService = require("../../services/db.service");
const { Logger } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const logger = require("../../services/logger.service");

module.exports = {
  query,
  update,
};

async function query() {
  const collection = await dbService.getCollection("settings");
  try {
    const settings = await collection.find().toArray();
    return settings;
  } catch (err) {
    logger.error(`ERROR: cannot get settings list, err: ${err}`);
    throw err;
  }
}

async function update(settings) {
  console.dir(settings, { depth: Infinity });

  const collection = await dbService.getCollection("settings");
  try {
    settings._id = ObjectId(settings._id);
    await collection.replaceOne({ _id: settings._id }, settings);
    logger.info(`settings was updated well!`);
    return settings;
  } catch (err) {
    logger.error(`ERROR: cannot update settings ${settings}, err: ${err}`);
    throw err;
  }
}
