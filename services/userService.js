const userRepository = require("../repositories/userRepository");

const userService = {
  getAllUsers() {
    return userRepository.findAll();
  },

  getUserById(id) {
    return userRepository.findById(id);
  },

  createUser(data) {
    // business validation
    const { username, name, email, role } = data;
    if (!username || !name || !email || !role) {
      const err = new Error("All fields are required");
      err.status = 400;
      throw err;
    }
    if (role !== "buyer" && role !== "seller") {
      const err = new Error("Role must be buyer or seller");
      err.status = 400;
      throw err;
    }
    if (userRepository.findByUsername(username)) {
      const err = new Error("Username already exists");
      err.status = 400;
      throw err;
    }
    return userRepository.create({ username, name, email, role });
  },

  updateUser(id, data) {
    // optionally validate fields here
    const user = userRepository.update(id, data);
    return user;
  },

  deleteUser(id) {
    return userRepository.remove(id);
  }
};

module.exports = userService;