const userService = require("../services/userService");

exports.createUser = (req, res) => {
  try {
    const newUser = userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

exports.getUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};

exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = userService.getUserById(id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = userService.updateUser(id, req.body);
  if (!updated) return res.status(404).json({ message: "User not found" });
  res.json(updated);
};

exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = userService.deleteUser(id);
  if (!deleted) return res.status(404).json({ message: "User not found" });
  res.json(deleted);
};