const groupService = require("./group.service");
const logger = require("../../services/logger.service");

module.exports = {
  getGroups,
  updateGroups,
  deleteGroup,
};

async function getGroups(req, res) {
  const filterBy = req.query || [];
  const groups = await groupService.query(filterBy);
  return res.json(groups);
}

async function updateGroups(req, res) {
  const groups = req.body;
  const savedGroups = await groupService.update(groups);
  return res.json(savedGroups);
}

async function deleteGroup(req, res) {
  const groupId = req.params.id;
  await groupService.remove(groupId);
  res.end("Group Deleted Well!");
}
