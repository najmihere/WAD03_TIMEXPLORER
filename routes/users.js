const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/", usersController.createUser);
router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUserById);   // ambil user by ID
router.put("/:id", usersController.updateUser);    // update user
router.delete("/:id", usersController.deleteUser); // delete user

module.exports = router;


