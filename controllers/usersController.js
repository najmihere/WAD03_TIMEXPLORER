const User = require("../models/userModel");

exports.createUser = (req, res) => {
  const newUser = User.create(req.body);
  res.status(201).json(newUser);
};

exports.getUsers = (req, res) => {
  res.json(User.getAll());
};

exports.getUserById = (req, res) => {
  const user = User.getById(parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

exports.updateUser = (req, res) => {
  const updated = User.update(parseInt(req.params.id), req.body);
  if (!updated) return res.status(404).json({ message: "User not found" });
  res.json(updated);
};

exports.deleteUser = (req, res) => {
  const deleted = User.delete(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ message: "User not found" });
  res.json(deleted);
};
