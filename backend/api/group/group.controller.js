const settingsService = require("./group.service");
const logger = require("../../services/logger.service");

module.exports = {
  getGroups,
  updateGroups,
};

async function getGroups(req, res) {
  const groups = await groupService.query();
  return res.json(groups);
}

async function updateGroups(req, res) {
  const groups = req.body;
  const savedGroups = await groupService.update(groups);
  return res.json(savedGroups);
}
