const itemService = require("./item.service");
const logger = require("../../services/logger.service");

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};

async function getItems(req, res) {
  const filterBy = req.query;
  const items = await itemService.query(filterBy);
  items.sort((item) => (item.measure === "gram" ? -1 : 1));
  logger.debug(items);
  res.send(items);
}

async function getItem(req, res) {
  const itemId = req.params.id;
  const item = await itemService.getById(itemId);
  return item;
}

async function createItem(req, res) {
  const item = req.body;
  const savedItem = await itemService.save(item);
  return res.json(savedItem);
}

async function updateItem(req, res) {
  const item = req.body;
  const savedItem = await itemService.save(item);
  return res.json(savedItem);
}

async function deleteItem(req, res) {
  const itemId = req.params.id;
  await itemService.remove(itemId);
  res.end("Item Deleted Well!");
}
