const groupService = require("./group.service");
const logger = require("../../services/logger.service");

module.exports = {
  getGroups,
  createGroup,
  deleteGroup,
};

async function getGroups(req, res) {
  const filterBy = req.query;
  const criteria = "";
  if (filterBy) {
  }
  const groups = await groupService.query(criteria);
  return res.json(groups);
}

async function createGroup(req, res) {
  const groups = req.body;
  const savedGroups = await groupService.save(groups);
  return res.json(savedGroups);
}

async function deleteGroup(req, res) {
  const groupId = req.params.id;
  await groupService.remove(groupId);
  res.end("Group Deleted Well!");
}
