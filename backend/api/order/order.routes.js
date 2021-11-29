const express = require("express");
const router = express.Router();

const {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
} = require("./order.controller");

const { requireAuth } = require("../../middlewares/requireAuth.middleware");

// router.get("/", requireAuth, getOrders);
router.get("/", getOrders);
router.post("/", createOrder);
router.get("/:id", requireAuth, getOrder);
router.delete("/:id", requireAuth, deleteOrder);

module.exports = router;
