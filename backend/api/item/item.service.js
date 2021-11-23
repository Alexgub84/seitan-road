const dbService = require("../../services/db.service");
const { Logger } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const logger = require("../../services/logger.service");

module.exports = {
  query,
  getById,
  save,
  remove,
};

async function query(filterBy = {}) {
  const criteria = _buildCriteria(filterBy);
  const collection = await dbService.getCollection("item");
  try {
    const items = await collection.find(criteria).toArray();
    return items;
  } catch (err) {
    logger.error(`ERROR: cannot get item list, err: ${err}`);
    throw err;
  }
}

async function getById(_id) {
  const collection = await dbService.getCollection("item");
  try {
    const item = await collection.findOne({
      _id: ObjectId(_id),
    });
    return item;
  } catch (err) {
    logger.error(`ERROR: cannot find item by id  ${_id}, err: ${err}`);
    throw err;
  }
}

async function remove(_id) {
  const collection = await dbService.getCollection("item");
  try {
    await collection.deleteOne({ _id: ObjectId(_id) });
    logger.info(`Item ${_id} was removed well!`);
  } catch (err) {
    logger.error(`ERROR: cannot remove item ${_id}, err: ${err}`);
    throw err;
  }
}

async function save(item) {
  const collection = await dbService.getCollection("item");
  if (item._id) {
    item._id = ObjectId(item._id);
    try {
      await collection.updateOne({ _id: item._id }, { $set: item });
      logger.info(`item ${item._id} was updated well!`);
      return item;
    } catch (err) {
      logger.error(`ERROR: cannot update item ${item._id}, err: ${err}`);
      throw err;
    }
  } else {
    try {
      await collection.insertOne(item);
      logger.info(`Item ${item._id} was creted well!`);
      return item;
    } catch (err) {
      logger.error(`ERROR: cannot insert item ${item._id} to DB, err: ${err}`);
      throw err;
    }
  }
}

function _buildCriteria(filterBy) {
  const criteria = {};
  if (filterBy.type) {
    criteria.type = filterBy.type;
  }

  if (filterBy.type) {
    criteria.type = filterBy.type;
  }

  return criteria;
}
