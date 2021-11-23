const express = require("express");
const router = express.Router();

const { getGroups, deleteGroup, createGroup } = require("./group.controller");

const { requireAuth } = require("../../middlewares/requireAuth.middleware");

router.get("/", getGroups);
router.delete("/:id", requireAuth, deleteGroup);
router.put("/", requireAuth, createGroup);

module.exports = router;
