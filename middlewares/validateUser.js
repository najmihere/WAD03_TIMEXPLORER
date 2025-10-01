module.exports = (req, res, next) => {
  const { username, name, email, role } = req.body;
  if (!username || !name || !email || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  next();
};
