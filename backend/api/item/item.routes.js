const express = require("express");
const { requireAuth } = require("../../middlewares/requireAuth.middleware");
const router = express.Router();

const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("./item.controller");

router.get("/", getItems);
router.post("/", requireAuth, createItem);
router.get("/:id", getItem);
router.put("/:id", requireAuth, updateItem);
router.delete("/:id", requireAuth, deleteItem);

module.exports = router;
