let users = [
  { id: 1, username: "najmi", name: "Najmi", email: "najmi@mail.com", role: "admin" },
  { id: 2, username: "budi", name: "Budi", email: "budi@mail.com", role: "user" }
];

class User {
  static getAll() {
    return users;
  }

  static getById(id) {
    return users.find(u => u.id === id);
  }

  static create({ username, name, email, role }) {
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      username,
      name,
      email,
      role
    };
    users.push(newUser);
    return newUser;
  }

  static update(id, { username, name, email, role }) {
    const user = users.find(u => u.id === id);
    if (!user) return null;

    if (username) user.username = username;
    if (name) user.name = name;
    if (email) user.email = email;
    if (role) user.role = role;

    return user;
  }

  static delete(id) {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    return users.splice(index, 1)[0];
  }
}

module.exports = User;


