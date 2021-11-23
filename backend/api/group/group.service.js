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
    console.log("groups return in query\n" + JSON.stringify(groups));
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
    await collection.insertOne(group);
    logger.info(`order ${group._id} was creted well!`);
    return order;
  } catch (err) {
    logger.error(`ERROR: cannot update group ${group}, err: ${err}`);
    throw err;
  }
}
