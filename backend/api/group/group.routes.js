const express = require("express");
const router = express.Router();

const { getGroups, updateGroups } = require("./group.controller");

const { requireAuth } = require("../../middlewares/requireAuth.middleware");

router.get("/", getGroups);
router.put("/", requireAuth, updateGroups);

module.exports = router;
