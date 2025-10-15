let users = [
  { id: 1, username: "najmi", name: "Najmi", email: "najmi@mail.com", role: "seller" },
  { id: 2, username: "budi", name: "Budi", email: "budi@mail.com", role: "buyer" }
];
let idCounter = users.length ? users[users.length - 1].id + 1 : 1;

const userRepository = {
  findAll() {
    return users;
  },

  findById(id) {
    return users.find(u => u.id === id);
  },

  findByUsername(username) {
    return users.find(u => u.username === username);
  },

  create({ username, name, email, role }) {
    const newUser = { id: idCounter++, username, name, email, role };
    users.push(newUser);
    return newUser;
  },

  update(id, { username, name, email, role }) {
    const user = users.find(u => u.id === id);
    if (!user) return null;
    if (username) user.username = username;
    if (name) user.name = name;
    if (email) user.email = email;
    if (role) user.role = role;
    return user;
  },

  remove(id) {
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    return users.splice(idx, 1)[0];
  }
};

module.exports = userRepository;