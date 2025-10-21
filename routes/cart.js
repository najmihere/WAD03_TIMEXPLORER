const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
// optional: const validateCart = require("../middlewares/validateCart");

router.post("/:username/add", /* validateCart, */ cartController.addToCart);
router.post("/:username/remove", cartController.removeFromCart);
router.get("/:username", cartController.getCart);
router.delete("/:username", cartController.clearCart);

module.exports = router;