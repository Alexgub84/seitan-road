const fs = require("fs");
const dbService = require("../../services/db.service");
const { Logger } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const logger = require("../../services/logger.service");

module.exports = {
  query,
  remove,
  save,
};

async function query(filterBy) {
  const collection = await dbService.getCollection("group");
  try {
    const groups = await collection.find(filterBy).toArray();
    return groups;
  } catch (err) {
    logger.error(`ERROR: cannot get group list, err: ${err}`);
    throw err;
  }
}
async function remove(_id) {
  const collection = await dbService.getCollection("group");
  try {
    await collection.deleteOne({ _id: ObjectId(_id) });
    logger.info(`Group ${_id} was removed well!`);
  } catch (err) {
    logger.error(`ERROR: cannot remove group ${_id}, err: ${err}`);
    throw err;
  }
}

async function save(group) {
  const collection = await dbService.getCollection("group");
  if (group._id) {
    group._id = ObjectId(group._id);
    try {
      await collection.updateOne({ _id: group._id }, { $set: group });
      logger.info(`group ${group._id} was updated well!`);
      return group;
    } catch (err) {
      logger.error(`ERROR: cannot update group ${group._id}, err: ${err}`);
      throw err;
    }
  } else {
    try {
      await collection.insertOne(group);
      logger.info(`group ${group._id} was creted well!`);
      return group;
    } catch (err) {
      logger.error(
        `ERROR: cannot insert group ${group._id} to DB, err: ${err}`
      );
      throw err;
    }
  }
}
