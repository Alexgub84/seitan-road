const express = require("express");
const router = express.Router();

const { getSettings, updateSettings } = require("./settings.controller");

const { requireAuth } = require("../../middlewares/requireAuth.middleware");

router.get("/", getSettings);
router.put("/", requireAuth, updateSettings);
router.put("/", updateSettings);

module.exports = router;
