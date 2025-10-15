const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const validateUser = require("../middlewares/validateUser");

router.post("/", validateUser, usersController.createUser);
router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.put("/:id", validateUser, usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
