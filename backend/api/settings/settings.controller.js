const settingsService = require("./settings.service");
const logger = require("../../services/logger.service");

module.exports = {
  getSettings,
  updateSettings,
};

async function getSettings(req, res) {
  const settings = await settingsService.query();
  return res.json(settings);
}

async function updateSettings(req, res) {
  const settings = req.body;
  const savedSettings = await settingsService.update(settings);
  return res.json(savedSettings);
}
