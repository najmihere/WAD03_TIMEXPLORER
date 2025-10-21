module.exports = (req, res, next) => {
  const { username, name, email, role } = req.body;
  if (!username || !name || !email || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  next();
};

module.exports = (req, res, next) => {
  const { productId, productName, price, quantity } = req.body;
  if (!productId || !productName || !price || !quantity) {
    return res.status(400).json({ message: "productId, productName, price and quantity are required" });
  }
  next();
};