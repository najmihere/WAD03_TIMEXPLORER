const { User } = require('../database');

const userRepository = {
  async findAll() {
    return await User.findAll();
  },

  async findById(id) {
    return await User.findByPk(id);
  },

  async findByUsername(username) {
    return await User.findOne({ where: { username } });
  },

  async create({ username, name, email, role }) {
    return await User.create({ username, name, email, role });
  },

  async update(id, data) {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update(data);
  },

  async remove(id) {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.destroy();
    return user;
  },
};

module.exports = userRepository;