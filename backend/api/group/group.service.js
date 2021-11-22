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
  const collection = await dbService.getCollection("group");
  try {
    const groups = await collection.find().toArray();
    return groups;
  } catch (err) {
    logger.error(`ERROR: cannot get group list, err: ${err}`);
    throw err;
  }
}

async function update(group) {
  console.dir(group, { depth: Infinity });

  const collection = await dbService.getCollection("group");
  try {
    group._id = ObjectId(group._id);
    await collection.replaceOne({ _id: group._id }, group);
    logger.info(`group was updated well!`);
    return group;
  } catch (err) {
    logger.error(`ERROR: cannot update group ${group}, err: ${err}`);
    throw err;
  }
}
